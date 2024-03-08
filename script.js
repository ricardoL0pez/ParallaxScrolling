document.addEventListener("DOMContentLoaded", function() {
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
});
