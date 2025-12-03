# How to Add Real Product Images

## Current Setup

Right now the site uses **Picsum placeholder images** - these are temporary and should be replaced with real product photography.

---

## Option 1: Add Local Images (Recommended for WordPress)

### Step 1: Organize Your Photos
Create these folders in your WordPress media library or theme:
```
/images/
  /products/
    - bustier-velours-noir.jpg
    - set-passion.jpg
    - set-midnight-sin.jpg
  /hero/
    - hero-background.jpg
  /lifestyle/
    - brand-story.jpg
```

### Step 2: Prepare Images
**Requirements:**
- Format: JPG or WebP
- Resolution: Minimum 1200px wide
- Aspect Ratio: 3:4 (portrait) for products
- File Size: Under 500KB (optimize with TinyPNG.com)
- Quality: 85-90%

### Step 3: Replace Placeholder URLs
In `index.html`, change:
```html
<!-- FROM THIS: -->
<img src="https://picsum.photos/800/1066?random=1" ...>

<!-- TO THIS: -->
<img src="images/products/bustier-velours-noir.jpg" ...>
```

---

## Option 2: Use Her Current WordPress Images

### From yennifernunez.com

1. **Access WordPress Admin**
   - Go to: https://yennifernunez.com/wp-admin
   - Navigate to: Media Library

2. **Get Image URLs**
   - Click on product image
   - Copy "File URL" (usually looks like:)
   ```
   https://yennifernunez.com/wp-content/uploads/2024/03/product-name.jpg
   ```

3. **Update HTML**
   ```html
   <img src="https://yennifernunez.com/wp-content/uploads/2024/03/bustier.jpg" ...>
   ```

---

## Option 3: Professional Stock Photos (Quick Start)

### Free Stock Photo Sites:
1. **Pexels** - https://www.pexels.com/
   - Search: "lingerie", "intimate apparel", "boudoir"
   - High quality, free commercial use

2. **Unsplash** - https://unsplash.com/
   - Search same terms
   - Download large size (1200px+)

3. **Pixabay** - https://pixabay.com/
   - Similar, free commercial use

### How to Use Stock Photos:
```html
<!-- Pexels example -->
<img src="https://images.pexels.com/photos/PHOTO-ID/pexels-photo-PHOTO-ID.jpeg?auto=compress&cs=tinysrgb&w=1200" ...>
```

---

## Photography Guidelines for Her Products

### Lighting
- Soft, diffused natural light
- Avoid harsh shadows
- Golden hour (late afternoon) is best
- Or use ring light/softbox

### Composition
- Product takes up 40-60% of frame
- Leave negative space (empty areas)
- Shoot on neutral background (white, cream, light gray)

### Angles
- Straight-on for front view
- 45-degree angle for dimension
- Flat lay for sets
- Detail shots for lace/texture

### Styling
- Use mannequin or model
- Iron/steam products first
- Style with minimal props (silk, flowers, minimal jewelry)

### Phone Photography Tips
- Clean your lens
- Use Portrait mode
- Tap to focus
- Natural light near window
- Shoot multiple angles

---

## Image Specifications by Section

### Hero Section
```
Size: 1920x1080px (16:9)
Style: Black & white or muted colors
Focus: Atmospheric, moody
```

### Product Cards (Main)
```
Size: 800x1066px (3:4)
Style: Professional, well-lit
Focus: Product clearly visible
```

### Product Grid (Small)
```
Size: 600x800px (3:4)
Style: Consistent lighting
Focus: Multiple products same style
```

### Brand Story
```
Size: 1200x1500px (4:5)
Style: Lifestyle, behind-the-scenes
Focus: Craftsmanship, designer
```

---

## Quick Fix: Use Existing Site Images

### Extract from Current Site

1. **Visit**: https://yennifernunez.com/
2. **Right-click** on any product image
3. **Select**: "Open Image in New Tab"
4. **Copy URL** from address bar
5. **Use in new design**

Example:
```html
<img src="https://yennifernunez.com/wp-content/uploads/2022/11/bustier-negro.jpg"
     alt="Bustier Negro">
```

---

## Image Optimization Tools

### Online (Free):
- **TinyPNG** - https://tinypng.com/ (best compression)
- **Squoosh** - https://squoosh.app/ (Google tool)
- **Compressor.io** - https://compressor.io/

### Batch Processing:
- **ImageOptim** (Mac) - Free, drag & drop
- **RIOT** (Windows) - Free, batch processing

### Recommended Settings:
- Format: JPG (photos) or WebP (modern browsers)
- Quality: 85% (sweet spot)
- Progressive: Yes (loads gradually)

---

## For WordPress Integration

### Using Divi/Page Builder:

1. **Upload Images**
   - Go to: Media > Add New
   - Upload all product photos

2. **In Divi Builder**
   - Edit module
   - Click image selector
   - Choose from Media Library

3. **Set Alt Text**
   - Very important for SEO
   - Example: "Bustier negro de encaje - Yennifer Nuñez"

---

## Professional Photography (Recommended)

### Budget: $800-1,500

**What you get:**
- 1 day shoot in Bogotá
- 20-30 products photographed
- Multiple angles per product
- Lifestyle shots
- Behind-the-scenes content
- Professional editing

**How to find:**
- Instagram: #fotografiabogota #fashionphotographycolombia
- Search: "fotógrafo de moda Bogotá"
- Ask for portfolio of product/fashion work

---

## Temporary Solution (Right Now)

The site currently uses **Picsum placeholders** which work but are random photos.

**To quickly improve:**

1. **Go to her WordPress site**
2. **Copy 3-4 best product image URLs**
3. **Replace the Picsum URLs** in lines 75, 95, 116 of `index.html`

Example:
```html
<!-- Change this: -->
<img src="https://picsum.photos/800/1066?random=1">

<!-- To this: -->
<img src="https://yennifernunez.com/wp-content/uploads/2024/03/her-actual-product.jpg">
```

---

## Image Checklist

Before going live, ensure:
- [ ] All images load (no broken links)
- [ ] Images are optimized (< 500KB each)
- [ ] Consistent lighting/style across products
- [ ] Alt text added for SEO
- [ ] Images look good on mobile
- [ ] High-resolution enough (no pixelation)
- [ ] Professional or at least well-lit
- [ ] Products clearly visible

---

## Next Steps

1. **For testing**: Keep Picsum placeholders (they work)
2. **For launch**: Replace with her actual product photos
3. **For perfection**: Hire photographer for pro shoot

The design is ready - it just needs her real products to shine!

---

**Questions?**
- Need help finding specific images?
- Want recommendations for photographers in Bogotá?
- Need help with WordPress image upload?

Let me know!
