module.exports = {
  authenticationSuccess: function(response, data) {
    response.status(200);
    response.json(data);
  },
  authenticationFailed: function(response, message = "Authentication Failed") {
    response.status(400);
    response.json({
      status: "failed",
      message: message,
      token: null
    });
  },
  configsSuccess: function(response, data) {
    response.status(200);
    response.json(data);
  },
  configsFail: function(response, error = "config not found") {
    // response.status(400);
    response.json({
      operation_status: "failed",
      error: error
    });
  }
};
