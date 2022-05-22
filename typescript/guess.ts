import {getIndexOfPosition, Solution} from "./positionDataFinder";

let markers: google.maps.Marker[] = [];
let solutionPosition: Solution;

function initMap(): void {

  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 4,
      center: { lat: -25.363882, lng: 131.044922 },
      mapTypeControl: false,
    }
  );

  map.addListener("click", (e) => {
    placeMarkerAndPanTo(e.latLng, map);
  });

  let guessButton = document.getElementById("guess")
  guessButton?.addEventListener("click", (e: Event) => goToAnswer())

  // Random solution position
  let randomPosition = Math.trunc(Math.random() * 11);
  solutionPosition = getIndexOfPosition(randomPosition);

  console.log("Map ID: " + solutionPosition.id);

  // Open the viewing/guessing window in the random solution position
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

    location.replace("/answer.html?" + "solutionID=" + solutionID + "&guessLat=" + guessLat + "&guessLng=" + guessLng)
  }
  else {
    // alert("Please put down a marker first.")
    const box = document.getElementById('pleaseplace');
    if (box != null) {
      box.style.visibility = 'visible';
    }
  }
}


declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export { };