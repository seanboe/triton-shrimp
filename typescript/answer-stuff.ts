import {getIndexOfPosition, Solution} from "./positionDataFinder";

 const queryString = window.location.search;
 const urlParams = new URLSearchParams(queryString);
 const solutionPositionID = urlParams.get('solutionID')
 const lat1 = getIndexOfPosition(solutionPositionID).lat;
 const lng1 = getIndexOfPosition(solutionPositionID).lng;
 const lat2 = urlParams.get('guessLat');
 const lng2 = urlParams.get('guessLng');
 const guessSuccessful_string = urlParams.get('guessSuccessful');
 const guessSuccessful = (guessSuccessful_string === "true");

 const offByDistance = getDistanceFromLatLonInKm(parseFloat(String(lat1)!), parseFloat(String(lng1)!), parseFloat(lat2!), parseFloat(lng2!));
 let thisRoundPoints = 0;
 if (guessSuccessful) {
  thisRoundPoints = Math.trunc(calcPoints(offByDistance));
 }

 const gameRound = urlParams.get('gameRound');
 let gameRoundHTML = <HTMLInputElement>document.getElementById("gameRound");
 gameRoundHTML.innerHTML = "Round: " + String(gameRound);

 const currentPoints = parseInt(String(urlParams.get('currentPoints'))) + thisRoundPoints;
 let currentPointsHTML = <HTMLInputElement>document.getElementById("currentPoints");
 currentPointsHTML.innerHTML = "Points Gained: " + String(thisRoundPoints);

 let answertitle = <HTMLInputElement>document.getElementById("answertext");
 answertitle.innerHTML = getIndexOfPosition(solutionPositionID).name;

 let description = <HTMLInputElement>document.getElementById("answer-description")
 description.innerHTML = getIndexOfPosition(solutionPositionID).description;

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

  const answer = { lat: parseFloat(String(lat1)!), lng: parseFloat(String(lng1)!) };
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
    label: "A",
    
  });

  if (guessSuccessful) {
    console.log("Guess successful");

    new google.maps.Marker({
      position: guess,
      map,
      title: "Guess Marker",
      label: "G",
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
    myContainer.innerHTML = (String(offByDistance) + " miles off");
  
  }
  else {
    let myContainer = document.getElementById('answerlabel') as HTMLElement;
    myContainer.innerHTML = "No Guess!"
    console.log("unsuccessful guess")
  }

  let guessButton = document.getElementById("play-again")
  guessButton?.addEventListener("click", (e:Event) => playAgain())

}

function playAgain() {
  if (parseInt(String(gameRound)) + 1 >= 4) {
    location.replace("../gameover.html?finalpoints=" + currentPoints);
  }
  else {
    location.replace("./game.html?&gameRound=" + (parseInt(String(gameRound)) + 1) + "&currentPoints=" + (parseInt(String(currentPoints))));
  }
}

function calcPoints(distance) {
  distance = parseInt(distance);
  return 500 + Math.pow(Math.E, -((0.01*distance - 100)/10.85));
}


declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
