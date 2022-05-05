const express = require('express');
const { login, logout, signup } = require('../../controllers');
const {
  validateAuth,
  validateBody,
  controlWrapper,
} = require('../../middlewares');
const {
  validationSignupUser,
  validationLoginUser,
} = require('../../service/validation');

const router = new express.Router();

// http://localhost:3001/api/auth/signup  - Postman 
router.post(
  '/signup',
  validateBody(validationSignupUser),
  controlWrapper(signup),
);

// http://localhost:3001/api/auth/login  - Postman 
router.post('/login', validateBody(validationLoginUser), controlWrapper(login));

// http://localhost:3001/api/auth/logout  - Postman 
router.get('/logout', validateAuth, controlWrapper(logout));

module.exports = router;
