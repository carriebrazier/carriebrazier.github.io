function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
var date = new Date();
document.getElementById("year").textContent = date.getFullYear();

var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 document.getElementById("date").textContent = day[date.getDay()] + ", " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();

 const requestURL ="../json/json.json";

  fetch(requestURL)
    .then(function (response) {return response.json();})
  
    .then(function (jsonObject) {
      // console.table(jsonObject);  // temporary checking for valid response and data parsing
    
      const towns = jsonObject['towns'];
      for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == 'St.Louis Missouri Temple'){
          let townpage = document.createElement('section');
          let townname = document.createElement('h1');
          let address = document.createElement('h4');
          let phone = document.createElement('h4');
          let rain = document.createElement('h4');
          let population = document.createElement('h4');
          let pic = document.createElement('img');
          let closures = document.createElement('h4');
          
          pic.setAttribute('src', 'images/' + towns[i].photo);
          rain.setAttribute('alt', 'Cozy town of ' + towns[i].name);
          townpage.appendChild(pic);
  
          townname.textContent = towns[i].name;
          townpage.appendChild(townname);
          
          address.textContent = 'Address: ' + towns[i].address;
          townpage.appendChild(address);
          
          phone.textContent = 'Telephone: '+ towns[i].telephone;
          townpage.appendChild(phone);
          
          rain.textContent = 'Email: ' + towns[i].averageRainfall;
          townpage.appendChild(rain);
          
          population.textContent = 'Services: ' + towns[i].currentPopulation;
          townpage.appendChild(population);
          
         closures.textContent = 'Temple Closures: ' + towns[i].closures;
          townpage.appendChild(closures); 
  
          document.querySelector('div.towns').appendChild(townpage);
        }
      }
    });
    function submitform() {

        window.location.href = "thanks.html";
    
    }

   const townId = document.getElementById('town').dataset.townid;
console.log(townId);

const appId = "9cabcd53024a11057d12175fbbcc9858";
const weatherAPIURL = `https://api.openweathermap.org/data/2.5/weather?${townId}&units=imperial&APPID=${appId}`;
const forecastAPIURL = `https://api.openweathermap.org/data/2.5/forecast?id=${townId}&units=imperial&APPID=${appId}`;
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

function windChill(tempF, speed) {
   const maxTempF = 50;
   const minWindSpeed = 3;
   let f = "N/A"
   if ((tempF <= maxTempF) && (speed >= minWindSpeed)) {
      f = (35.74 + (0.6215 * tempF) -
         (35.75 * speed ** 0.16) +
         (0.4275 * tempF * speed ** 0.16)).toFixed(0);
   }
   return f;
}