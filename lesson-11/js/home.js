const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {return response.json();})

  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
  
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == 'Fish Haven' || towns[i].name == 'Preston' || towns[i].name == 'Soda Springs'){
        let townpage = document.createElement('section');
        let townname = document.createElement('h1');
        let motto = document.createElement('h3');
        let year = document.createElement('h4');
        let rain = document.createElement('h4');
        let population = document.createElement('h4');
        let pic = document.createElement('img');
        
        pic.setAttribute('src', 'images/' + towns[i].photo);
        rain.setAttribute('alt', 'Cozy town of ' + towns[i].name);
        townpage.appendChild(pic);

        townname.textContent = towns[i].name;
        townpage.appendChild(townname);
        
        motto.textContent = towns[i].motto;
        townpage.appendChild(motto);
        
        year.textContent = 'Founded in ' + towns[i].yearFounded;
        townpage.appendChild(year);
        
        rain.textContent = 'Avg. rainfall: ' + towns[i].averageRainfall;
        townpage.appendChild(rain);
        
        population.textContent = 'Population: ' + towns[i].currentPopulation;
        townpage.appendChild(population); 

        document.querySelector('div.towns').appendChild(townpage);
      }
    }
  });

  function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
var date = new Date();
document.getElementById("year").textContent = date.getFullYear();

var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 document.getElementById("date").textContent = day[date.getDay()] + ", " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();

new Date().getDay() == 5 ? document.getElementById('reminder').innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion." : null ;

function doInputOutput() {
	var t = parseFloat(document.getElementById('temperature').value);
	var s = parseFloat(document.getElementById('windSpeed').value);
	var f = windChill(t, s);
	   document.getElementById('outputDiv').innerHTML = f;
 
 }
 function windChill(tempF, speed) {
	 var f = (35.74 + (0.6215 * tempF)) - (35.75 * Math.pow(speed,0.16)) + (0.4275 * tempF * Math.pow(speed,0.16));
	 return f
	
 } 