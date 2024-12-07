const path = require("path");
const inputFilePath = path.join(__dirname, 'input.txt');

calculateListDifference(inputFilePath);

function calculateListDifference(inputFilePath) {
  const fs = require("fs");

  // Read the file content
  fs.readFile(inputFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    console.log(data);
  });
}
