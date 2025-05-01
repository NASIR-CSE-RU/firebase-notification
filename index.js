const admin = require("firebase-admin");
const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 3000;

// 🔑 Initialize Firebase Admin SDK
const serviceAccount = require("./secret/bablive-b1268-17f244a66395.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

app.use(cors()); // 🔥 Allow cross-origin requests
app.use(express.json());

app.get("/", async (req, res) => {
    return res.status(200).json({
        status: true,
        message: "Firebase running...uzzal"
    });
});

// 🚀 Endpoint to subscribe a token to a topic
app.post("/api/subscribe", async (req, res) => {
    const { token, topic } = req.body;

    if (!token || !topic) {
        return res.status(400).json({
            status: false,
            message: "Missing token or topic",
        });
    }

    try {
        const response = await admin.messaging().subscribeToTopic(token, topic);

        return res.status(200).json({
            status: true,
            message: "Subscribed successfully",
            response,
        });
    } catch (error) {
        console.error("Subscription error:", error);
        return res.status(500).json({
            status: false,
            message: "Failed to subscribe",
            error: error.message,
        });
    }
});

// POST route to send notification to a topic
app.post("/api/send-notification", async (req, res) => {
    const { topic, token, message,title } = req.body;

    if ((!topic && !token) || !message) {
        return res.status(400).json({ status: false, message: 'Missing topic,token or message' });
    }
    let messageq ={};

    if(topic){
         messageq = {
            notification: {
                title: title ?? 'Notification',
                body: message,
            },
            topic: topic,
        };
    }else{
         messageq = {
            notification: {
                title: title ?? 'Notification',
                body: message,
            },
            token: token,
        };
    }

    

    try {
        const response = await admin.messaging().send(messageq);
        return res.status(200).json({
            status: true,
            message: "Message sent successfully",
            response,
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Error sending message",
            error: error.message,
        });
    }
});


app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
