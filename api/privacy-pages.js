import { timingSafeEqual } from 'node:crypto';
import { get, put } from '@vercel/blob';

const MAX_BODY_BYTES = 150_000;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const STORAGE_PATH = 'privacy/pages.json';

function validPage(page) {
  if (!page || typeof page !== 'object' || Array.isArray(page)) return false;
  if (typeof page.slug !== 'string' || page.slug.length > 80 || !SLUG.test(page.slug)) return false;
  if (typeof page.name !== 'string' || !page.name.trim() || page.name.length > 100) return false;
  for (const key of ['local', 'connected', 'analytics', 'choices']) {
    if (typeof page[key] !== 'string' || !page[key].trim() || page[key].length > 3000) return false;
  }
  return true;
}

function authorized(req) {
  const expected = process.env.PRIVACY_ADMIN_TOKEN;
  const supplied = req.headers.authorization?.replace(/^Bearer /, '') ?? '';
  if (!expected || !supplied) return false;
  const left = Buffer.from(expected);
  const right = Buffer.from(supplied);
  return left.length === right.length && timingSafeEqual(left, right);
}

async function readPages() {
  const result = await get(STORAGE_PATH, { access: 'private', useCache: false });
  if (!result) return [];
  if (result.statusCode !== 200) throw new Error(`Policy storage read failed: ${result.statusCode}`);
  const data = await new Response(result.stream).json();
  if (!data || !Array.isArray(data.pages)) throw new Error('Policy storage returned invalid data');
  return data.pages;
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (!process.env.BLOB_READ_WRITE_TOKEN && !process.env.VERCEL_OIDC_TOKEN) {
    return res.status(503).json({ error: 'Privacy page editing is not configured.' });
  }

  if (req.method === 'GET') {
    try {
      return res.status(200).json({ pages: await readPages() });
    } catch {
      return res.status(502).json({ error: 'Privacy pages are temporarily unavailable.' });
    }
  }

  if (req.method !== 'PUT') {
    res.setHeader('Allow', 'GET, PUT');
    return res.status(405).json({ error: 'Method not allowed.' });
  }
  if (!authorized(req)) return res.status(401).json({ error: 'Invalid access code.' });

  const body = req.body;
  if (!body || !Array.isArray(body.pages) || body.pages.length > 100 ||
      Buffer.byteLength(JSON.stringify(body)) > MAX_BODY_BYTES || !body.pages.every(validPage)) {
    return res.status(400).json({ error: 'Check the app name and policy sections.' });
  }
  const slugs = body.pages.map(page => page.slug);
  if (new Set(slugs).size !== slugs.length) {
    return res.status(400).json({ error: 'Each app needs a unique URL.' });
  }

  try {
    await put(STORAGE_PATH, JSON.stringify({ pages: body.pages }), {
      access: 'private',
      allowOverwrite: true,
      contentType: 'application/json',
      cacheControlMaxAge: 60,
    });
    return res.status(200).json({ pages: body.pages });
  } catch {
    return res.status(502).json({ error: 'Could not save your changes. Please try again.' });
  }
}
