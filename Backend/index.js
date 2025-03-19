const express = require("express");
const db = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is Running...");
});

app.use("/users", userRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
