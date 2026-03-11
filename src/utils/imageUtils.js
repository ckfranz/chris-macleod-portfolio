// src/utils/imageUtils.js
import { getImage } from "gatsby-plugin-image";

export function prepareImage(media, prefer = "jpg") {
  if (!media) return { imageData: null, src: null };

  // Prefer the large field for preview; fall back to thumb; then raw URL
  const large =
    media.gatsbyImageDataLarge ||
    media.gatsbyImageData ||
    media.gatsbyImageDataThumb;
  const thumb = media.gatsbyImageDataThumb || media.gatsbyImageData;

  const imageData = getImage(large || thumb) || null;

  // Fallback URL (force a browser-friendly format for HEIC)
  let raw = media.secure_url || media.url || null;
  if (raw) {
    raw = raw.includes("f_auto")
      ? raw.replace("f_auto", `f_${prefer}`)
      : raw.replace("/image/upload/", `/image/upload/f_${prefer}/`);
  }

  return { imageData, src: raw };
}

export function makeCldSrcSet(raw, qs = "f_jpg,q_auto:good,dpr_auto,c_limit") {
  if (!raw) return undefined;
  const widths = [640, 960, 1280, 1600, 2000];
  const toW = (w) =>
    raw.includes("/image/upload/")
      ? raw.replace("/image/upload/", `/image/upload/${qs},w_${w}/`)
      : raw;
  return widths.map((w) => `${toW(w)} ${w}w`).join(", ");
}
