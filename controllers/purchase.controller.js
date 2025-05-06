const googlePlayService = require('../services/googlePlayService');

exports.verify = async (req, res) => {
  const { packageName, productId, purchaseToken } = req.body;

  if (!packageName || !productId || !purchaseToken) {
    return res.status(400).json({ status: false, message: 'Missing required fields' });
  }

  try {
    const result = await googlePlayService.verifyPurchase(packageName, productId, purchaseToken);
    return res.json({ status: true, data: result.data });
  } catch (error) {    
    return res.status(500).json({
      status: false,
      message: 'Verification failed',
      error: error.response?.data || error.message,
    });
  }
};
