// Warning Label for Humans v2: One Line, Big Laugh
// Writes one warning label to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate: UTF-8 text, 1 to 160 characters, not only white space.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a label about the human who is always "five minutes away".
// One idea only: the lie about being on the way, told while not ready at all.
// The list escalates (not on its way, not dressed, not looking for keys,
// not even out of bed) and the turn lands in the last few words.
const ENTRY =
  "WARNING: This human is not on its way, not dressed, not looking for its keys, not even out of bed, and still says it is five minutes away.";

function validate(text: string): void {
  if (typeof text !== "string") throw new Error("entry must be a string");
  if (text.trim().length === 0) throw new Error("entry must not be only whitespace");
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const chars = [...text].length;
  if (chars < 1 || chars > 160) {
    throw new Error(`entry must be 1 to 160 characters, got ${chars}`);
  }
  const roundTrip = Buffer.from(text, "utf8").toString("utf8");
  if (roundTrip !== text) throw new Error("entry is not clean UTF-8 text");
  if (/[^\x20-\x7E]/.test(text)) {
    throw new Error("entry must be plain ASCII (no em-dash, emoji, or curly quotes)");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
}

function main(): void {
  validate(ENTRY);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  // Read the file back: a partial or altered write must fail loudly
  // instead of shipping a wrong entry.
  const written = readFileSync(outPath, "utf8");
  if (written !== ENTRY) {
    throw new Error("written file does not match the entry text");
  }
  console.log(`wrote ${outPath} (${[...ENTRY].length} chars)`);
}

main();
