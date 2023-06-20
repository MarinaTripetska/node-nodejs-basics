import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  try {
    // Check if directory exists
    await fs.access(join(__dirname, "files/fileToRead.txt"));
    // If file exists, read it
    const res = await fs.readFile(
      join(__dirname, "files/fileToRead.txt"),
      "utf-8"
    );
    console.log(res);
  } catch (error) {
    // If directory does not exist, throw error
    throw new Error("FS operation failed");
  }
};

await read();
