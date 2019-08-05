const axios = require("axios");
const prodLoginUrl = "https://cab-ru.tramplin-uspeha.ru/api/v1/auth/login";
const devServerLoginURL =
  "https://cab-trade-devserver.herokuapp.com.herokuapp.com/cab/auth/login";

const {
  authenticationFailed,
  authenticationSuccess
} = require("./$configs/responses");

const cablogin = (request, response) => {
  const { login, password } = request.body;
  console.log("request.body :" + request.body);

  var settings = {
    async: true,
    crossDomain: true,
    url: prodLoginUrl,
    method: "POST",
    headers: {
      "Cache-Control": "no-cache"
    },
    processData: false,
    data: { login: login, password: password }
  };

  return axios(settings).then(resp =>
    authenticationSuccess(response, resp.data).catch(err =>
      authenticationFailed(response, err.message + " : Incorrect Credentials")
    )
  );
};

module.exports = cablogin;
