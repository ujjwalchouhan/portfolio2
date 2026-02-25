/**
 * React helper: get CDN image URLs from manifest
 * Usage: const { avif, webp } = getImage("hero");
 *
 * Run `npm run images:sync` from img-handler to generate the manifest.
 * Optionally set REACT_MANIFEST_OUTPUT=../portfolio-website/src/data/image-manifest.json
 * to copy the manifest here for reliable imports.
 */

// Prefer local manifest if copied by pipeline; fallback to img-handler
let manifest = {};
try {
  manifest = require('../data/image-manifest.json');
} catch {
  try {
    manifest = require('../../../img-handler/Images/image-manifest.json');
  } catch {
    manifest = {};
  }
}

/**
 * Returns { avif, webp } URLs for the given image key
 * @param {string} key - Image key (filename without extension), e.g. "hero", "card1"
 * @returns {{ avif: string, webp: string }}
 */
export function getImage(key) {
  const entry = manifest[key];
  if (!entry) {
    return { avif: '', webp: '' };
  }
  return {
    avif: entry.avif || '',
    webp: entry.webp || '',
  };
}

export default getImage;
