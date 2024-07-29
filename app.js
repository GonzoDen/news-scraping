const express = require("express");
const scrapeRouter = require("./src/routes/scrape");

const app = express();

app.use("/api/scrape", scrapeRouter);

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
