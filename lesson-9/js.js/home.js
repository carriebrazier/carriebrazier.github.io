const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let motto = document.createElement('p');
        let year = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = towns[i].name;
        motto.textContent = 'motto: ' + towns[i].motto;
        year.textContent = 'yearFounded: ' + towns[i].yearFounded;
        population.textContent = 'currentPopulation: ' + towns[i].currentPopulation;
        rainfall.textContent = 'averageRainfall: ' + towns[i].averageRainfall;
        image.setAttribute('src', towns[i].photo);
        image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname);
        
        card.appendChild(h2);
        card.appendChild(motto);
        card.appendChild(year);
        card.appendChild(population);
        card.appendChild(rainfall);
        card.appendChild(image);
        document.querySelector('div.cards').appendChild(card);
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