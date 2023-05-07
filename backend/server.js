const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware.js");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8003;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
