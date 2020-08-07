function pwd(done) {
  //if (cmd === "pwd") {
  done(`\n${process.cwd()}`);
  //}
}

module.exports = pwd;
