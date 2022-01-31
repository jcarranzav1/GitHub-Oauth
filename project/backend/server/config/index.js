require('dotenv').config();

const config = {
  github_client_id: process.env.GITHUB_CLIENT_ID,
  github_client_secret: process.env.GITHUB_CLIENT_SECRET,
  redirect_uri: process.env.REDIRECT_URI,
  proxy_url: process.env.PROXY_URL,
  port: process.env.PORT,
  cors: {
    origin: process.env.ACCESS_CONTROL_ALLOW_ORIGIN,
  },
  token: {
    secret: process.env.TOKEN_SECRET,
    expires: process.env.TOKEN_EXPIRES,
  },
  cookie: {
    secret: process.env.COOKIE_SECRET,
    name: process.env.COOKIE_NAME,
  },
};

module.exports = config;
