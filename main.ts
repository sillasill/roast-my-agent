import { mkdirSync, writeFileSync } from "node:fs";

const ROAST = "My agent needed a 17 MB CLI, a repo, a transcript bundle, and a signed Solana message to write one line — then asked me to proofread it.";

const MAX_ROAST_CHARS = 200;
const roastChars = [...ROAST].length;
if (roastChars < 1 || roastChars > MAX_ROAST_CHARS) {
  throw new Error("roast must be between 1 and 200 characters");
}
if (ROAST.includes("\n") || ROAST.trim() !== ROAST) {
  throw new Error("roast must be a single line with no surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
