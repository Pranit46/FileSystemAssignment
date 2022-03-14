const fs = require("fs");
const http = require("http");
const PORT = 8000;
const data = new Date().toString();

fs.writeFileSync("DateTime/date-time.txt", data);

fs.readFile("DateTime/date-time.txt", (err,data) => {
  if (err) throw err;
  else {
    http
      .createServer((req, res) => {
        res.writeHeader(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      })
      .listen(PORT, () => {
        console.log("listening on port " + PORT);
      });
  }
});
