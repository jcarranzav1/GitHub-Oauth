const queryString = require('query-string');
const _ = require('lodash');
const { sign, verify } = require('jsonwebtoken');
const { default: axios } = require('axios');

const {
  github_client_id: githubClientId,
  github_client_secret: githubClientSecret,
  token,
  cookie: { name: cookieName },
} = require('../config');

const { secret, expires } = token;

exports.github_authenticate = async (req, res, next) => {
  const code = _.get(req, 'query.code');
  const path = _.get(req, 'query.path', '/home');

  if (!code) {
    next({
      message: 'No exist code',
      statusCode: 404,
      level: 'warn',
    });
  }
  const githubToken = await axios
    .post(
      `https://github.com/login/oauth/access_token?client_id=${githubClientId}&client_secret=${githubClientSecret}&code=${code}`,
    )
    .then((response) => response.data)

    .catch((error) => {
      next(error);
    });

  const decoded = queryString.parse(githubToken);
  const accessToken = decoded.access_token;

  const gitHubUser = await axios
    .get('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((response) => response.data)
    .catch(() => {
      next({
        message: 'Error getting user from GitHub',
        statusCode: 404,
        level: 'warn',
      });
    });

  const jwtToken = sign(gitHubUser, secret, { expiresIn: expires });

  res.cookie(cookieName, jwtToken, {
    httpOnly: true,
    domain: 'localhost',
    // expires: new Date(Date.now() + 20 * 60 * 1000),
    signed: true,
  });
  res.redirect(`http://localhost:3000${path}`);
};

exports.login = (req, res, next) => {
  const jwtToken = req.signedCookies[cookieName];
  // const jwtToken = req.signedCookie;
  const message = 'Unauthorized';
  const statusCode = 401;

  const dataToken = verify(jwtToken, secret, (err, decoded) => {
    if (err) {
      return next({
        message,
        statusCode,
      });
    }
    return decoded;
  });

  res.status(200);
  res.json({
    data: dataToken,
    meta: {
      token: jwtToken,
    },
  });
};

exports.logout = (req, res, next) => {
  /* res.cookie(cookieName, 'none', {
    expires: new Date(Date.now() + 1 * 1000),
    httpOnly: true,
    domain: 'localhost',
    signed: true,
  }); */
  res.clearCookie(cookieName);
  res.status(200).send();
};
