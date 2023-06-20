import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  try {
    await fs.access(join(__dirname, "files/fileToRemove.txt"));
    await fs.unlink(join(__dirname, "files/fileToRemove.txt"));
  } catch (error) {
    // If file does not exist, throw error
    throw new Error("FS operation failed");
  }
};

await remove();
