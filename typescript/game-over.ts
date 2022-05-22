const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const points = urlParams.get("finalpoints")

let finalPoints = <HTMLInputElement>document.getElementById("finalpoints");
finalPoints.innerHTML = "Final Points: " + points;
