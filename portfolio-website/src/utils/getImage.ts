/**
 * React helper: get CDN image URLs from manifest
 * Usage: const { avif, webp } = getImage("hero");
 *
 * Run `npm run images:sync` from img-handler to generate the manifest.
 * Optionally set REACT_MANIFEST_OUTPUT=../portfolio-website/src/data/image-manifest.json
 * to copy the manifest here for reliable imports.
 */

interface ImageEntry {
  avif: string;
  webp: string;
}

interface Manifest {
  [key: string]: ImageEntry;
}

let manifest: Manifest = {};
try {
  manifest = require('../data/image-manifest.json') as Manifest;
} catch {
  try {
    manifest = require('../../../img-handler/Images/image-manifest.json') as Manifest;
  } catch {
    manifest = {};
  }
}

/**
 * Returns { avif, webp } URLs for the given image key
 * @param key - Image key (filename without extension), e.g. "hero", "card1"
 */
export function getImage(key: string): { avif: string; webp: string } {
  const entry = manifest[key];
  if (!entry) {
    return { avif: '', webp: '' };
  }
  return {
    avif: entry.avif ?? '',
    webp: entry.webp ?? '',
  };
}

export default getImage;
