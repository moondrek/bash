const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");

process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  const done = (output) => {
    process.stdout.write(output);
    process.stdout.write("\nprompt > ");
  };

  if (cmd === "pwd") {
    pwd(done);
  } else if (cmd === "ls") {
    ls(done);
  } else if (cmd.split(" ")[0] === "cat") {
    cat(done, cmd.split(" ")[1]);
  } else if (cmd.split(" ")[0] === "curl") {
    curl(done, cmd.split(" ")[1]);
  } else if (cmd === "date") {
    done(Date());
  } else if (cmd.split(" ")[0] === "echo") {
    done(cmd.split(" ").slice(1).join(" "));
  } else {
    process.stdout.write("You typed : " + cmd + "\n");
  }
});
