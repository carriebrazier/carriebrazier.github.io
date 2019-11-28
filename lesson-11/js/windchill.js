
/*var ct = parseFloat(document.getElementById("temperature").textContent);
var ws = parseFloat(document.getElementById("windspeed").textContent);

if (isNaN(ct)|| isNaN(ws)){
    document.getElementById("wchill").innerHTML = "N/A"
} else {document.getElementById("wchill").innerHTML = windchill(ct, ws) + '&#8457';
}
function windchill(tempF,speed) {
    return (Math.round(100 * (35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16)))) / 100);
}
*/
updateWindChill();

function updateWindChill(){
   let temperatureF = parseFloat(document.getElementById('temperature').textContent);
   let windSpeedMPH = parseFloat(document.getElementById('windspeed').textContent);
   let windChillF = windChill(temperatureF, windSpeedMPH);
   document.getElementById('windchill').textContent = windChillF;
   // if (windChillF== null) {hideWindChill()}
}

function windChill(tempF, speed) { 
   const maxTempF = 50; 
   const minWindSpeed = 3;
   // let f = null;
   let f = "N/A"
   if ((tempF <= maxTempF) && (speed >=minWindSpeed)) {
       f = (35.74 + (0.6215 * tempF) - 
           (35.75 * speed ** 0.16) +
           (0.4275 * tempF * speed ** 0.16)).toFixed(0);
   }
   return f;  
}
