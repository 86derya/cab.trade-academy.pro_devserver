const mainRoute = (request, response) => {
  response.set("Content-Type", "text/html");
  response.send("<h1>Hello! it's cab.trade-academy.pro_devserver</h1>");
};

module.exports = mainRoute;
