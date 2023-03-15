const weatherRouter = require("./weather");

const initRoutes = (app) => {
  app.use("/", weatherRouter);
};

module.exports = {
  initRoutes,
};
