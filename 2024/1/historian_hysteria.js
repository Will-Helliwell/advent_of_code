const fs = require("fs/promises");
const path = require("path");
const inputFilePath = path.join(__dirname, "small_input.txt");

(async () => {
  const difference = await calculateListDifference(inputFilePath);
  console.log(difference);
})();

async function calculateListDifference(inputFilePath) {
  // Read the file content
  try {
    const data = await fs.readFile(inputFilePath, "utf8");

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

    // sort smallest to largest
    leftColumn.sort((a, b) => a - b);
    rightColumn.sort((a, b) => a - b);

    // calculate the difference
    let distanceTotal = 0;
    const leftColumnLength = leftColumn.length;
    for (let index = 0; index < leftColumnLength; index++) {
      const leftNumber = leftColumn[index];
      const rightNumber = rightColumn[index];
      const distanceIndividual = Math.abs(leftNumber - rightNumber);
      distanceTotal += distanceIndividual;
    }

    return distanceTotal;
  } catch (err) {
    console.error("Error reading the file:", err);
  }
}
