const fs = require("fs");

function cat(cmd) {
  fs.readFile(cmd, "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
    process.stdout.write("prompt > ");
  });
}

module.exports = cat;
