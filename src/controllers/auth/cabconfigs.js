const axios = require("axios");
const { configsSuccess, configsFail } = require("./configs/responses");

const cabconfigs = (request, response) => {
  const token = request.headers.authorization;
  const cleanToken = token.replace("Bearer ", "").trim();
  console.log(cleanToken);
  const configUrl = "https://cab-ru.tramplin-uspeha.ru/api/v1/cabinet/config";
  axios.defaults.headers.common.Authorization = `${token}`;
  axios
    .get(configUrl)
    .then(res =>
      res.data.operation_status === "succeed"
        ? configsSuccess(response, res)
        : configsFail(response)
    )
    .catch(err => configsFail(response, err.message));
};

module.exports = cabconfigs;
