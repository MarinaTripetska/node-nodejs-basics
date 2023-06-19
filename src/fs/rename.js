import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  try {
    await fs.access(join(__dirname, "files/properFilename.md"));
    // if it exists, throw an error
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code !== "ENOENT") {
      // if error is not because the directory does not exist
      throw err;
    }
  }

  try {
    await fs.access(join(__dirname, "files/wrongFilename.txt"));
    await fs.rename(
      join(__dirname, "files/wrongFilename.txt"),
      join(__dirname, "files/properFilename.md")
    );
  } catch (error) {
    // If file does not exist, throw error
    throw new Error("FS operation failed");
  }
};

await rename();
