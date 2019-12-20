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
        if (towns[i].name == 'St.Louis Missouri Temple' || towns[i].name == 'San Diego, California Temple' || towns[i].name == 'Nauvoo, Illinois Temple' || towns[i].name == 'Kansas City, Missouri Temple'){
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