function generateSessionId() {
    return Math.random().toString(36).substring(2, 15);
  }
  
  function manageSession(req, res, next) {
    let sessionId = req.cookies.sessionId;
  
    // Set the expiration time to 1 hour from the current time
    const expirationTime = new Date(Date.now() + 60 * 60 * 1000); // 1 hour in milliseconds
  
    if (!sessionId) {
      // If no session ID, generate one and set it in the cookie with expiration time
      sessionId = generateSessionId();
      res.cookie('sessionId', 'abc123', { httpOnly: true, secure: true, sameSite: 'None', maxAge: 60 * 60 * 1000, path: '/' }); // 1 hour in milliseconds
    }
  
    req.sessionId = sessionId;
  
    next();
  }
  
  module.exports = manageSession;
  