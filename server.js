const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

const fetchWeather = async () => {
  const res = await axios(
    "https://api.weather.yandex.ru/v2/forecast?lat=21.632062&lon=39.104087",
    {
      headers: {
        "X-Yandex-API-Key": "fe70a1e6-71d9-47cb-b9b8-dcf7d9413f56",
      },
    }
  );
  return res.data;
};

app.get("/weather", async (req, res) => {
  const data = await fetchWeather();
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
