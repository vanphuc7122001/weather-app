const request = require("sync-request");

const getInfoWeather = async (address) => {
  const myAccesskey = "5c5d95d5ed6f472af85a7ec71139a579";
  const url = `http://api.weatherstack.com/current?access_key=${myAccesskey}&query=${address}`;

  try {
    const response = await request("GET", url);
    const data = JSON.parse(response.getBody("utf8"));
    const weather = {
      isNotFound: false,
      name: data.location.name,
      country: data.location.country,
      temperature: data.current.temperature,
      wind_speed: data.current.wind_speed,
      precip: data.current.precip,
      cloudcover: data.current.cloudcover,
    };
    return weather;
  } catch (error) {
    return {
      isNotFound: true,
    };
  }
};

module.exports = {
  getInfoWeather,
};
