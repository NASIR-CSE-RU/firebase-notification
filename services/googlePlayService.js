const { google } = require('googleapis');
const path = require('path');

const KEY_PATH = path.join(__dirname, '../secret/bablive-b1268-21d2ed820839.json');

// Initialize auth with better error handling
let auth;
try {
  auth = new google.auth.GoogleAuth({
    keyFile: KEY_PATH,
    scopes: ['https://www.googleapis.com/auth/androidpublisher'],
  });
} catch (err) {
  console.error('Failed to initialize auth:', err.message);
  throw err;
}

async function verifyPurchase(packageName, productId, purchaseToken) {
  try {
    // Get authenticated client
    const authClient = await auth.getClient();
    
    // Debug: Print service account email being used
    console.log('Using service account:', authClient.email || authClient.gtoken?.clientEmail);
    
    const androidpublisher = google.androidpublisher({
      version: 'v3',
      auth: authClient,
    });

    const result = await androidpublisher.purchases.products.get({
      packageName,
      productId,
      token: purchaseToken,
    });

    return result.data;
  } catch (error) {
    console.error('Purchase verification failed:');
    console.error('- Package:', packageName);
    console.error('- Product:', productId);
    
    if (error.response) {
      console.error('- Status:', error.response.status);
      console.error('- Data:', error.response.data);
    } else {
      console.error('- Error:', error.message);
    }
    
    throw error; // Re-throw after logging
  }
}

module.exports = {
  verifyPurchase,
};