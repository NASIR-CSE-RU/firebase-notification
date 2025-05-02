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
firebase-push-server/
├── controllers/
│   └── notification.controller.js
├── middleware/
│   └── auth.js             # 🔐 Your Firebase service access control
├── routes/
│   └── notification.routes.js
├── config/
│   └── firebase.js
├── secret/
│   └── auth.json           # 🔐 Your Firebase service account key (DO NOT COMMIT)
├── .env                    # 🌱 Optional for environment variables
├── index.js                # 🚀 App entry point
├── package.json
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

6. rename .env.example to .env and add APP_TOKEN (a SHA1 token) that will used as barier token of api

🔒 Never commit auth.json to your Git repository.

### 4. Run the server
```bash
node index.js
```
### 🔐 API Authentication
All POST routes require an Authorization: Bearer YOUR_APP_TOKEN (which you set on .env) header.

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
  "title": "Title of message",
  "message": "Hello subscribers!"
}
```
### Response
```json
{
  "success": true,
  "message": "Notification sent successfully",
  "response": { ... }
}
```
Send a notification to a device.
#### Request Body:
```json
{
  "token": "DEVICE_TOKEN",
  "title": "Title of message",
  "message": "Hello subscribers!"
}
```
### Response
```json
{
  "success": true,
  "message": "Notification sent successfully",
  "response": { ... }
}
```
