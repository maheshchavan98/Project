const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.send(`<!doctype html><html><head><title>Node.js Sample</title></head>
  <body><h1>Hello from Node.js!</h1><p>Served by Express in Docker.</p></body></html>`);
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Sample app listening on port ${port}`);
});
