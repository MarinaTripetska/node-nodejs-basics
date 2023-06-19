import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  try {
    // Check if file exists
    await fs.access(join(__dirname, "files/fresh.txt"));
    // If file exists, throw error
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      // If file does not exist, create it
      await fs.writeFile(
        join(__dirname, "files/fresh.txt"),
        "I am fresh and young"
      );
      console.log("File created");
    } else {
      // If any other error occurs, log it
      console.error(err.message);
    }
  }
};

await create();
