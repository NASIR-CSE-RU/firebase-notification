const express = require("express");
const router = express.Router();
const controller = require("../controllers/notification.controller");

router.post("/subscribe", controller.subscribeToTopic);
router.post("/unsubscribe", controller.unsubscribeFromTopic);
router.post("/send-notification", controller.sendNotification);

module.exports = router;
