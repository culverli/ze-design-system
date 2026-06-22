#!/usr/bin/env node

import fs from "node:fs";

const MODES = {
  "rough-hairline": { roughness: 1.0, bowing: 0.65, strokeWidth: 1.5 },
  "rough-pencil": { roughness: 1.45, bowing: 1.15, strokeWidth: 2.1 },
  "rough-strong": { roughness: 1.75, bowing: 1.35, strokeWidth: 2.6 },
  "rough-path": { roughness: 1.35, bowing: 1.4, strokeWidth: 2.2 },
};

const args = parseArgs(process.argv.slice(2));
const shape = args.shape || "divider";
const modeName = args.mode || "rough-hairline";
const mode = MODES[modeName];

if (!mode) {
  fail(`Unknown mode "${modeName}". Use one of: ${Object.keys(MODES).join(", ")}`);
}

const width = numberArg("width", 720);
const height = numberArg("height", shape === "divider" ? 56 : 220);
const seed = numberArg("seed", 7);
const stroke = args.stroke || "#141414";
const opacity = args.opacity || "1";

let rng = mulberry32(seed);
let body = "";

if (shape === "divider") {
  body = roughLine(24, height * 0.5, width - 24, height * 0.5, mode, stroke, opacity);
} else if (shape === "underline") {
  body = roughLine(20, height * 0.62, width - 20, height * 0.54, mode, stroke, opacity);
} else if (shape === "rect") {
  body = roughRect(8, 8, width - 16, height - 16, mode, stroke, opacity);
} else if (shape === "path") {
  body = roughCubicPath(width, height, mode, stroke, opacity, true);
} else if (shape === "loop") {
  body = roughLoop(width, height, mode, stroke, opacity);
} else {
  fail('Unknown shape. Use "divider", "underline", "rect", "path", or "loop".');
}

const svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
${body}
</svg>
`;

if (args.out) {
  fs.writeFileSync(args.out, svg);
} else {
  process.stdout.write(svg);
}

function parseArgs(argv) {
  const parsed = {};
  for (let i = 0; i < argv.length; i += 1) {
    const part = argv[i];
    if (!part.startsWith("--")) continue;
    const key = part.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      parsed[key] = "true";
    } else {
      parsed[key] = next;
      i += 1;
    }
  }
  return parsed;
}

function numberArg(name, fallback) {
  const raw = args[name];
  if (raw === undefined) return fallback;
  const value = Number(raw);
  if (!Number.isFinite(value) || value <= 0) fail(`--${name} must be a positive number.`);
  return value;
}

function fail(message) {
  process.stderr.write(`${message}\n`);
  process.exit(1);
}

function mulberry32(seedValue) {
  let state = seedValue >>> 0;
  return function random() {
    state += 0x6D2B79F5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function jitter(amount) {
  return (rng() - 0.5) * 2 * amount;
}

function point(x, y, amount) {
  return [x + jitter(amount), y + jitter(amount)];
}

function fmt(value) {
  return Number(value).toFixed(2);
}

function pathTag(d, mode, strokeColor, lineOpacity, widthMultiplier = 1) {
  const sw = mode.strokeWidth * widthMultiplier;
  return `  <path d="${d}" fill="none" stroke="${strokeColor}" stroke-linecap="round" stroke-linejoin="round" stroke-width="${fmt(sw)}" opacity="${lineOpacity}"/>`;
}

function roughLine(x1, y1, x2, y2, mode, strokeColor, lineOpacity) {
  return [
    pathTag(linePath(x1, y1, x2, y2, mode, 1), mode, strokeColor, lineOpacity),
    pathTag(linePath(x1, y1, x2, y2, mode, 0.65), mode, strokeColor, "0.45", 0.72),
  ].join("\n");
}

function linePath(x1, y1, x2, y2, mode, pass) {
  const length = Math.hypot(x2 - x1, y2 - y1);
  const offset = mode.roughness * (pass === 1 ? 1.1 : 0.75);
  const bow = Math.min(42, Math.max(4, length * 0.035)) * mode.bowing * (rng() > 0.5 ? 1 : -1);
  const [sx, sy] = point(x1, y1, offset);
  const [ex, ey] = point(x2, y2, offset);
  const mx = (x1 + x2) / 2 + jitter(offset * 2);
  const my = (y1 + y2) / 2 + bow + jitter(offset * 2);
  return `M ${fmt(sx)} ${fmt(sy)} Q ${fmt(mx)} ${fmt(my)} ${fmt(ex)} ${fmt(ey)}`;
}

function roughRect(x, y, w, h, mode, strokeColor, lineOpacity) {
  const edges = [
    roughLine(x, y, x + w, y, mode, strokeColor, lineOpacity),
    roughLine(x + w, y, x + w, y + h, mode, strokeColor, lineOpacity),
    roughLine(x + w, y + h, x, y + h, mode, strokeColor, lineOpacity),
    roughLine(x, y + h, x, y, mode, strokeColor, lineOpacity),
  ];
  return edges.join("\n");
}

function roughCubicPath(widthValue, heightValue, mode, strokeColor, lineOpacity, arrow) {
  const start = [widthValue * 0.08, heightValue * 0.68];
  const c1 = [widthValue * 0.24, heightValue * 0.12];
  const c2 = [widthValue * 0.58, heightValue * 0.06];
  const end = [widthValue * 0.86, heightValue * 0.56];
  const d = cubicD(start, c1, c2, end, mode);
  const second = cubicD(start, c1, c2, end, { ...mode, roughness: mode.roughness * 0.7 });
  const parts = [
    pathTag(d, mode, strokeColor, lineOpacity),
    pathTag(second, mode, strokeColor, "0.42", 0.72),
  ];
  if (arrow) {
    parts.push(roughLine(end[0] - widthValue * 0.07, end[1] - heightValue * 0.06, end[0] + 2, end[1], mode, strokeColor, lineOpacity));
    parts.push(roughLine(end[0] - widthValue * 0.07, end[1] + heightValue * 0.06, end[0] + 2, end[1], mode, strokeColor, lineOpacity));
  }
  return parts.join("\n");
}

function cubicD(start, c1, c2, end, mode) {
  const amount = mode.roughness * 1.8;
  const [sx, sy] = point(start[0], start[1], amount);
  const [c1x, c1y] = point(c1[0], c1[1] + jitter(mode.bowing * 5), amount);
  const [c2x, c2y] = point(c2[0], c2[1] + jitter(mode.bowing * 5), amount);
  const [ex, ey] = point(end[0], end[1], amount);
  return `M ${fmt(sx)} ${fmt(sy)} C ${fmt(c1x)} ${fmt(c1y)} ${fmt(c2x)} ${fmt(c2y)} ${fmt(ex)} ${fmt(ey)}`;
}

function roughLoop(widthValue, heightValue, mode, strokeColor, lineOpacity) {
  const y = heightValue * 0.52;
  const d = [
    `M ${fmt(widthValue * 0.06)} ${fmt(y)}`,
    `C ${fmt(widthValue * 0.2)} ${fmt(heightValue * 0.12)} ${fmt(widthValue * 0.34)} ${fmt(heightValue * 0.12)} ${fmt(widthValue * 0.44)} ${fmt(y)}`,
    `C ${fmt(widthValue * 0.34)} ${fmt(heightValue * 0.9)} ${fmt(widthValue * 0.2)} ${fmt(heightValue * 0.9)} ${fmt(widthValue * 0.06)} ${fmt(y)}`,
    `C ${fmt(widthValue * 0.22)} ${fmt(heightValue * 0.1)} ${fmt(widthValue * 0.66)} ${fmt(heightValue * 0.1)} ${fmt(widthValue * 0.94)} ${fmt(y)}`,
  ].join(" ");
  const d2 = d.replaceAll(/\d+\.\d+/g, (match) => fmt(Number(match) + jitter(mode.roughness * 1.2)));
  return [
    pathTag(d, mode, strokeColor, lineOpacity),
    pathTag(d2, mode, strokeColor, "0.42", 0.7),
  ].join("\n");
}
