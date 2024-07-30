const AuthService = require('../services/authService');

function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const user = AuthService.verifyToken(token);
    req.user = user;
    next();
  } catch (error) {
    console.error('Error verifying token:', error); 
    return res.status(403).json({ error: 'Forbidden' });
  }
}

module.exports = { authenticateToken };

