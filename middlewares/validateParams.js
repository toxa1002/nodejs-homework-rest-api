const { HTTP_STATUS_CODE, STATUS } = require('../helpers/constants');

const validateParams = schema => async (req, res, next) => {
  try {
    await schema.validateAsync(req.params);
    next();
  } catch (error) {
    console.log('__VALIDATE_PARAMS_ERROR__: ', error.details);
    return res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({
      status: STATUS.ERROR,
      code: HTTP_STATUS_CODE.BAD_REQUEST,
      message: error.message,
    });
  }
};

module.exports = validateParams;
