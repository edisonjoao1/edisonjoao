const BLOB_URL = 'https://jsonblob.com/api/jsonBlob/019c6989-b6cf-70a7-bf6e-10bf3144c31e';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const r = await fetch(BLOB_URL, { headers: { 'Accept': 'application/json' } });
    const data = await r.json();
    return res.json(data);
  }

  if (req.method === 'PUT') {
    const r = await fetch(BLOB_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(req.body)
    });
    return res.status(r.ok ? 200 : 500).json({ ok: r.ok });
  }

  res.status(405).json({ error: 'Method not allowed' });
}
