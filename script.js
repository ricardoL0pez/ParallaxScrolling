let stars = document.getElementById('starts');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    /* stars.style.left = value * 0.25 + 'px'; */
    /* stars.style.transform = 'rotate(' + value + 'deg)'; */
    let rotation = value / (window.innerHeight / 90);
    stars.style.transform = 'rotate(' + rotation + 'deg)';
    moon.style.top = value * 1.05 + 'px';
     /* mountains_behind.style.top = value * 1.5 + 'px'; */
    /* mountains_front.style.top = value * -1.0 + 'px'; */
    mountains_front.style.transform = 'scale(' + (1 + value / 3000) + ')';
    text.style.marginRight = value * 4 + 'px';
    /* text.style.marginTop = value * -1.5 + 'px'; */
    btn.style.marginTop = value * 0.5 + 'px';
    header.style.top = value * 0.5 + 'px';

   
     
    /* mountains_front.style.zoom = value * -1.0 + 'px'; */
})






/* document.addEventListener("DOMContentLoaded", function() {
    // Cargamos el SVG utilizando fetch
    fetch("./assets/mountains.svg")
        .then(response => response.text())
        .then(svgData => {
            const div = document.createElement("div");
            div.innerHTML = svgData;

            const startsLayer = div.querySelector("#uuid-340a6f29-104b-4196-9058-80764b1a9d50");

            document.getElementById("svgContainerStart").appendChild(startsLayer);
        })
        .catch(error => console.error("Error cargando el archivo SVG", error));
}); */

