const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=9cabcd53024a11057d12175fbbcc9858";
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

  