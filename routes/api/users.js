const express = require('express');
const {
  current,
  subscription,
  avatar,
  verificationEmail,
  reVerificationEmail,
} = require('../../controllers');
const {
  validateAuth,
  validateBody,
  controlWrapper,
  validateUpload,
} = require('../../middlewares');
const {
  validationUpdateSubscription,
  validationEmail,
} = require('../../service/validation');

const router = new express.Router();

// http://localhost:3001/api/users/current  - Postman 
router.get('/current', validateAuth, controlWrapper(current));

// http://localhost:3001/api/users/avatars  - Postman 
router.patch(
  '/avatars',
  [validateAuth, validateUpload.single('avatar')],
  avatar,
);

// http://localhost:3001/api/users/subscription  - Postman
router.patch(
  '/subscription',
  [validateAuth, validateBody(validationUpdateSubscription)],
  controlWrapper(subscription),
);

// http://localhost:3001/api/users/verify  - Postman
router.post(
  '/verify',
  validateBody(validationEmail),
  controlWrapper(reVerificationEmail),
);

// http://localhost:3001/api/users/verify/:verificationToken  - Postman 
router.get('/verify/:verificationToken', controlWrapper(verificationEmail));

module.exports = router;
