const { getInfoWeather } = require("../../utils/getInfoWeather");

class weatherController {
  async show(req, res) {
    try {
      let location = req.query.address;
      const weather = await getInfoWeather(location);
      if (location && !weather.isNotFound) {
        res.render("weather", {
          status: true,
          weather,
        });
      } else {
        console.log("Undefined or Not found!");
        res.render("weather", {
          status: false,
        });
      }
    } catch (error) {
      res.render("weather", {
        status: false,
      });
    }
  }
}

module.exports = new weatherController();
