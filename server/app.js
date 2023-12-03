const express = require('express');
const cookieParser = require('cookie-parser');
const sessionMiddleware = require('./session');
const protectedRoute = require('./routes/protected');
const logoutRoute = require('./routes/logout');

const app = express();
const port = 3001;

app.use(cookieParser());
app.use(sessionMiddleware);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001/', 'http://localhost:3000/');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use('/protected', protectedRoute);
app.use('/logout', logoutRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
