
let markers: google.maps.Marker[] = [];
let solutionPosition: google.maps.Marker;

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 4,
      center: { lat: -25.363882, lng: 131.044922 },
    }
  );

  map.addListener("click", (e) => {
    placeMarkerAndPanTo(e.latLng, map);
  });

  let guessButton = document.getElementById("guess")
  guessButton?.addEventListener("click", (e: Event) => goToAnswer())



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

  // window.alert(markers[markers.length - 1].getPosition())
}

function goToAnswer() {

  if (markers.length > 0) {
    let lat2 = markers[markers.length - 1].getPosition()?.lat()
    let lng2 = markers[markers.length - 1].getPosition()?.lng()
    // alert(lng2)
    console.log(typeof (lng2))
    console.log(lng2)
    let solution_position = "lat1=20&lng1=20"
    location.replace("/answer.html?" + solution_position + "&lat2=" + lat2 + "&lng2=" + lng2 + "?points=0")
  }
  else {
    alert("Please put down a marker first.")
  }
}

function getSolutionPosition() {


}


declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export { };

