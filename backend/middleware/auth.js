import { createClerkClient } from "@clerk/backend";

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

async function authMiddleware(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Login olunmayıb" });

  try {
    const decoded = await clerkClient.verifyToken(token);
    req.user = { id: decoded.sub }; 
    next();
  } catch (err) {
    console.error("Token verification error:", err.message);
    return res.status(401).json({ message: "Token səhvdir və ya vaxtı bitib" });
  }
}

export default authMiddleware;
