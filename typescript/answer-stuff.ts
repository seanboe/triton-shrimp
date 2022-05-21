
 const queryString = window.location.search;
 const urlParams = new URLSearchParams(queryString);
 const lat1 = urlParams.get('lat1');
 const lng1 = urlParams.get('lng1');
 const lat2 = urlParams.get('lat2');
 const lng2 = urlParams.get('lng2');
 const p = urlParams.get('points');



 function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return Math.round(d * 100 * 0.621371) / 100;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

 


function initMap(): void {

  const answer = { lat: parseFloat(lat1!), lng: parseFloat(lng1!) };
  const guess = { lat: parseFloat(lat2!), lng: parseFloat(lng2!) };

  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 4,
      center: answer,
      mapTypeControl: false,
    }
  );

  new google.maps.Marker({
    position: answer,
    map,
    title: "Answer Marker",
    label: "Answer",
    
  });

  new google.maps.Marker({
    position: guess,
    map,
    title: "Guess Marker",
    label: "Guess",
  });

  const flightPlanCoordinates = [
    answer, guess
  ];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });
  flightPath.setMap(map);


  let myContainer = document.getElementById('answerlabel') as HTMLElement;
  myContainer.innerHTML = String(getDistanceFromLatLonInKm(parseFloat(lat1!), parseFloat(lng1!), parseFloat(lat2!), parseFloat(lng2!)) + " miles off");
  
  let guessButton = document.getElementById("play-again")
  guessButton?.addEventListener("click", (e:Event) => playAgain())

}

function playAgain() {
  location.replace("../")
}


declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
