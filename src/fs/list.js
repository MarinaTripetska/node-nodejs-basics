import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  try {
    // Check if directory exists
    await fs.access(join(__dirname, "files"));

    const files = await fs.readdir(join(__dirname, "files"));
    console.log(files);
  } catch (error) {
    // If directory does not exist, throw error
    throw new Error("FS operation failed");
  }
};

await list();
