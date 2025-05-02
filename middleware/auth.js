require('dotenv').config();
const verifyAppToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ status: false, message: "Unauthorized: No token provided" });
    }

    const idToken = authHeader.split("Bearer ")[1];
    console.log(process.env.APP_TOKEN);
    console.log(idToken);
    
    if(idToken === process.env.APP_TOKEN){
       return next();
    }
    return res.status(403).json({ status: false, message: "Forbidden: Invalid token" });
};

module.exports = verifyAppToken;
