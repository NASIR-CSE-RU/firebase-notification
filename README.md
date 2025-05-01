# 🔥 Firebase FCM Notification API (Node.js)

A simple Express.js server that integrates with Firebase Cloud Messaging (FCM) to send push notifications to topics and manage topic subscriptions. This is ideal for mobile apps that use topic-based notifications.


## 📦 Features

- ✅ Subscribe a device token to a topic
- ✅ Send notifications to a topic
- ✅ JSON-based, standardized responses for mobile clients
- ✅ Full error handling
- ✅ Easy-to-integrate Firebase Admin SDK


## 📁 Project Structure

```
.
├── index.js              # Main Express server
├── firebase.js           # Firebase Admin SDK setup
├── secret/
│   └── auth.json         # Firebase Service Account credentials (DO NOT COMMIT)
├── package.json
├── .env                  # (Optional) for config values
└── README.md
```



## ⚙️ Requirements

- Node.js v22+
- Firebase project
- Firebase Admin SDK JSON (`auth.json`)


## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.comNASIR-CSE-RU/firebase-notification.git
cd firebase-notification
```
### 2. Install dependencies
```bash
npm install
```
### 3. Add Firebase credentials
1. Go to Firebase Console

2. Select your project → ⚙️ Project Settings → Service Accounts tab

3. Click Generate new private key

4. Download the JSON and rename it to auth.json

5. Place it in your project secret directory

🔒 Never commit auth.json to your Git repository.

### 4. Run the server
```bash
node index.js
```
### 📮 API Endpoints
#### POST /api/subscribe
Subscribe a device token to a topic.
#### Request Body:
```json
{
  "token": "DEVICE_FCM_TOKEN",
  "topic": "news"
}
```
### Response
```json
{
  "success": true,
  "message": "Subscribed successfully",
  "data": { ... }
}
```
#### POST /api/send-notification
Send a notification to a topic.
#### Request Body:
```json
{
  "topic": "news",
  "message": "Hello subscribers!"
}
```
### Response
```json
{
  "success": true,
  "message": "Notification sent successfully",
  "data": { ... }
}
```
Send a notification to a device.
#### Request Body:
```json
{
  "token": "DEVICE_TOKEN",
  "message": "Hello subscribers!"
}
```
### Response
```json
{
  "success": true,
  "message": "Notification sent successfully",
  "data": { ... }
}
```
