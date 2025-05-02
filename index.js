require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const verifyAppToken = require('./middleware/auth');


app.use(cors());
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
    return res.status(200).json({ status: true, message: "Firebase running..." });
});

// Notification Routes
app.use("/api",verifyAppToken, require("./routes/notification.routes"));

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
