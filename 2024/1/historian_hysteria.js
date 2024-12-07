const path = require("path");
const inputFilePath = path.join(__dirname, "input.txt");

calculateListDifference(inputFilePath);

function calculateListDifference(inputFilePath) {
  const fs = require("fs");

  // Read the file content
  fs.readFile(inputFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    // Convert each column into an array of numbers
    const leftColumn = [];
    const rightColumn = [];

    data
      .trim() // Remove leading/trailing whitespace
      .split("\n") // Split into lines
      .forEach((line) => {
        const [left, right] = line.split(/\s+/); // Split each line into two parts
        leftColumn.push(Number(left)); // Add left number to the left column
        rightColumn.push(Number(right)); // Add right number to the right column
      });

    console.log("Left Column:", leftColumn);
    console.log("Right Column:", rightColumn);
  });
}
