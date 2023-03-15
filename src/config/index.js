const { engine } = require("express-handlebars");

const setViewEngine = (app, path) => {
  app.engine(".hbs", engine({ extname: ".hbs" }));
  app.set("view engine", ".hbs");
  app.set("views", path.join(__dirname, "../views"));
};

const setCors = (app, cors) => {
  app.use(cors());
};

const setStaticfile = (app, path, express) => {
  const pathPublic = path.join(__dirname, "../public");
  app.use(express.static(pathPublic));
};

module.exports = {
  setViewEngine,
  setCors,
  setStaticfile,
};
