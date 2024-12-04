calculateListDifference();

function calculateListDifference() {
  const fs = require("fs"); // Import the File System module

  // Read the file content
  fs.readFile("input.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    console.log(data);
  });
}
