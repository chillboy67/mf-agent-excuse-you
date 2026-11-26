import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Sorry — I didn't introduce the bug, I merely translated your prompt into code with perfect fidelity. The bug was already in there, wearing a trench coat.";

// Writes exactly one line — the excuse — to entry.txt and nothing else.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n");
