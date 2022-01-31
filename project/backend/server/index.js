const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { logger, requestId, requestLog } = require('./config/logger');
const api = require('./api/api');
const {
  cookie: { secret },
} = require('./config');

// const { cors: corsConfig } = require('./config');
// const cookieParser = require('cookie-parser');
const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Accept', 'Content-Type', 'Authorization'],
  }),
);

app.use(requestId);
app.use(requestLog);
app.use(express.json());
app.use(cookieParser(secret));

app.use('/api', api);

app.use((req, res, next) => {
  const message = 'Error. Route Not Found';
  const statusCode = 404;

  logger.warn(message);

  next({
    statusCode,
    message,
  });
});

// error
app.use((error, req, res, next) => {
  const { message = '', name = '' } = error;
  let { statusCode = 500 } = error;

  if (name === 'ValidationError') {
    statusCode = 422;
    logger.warn(message);
  } else {
    logger.error(message);
  }

  res.status(statusCode);
  res.json({
    message,
    error,
  });
});

module.exports = app;
