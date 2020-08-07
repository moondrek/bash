const request = require("request");

function curl(done, url) {
  request(url, function (error, response, body) {
    const output = `error: ${error}\nstatusCode: ${
      response && response.statusCode
    }\nbody: ${body}`;
    done(output);
  });
}

// function curl(url) {
//   request(url, function (error, response, body) {
//     console.error("error:", error); // Print the error if one occurred
//     console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
//     console.log("body:", body); // Print the HTML for the Google homepage.
//   });
// }

module.exports = curl;
