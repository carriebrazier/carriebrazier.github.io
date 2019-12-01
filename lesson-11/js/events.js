const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const cardContainer = document.querySelector("div.events");
fetch(requestURL)
    .then(response=>{return response.json()})
    .then(json=>{
        const towns = json["towns"];
        towns.forEach(town=>{
            
            if( town.name =="Preston" ) {

            let card = document.createElement("section");
            
            
            let h2 = document.createElement("h2");
            h2.textContent = `Mark your calendars!`;
           
            
            let p = document.createElement("p");
            p.innerHTML = `${town.events[0]}<br>${town.events[1]}<br>${town.events[2]}`;

           
            card.appendChild(h2);
            card.appendChild(p);
            
            
            cardContainer.appendChild(card);
            }

        });
    });
