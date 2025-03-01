import { promisify } from "util";
import { readdir, writeFile } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const asyncReaddir = promisify(readdir);
const writeFileAsync = promisify(writeFile);

const lokiDir = path.resolve(__dirname, "..", ".loki");
const actualDir = path.resolve(lokiDir, "current");
const expectedDir = path.resolve(lokiDir, "reference");
const diffDir = path.resolve(lokiDir, "difference");

(async function main() {
  const diffs = await asyncReaddir(diffDir);

  await writeFileAsync(
    path.resolve(lokiDir, "report.json"),
    JSON.stringify({
      newItems: [],
      deletedItems: [],
      passedItems: [],
      failedItems: diffs,
      expectedItems: diffs,
      actualItems: diffs,
      diffItems: diffs,
      actualDir: path.relative(lokiDir, actualDir),
      expectedDir: path.relative(lokiDir, expectedDir),
      diffDir: path.relative(lokiDir, diffDir),
    })
  );
})();
