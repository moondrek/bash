const fs = require("fs");

function cat(done, cmd) {
  fs.readFile(cmd, "utf8", (err, data) => {
    if (err) throw err;
    done(data);
  });
}

module.exports = cat;
