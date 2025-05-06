const express = require("express");
const router = express.Router();
const controller = require("../controllers/notification.controller");
const purchaseController = require("../controllers/purchase.controller");

router.post("/subscribe", controller.subscribeToTopic);
router.post("/unsubscribe", controller.unsubscribeFromTopic);
router.post("/send-notification", controller.sendNotification);
router.post('/verify', purchaseController.verify);


module.exports = router;
