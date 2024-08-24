const fs = require("fs");
const path = require("path");
const { program } = require("commander");

program
  .version("1.0.0")
  .description("Word Count CLI")
  .argument("<file>", "File path to count words")
  .action((file) => {
    const filePath = path.join(__dirname, file);

    let fileData;
    try {
      fileData = fs.readFileSync(filePath, "utf8");
    } catch (err) {
      console.error("Error: The file could not be found or read.");
      process.exit(1);
    }

    const cleanedData = fileData.trim();
    const wordsArray = cleanedData.split(" ");
    const wordCount = wordsArray.length;

    console.log(`You have ${wordCount} words in this file.`);
  });

program.parse(process.argv);
