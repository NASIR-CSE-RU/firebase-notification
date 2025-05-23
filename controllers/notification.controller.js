const admin = require("../config/firebase");

exports.subscribeToTopic = async (req, res) => {    
    const { token, topic } = req.body;
    if (!token || !topic) {
        return res.status(400).json({ success: false, message: "Missing token or topic" });
    }

    try {
        const response = await admin.messaging().subscribeToTopic(token, topic);
        const responseGeneral = await admin.messaging().subscribeToTopic(token, 'user_general_notification');

        return res.status(200).json({ success: true, message: "Subscribed successfully", response });
    } catch (error) {
        console.error("Subscription error:", error);
        return res.status(500).json({ success: false, message: "Failed to subscribe", error: error.message });
    }
};

exports.unsubscribeFromTopic = async (req, res) => {
    const { token, topic } = req.body;
    if (!token || !topic) {
        return res.status(400).json({ success: false, message: "Missing token or topic" });
    }

    try {
        const response = await admin.messaging().unsubscribeFromTopic(token, topic);
        return res.status(200).json({ success: true, message: "Unsubscribed successfully", response });
    } catch (error) {
        console.error("Unsubscription error:", error);
        return res.status(500).json({ success: false, message: "Failed to unsubscribe", error: error.message });
    }
};

exports.sendNotification = async (req, res) => {
    const { topic, token, title, message } = req.body;
    if ((!topic && !token) || !message) {
        return res.status(400).json({ success: false, message: "Missing topic, token, or message" });
    }

    const payload = {
        notification: {
            title: title ?? 'Notification',
            body: message,
        },
        ...(topic ? { topic } : { token }),
    };

    try {
        const response = await admin.messaging().send(payload);
        return res.status(200).json({ success: true, message: "Message sent successfully", response });
    } catch (error) {
        console.error("Send message error:", error);
        return res.status(500).json({ success: false, message: "Error sending message", error: error.message });
    }
};
