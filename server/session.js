function generateSessionId() {
    return Math.random().toString(36).substring(2, 15);
}
  
  function manageSession(req, res, next) {
    let sessionId = req.cookies.sessionId;
  
    const expirationTime = new Date(Date.now() + 60 * 60 * 1000);
  
    if (!sessionId) {
      sessionId = generateSessionId();
      res.cookie('sessionId', sessionId, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 60 * 60 * 1000, path: '/' });
    }
  
    req.cookies.sessionId = sessionId;
  
    next();
  }
  
  module.exports = manageSession;
  