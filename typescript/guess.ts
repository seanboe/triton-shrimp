import {getIndexOfPosition, Solution} from "./positionDataFinder";

let markers: google.maps.Marker[] = [];
let solutionPosition: Solution;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const gameRound = urlParams.get('gameRound');
let gameRoundHTML = <HTMLInputElement>document.getElementById("gameRound");
gameRoundHTML.innerHTML = "Round: " + String(gameRound);

const currentPoints = urlParams.get('currentPoints');
let currentPointsHTML = <HTMLInputElement>document.getElementById("currentPoints");
currentPointsHTML.innerHTML = "Points: " + String(currentPoints);


function initMap(): void {

  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 2,
      center: { lat: 0, lng: 0 },
      mapTypeControl: false,
    }
  );

  map.addListener("click", (e) => {
    placeMarkerAndPanTo(e.latLng, map);
  });

  let guessButton = document.getElementById("guess")
  guessButton?.addEventListener("click", (e: Event) => goToAnswer())

  // Random solution position
  let randomPosition = Math.trunc(Math.random() * 15);
  solutionPosition = getIndexOfPosition(randomPosition);

  console.log("Map ID: " + solutionPosition.id);

  // Open the viewing/guessing window in the random solution position (ignore error)
  document.getElementById('mainPositionView')!.src = solutionPosition.link;

}

function placeMarkerAndPanTo(latLng: google.maps.LatLng, map: google.maps.Map) {
  
  
  const mark = new google.maps.Marker({
    position: latLng,
    map: map,
  });

  map.panTo(latLng);
  markers.push(mark)

  for (let i = 0; i < markers.length - 1; i++) {
    markers[i].setMap(null);
  }

  let myContainer = document.getElementById('guess') as HTMLInputElement;
  myContainer.value = "Guess!";

}

function goToAnswer() {

  if (markers.length > 0) {
    let guessLat = markers[markers.length - 1].getPosition()?.lat()
    let guessLng = markers[markers.length - 1].getPosition()?.lng()

    let solutionID = solutionPosition.id;

    location.replace("/answer.html?" + "solutionID=" + solutionID + "&guessLat=" + guessLat + "&guessLng=" + guessLng + "&guessSuccessful=true" + "&currentPoints=" + currentPoints + "&gameRound=" + gameRound);
  }
    const box = document.getElementById('pleaseplace');
    if (box != null) {
      // box.style.visibility = 'visible';
    }
  }


declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export { };