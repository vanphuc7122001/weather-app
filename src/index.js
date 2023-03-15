const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { setViewEngine, setCors, setStaticfile } = require("./config");
const cors = require("cors");
const { initRoutes } = require("./routes");

// config cors
setCors(app, cors);
//config file satic
setStaticfile(app, path, express);
//set view engine
setViewEngine(app, path);

//initRoute
initRoutes(app);

app.listen(port, () => console.log(`App listening at port ${port}`));
