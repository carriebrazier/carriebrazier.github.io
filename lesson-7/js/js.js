 const imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions={
    threshold:3,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          imgObserver.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      imgObserver.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }
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
