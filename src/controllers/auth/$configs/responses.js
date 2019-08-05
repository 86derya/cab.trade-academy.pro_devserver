module.exports = {
  authenticationSuccess: function(response, data) {
    response.status(200);
    response.json({ token: data.token });
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
    response.json({ status: "success", data });
  },
  configsFail: function(response, error = "config not found") {
    // response.status(400);
    response.json({
      operation_status: "failed",
      error: error
    });
  },
  idSerchSuccess: function(response, foundId) {
    response.status(200);
    response.json({ status: "success", user: foundId });
  },
  idSearchFailed: function(response) {
    response.status(404);
    response.json({ status: "failed", user: "Not Found" });
  }
};
