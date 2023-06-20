import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  try {
    // Check if directory exists
    await fs.access(join(__dirname, "files"));
  } catch (error) {
    // If directory does not exist, throw error
    throw new Error("FS operation failed");
  }

  try {
    await fs.access(join(__dirname, "files_copy"));
    // if it exists, throw an error
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code !== "ENOENT") {
      // if error is not because the directory does not exist
      throw err;
    }
  }

  await fs.mkdir(join(__dirname, "files_copy"), { recursive: true });
  const files = await fs.readdir(join(__dirname, "files"));
  try {
    await Promise.all(
      files.map(async (file) => {
        await fs.copyFile(
          join(__dirname, "files", file),
          join(__dirname, "files_copy", file)
        );
      })
    );
    console.log("Files copied");
  } catch (error) {
    console.error("An error occurred:", err);
  }
};

await copy();
