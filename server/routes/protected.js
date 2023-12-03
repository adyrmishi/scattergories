const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const sessionId = req.cookies.sessionId;
  res.json({ message: 'This is a protected route', sessionId });
});

module.exports = router;
