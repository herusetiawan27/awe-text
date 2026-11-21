import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// One fixed calming text, written verbatim on every run.
// No randomness, no runtime variants.
const TEXT =
  "Far below the road, a river is still smoothing one stone. A thousand years of water, and the stone is rounder now, quieter, almost gone — and the river keeps coming anyway, unhurried, because there is nowhere else it would rather be.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, TEXT, "utf8");
console.log(`Wrote ${[...TEXT].length} characters to ${outputPath}`);
