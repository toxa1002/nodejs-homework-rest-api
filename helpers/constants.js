const CONTACT_NAME_LIMIT = { MIN: 1, MAX: 50 };
const CONTACT_EMAIL_LIMIT = { MIN: 5, MAX: 100 };
const CONTACT_PHONE_LIMIT = { MIN: 7, MAX: 30 };

const USER_NAME_LIMIT = { MIN: 1, MAX: 50 };
const USER_EMAIL_LIMIT = { MIN: 5, MAX: 100 };
const USER_PASSWORD_LIMIT = { MIN: 6, MAX: 100 };
const USER_SUBSCRIPTION_TYPE = {
  STARTER: 'starter',
  PRO: 'pro',
  BUSINESS: 'business',
};

const HTTP_STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
};

const STATUS = {
  OK: 'ok',
  CREATED: 'created',
  SUCCESS: 'success',
  ERROR: 'error',
  FAIL: 'fail',
};

const MESSAGES = {
  INVALIDSIGNATURE: 'invalid signature',
  NOTAUTHORIZED: 'Not authorized',
  INTERNALSERVERERROR: 'Internal Server Error',
  BEARER: 'Bearer',
  JWTEXPIRED: 'jwt expired',
};

const DIRNAME = {
  AVATARS: 'avatars',
  PUBLIC: 'public',
  TEMP: 'temp',
};

const FILESIZE = {
  HALFMB: 524288,
  ONEMB: 1048576,
  TWOMB: 2097152,
  THREEMB: 3145728,
  FOURMB: 4194304,
  FIVEMB: 5242880,
};

module.exports = {
  CONTACT_NAME_LIMIT,
  CONTACT_EMAIL_LIMIT,
  CONTACT_PHONE_LIMIT,
  USER_NAME_LIMIT,
  USER_EMAIL_LIMIT,
  USER_PASSWORD_LIMIT,
  USER_SUBSCRIPTION_TYPE,
  HTTP_STATUS_CODE,
  STATUS,
  MESSAGES,
  DIRNAME,
  FILESIZE,
};
