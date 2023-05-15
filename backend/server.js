const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware.js");
const connectDB = require("./config/db.js");
const dotenv = require("dotenv").config();
const colors = require("colors");
const port = process.env.PORT || 8003;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));


app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
