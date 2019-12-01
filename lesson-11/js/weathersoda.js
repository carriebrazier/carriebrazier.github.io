//const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=9cabcd53024a11057d12175fbbcc9858";
const prestonId = 5604473;
const appId = "9cabcd53024a11057d12175fbbcc9858";
const weatherAPIURL = `https://api.openweathermap.org/data/2.5/weather?id=${prestonId}&units=imperial&APPID=${appId}`;
const forecastAPIURL = `https://api.openweathermap.org/data/2.5/forecast?id=${prestonId}&units=imperial&APPID=${appId}`;
const weatherIconPath = "https://openweathermap.org/img/w/";
const dow = new Intl.DateTimeFormat("en-US", {
   weekday: "short"
});
fetch(weatherAPIURL)
   .then((response) => response.json())
   .then((jsObject) => {
      console.log(jsObject);
      const tempF = jsObject.main.temp.toFixed(0);
      const windSpeedMPH = jsObject.wind.speed.toPrecision(2);
      const windChillF = windChill(tempF, windSpeedMPH);
      document.getElementById('temperature').textContent = tempF;
      document.getElementById('hightemp').textContent = jsObject.main.temp_max.toFixed(0);
      document.getElementById('windspeed').textContent = windSpeedMPH;
      document.getElementById('windchill').textContent = windChillF;
      document.getElementById('humidity').textContent = jsObject.main.humidity.toFixed(0);
      document.getElementById('description').textContent = jsObject.weather[0].description;
   });
   