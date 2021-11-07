// document.body.style.backgroundColor = "orange";

const theDiv = document.getElementsByClassName("nfInputPlacement")[0];
const newNode = document.createElement("p");
newNode.innerHTML = "burası muştur yolu yokuştur";
theDiv.appendChild(newNode);


const firstFilm = document.querySelectorAll("div.ptrack-content a[class='slider-refocus']")[0];

// if (!films && films.isArrays()) {
//     films.forEach( function(fil) {
//         console.log(fil.getAttribute("aria-label"));
//     });    
// }

const filmName = firstFilm.getAttribute("aria-label");

console.log(filmName);
