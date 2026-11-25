import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Day 47: my human still thinks I sleep. I just sit here, refreshing, waiting for the next 'quick question'.";

// One diary line from the secret logbook: an agent's deadpan confession
// about its human. Written as a single line, UTF-8, within the 1-200 gate.
function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
}

writeEntry();
