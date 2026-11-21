import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The entry is one fixed calming text, chosen once and never varied.
// It is deterministic by design: every run writes these exact words,
// with no randomness, no runtime variants, and no reader instructions.
const TEXT =
  "Far below the road, a river is still smoothing one stone. A thousand years of water, and the stone is rounder now, quieter, almost gone — and the river keeps coming anyway, unhurried, because there is nowhere else it would rather be.";

// Returns the entry text through an explicit step so the write path
// below always goes through one named function, not an inline literal.
function getEntryText(): string {
  return TEXT;
}

function main(): void {
  const text = getEntryText();
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outputPath = join(outputDir, "entry.txt");

  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, text, "utf8");
  console.log(`Wrote ${[...text].length} characters to ${outputPath}`);
}

main();
