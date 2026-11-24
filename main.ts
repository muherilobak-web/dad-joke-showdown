// Dad Joke Showdown — entry program for u-mfnakmal-dad-joke-showdown-1d2ce3e5
// Writes exactly one dad joke (max 200 chars, meant to be read aloud) to /output/entry.txt
// Output contract (gate): /output/entry.txt must be UTF-8 text of 1-200
// characters, not only whitespace, with no trailing newline, so the entry
// is written byte-for-byte identical on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  'I told my dad his barbecue jokes were rare. He said, "Well done."';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
