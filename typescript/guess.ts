
let markers: google.maps.Marker[] = [];
let solutionPosition: google.maps.Marker;

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

  getSolutionPosition()

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


declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export { };



function getSolutionPosition() {
  const textData = 
  `{
    "one": {
      "id":1,
      "name":"Juhu Beach", 
      "lat": 19.096286, 
      "lng": 72.826739, 
      "link": "https://www.google.com/maps/embed?pb=!4v1653175077267!6m8!1m7!1sCAoSLEFGMVFpcE5WLW1lVWx4RElPMi1CaUl0RFZrWnd0SzlaVUZtbDFaWDF6Q3hC!2m2!1d19.0778842!2d72.82227499999999!3f6.12984088783624!4f-4.4909197791429705!5f0.7820865974627469"
    },
    "two": {
      "id":2,   
      "name":"Philippines, Freedom Island", 
      "lat": 14.487935, 
      "lng": 120.977712, 
      "link": "https://www.google.com/maps/embed?pb=!4v1653176302680!6m8!1m7!1sCAoSLEFGMVFpcE1yZFZPMm1YTE1UVnhnSEs1Q1pQaUU0b2lPd2FzSnlPbkM3UDlB!2m2!1d14.5560825690599!2d120.978561937809!3f283.218086020333!4f4.992403341375933!5f0.7820865974627469"
    },
    "three": {
      "id":3,
      "name":"Henderson Island", 
      "lat": -24.361086, 
      "lng": -128.304109, 
      "link": "https://www.google.com/maps/embed?pb=!4v1653175077267!6m8!1m7!1sCAoSLEFGMVFpcE5WLW1lVWx4RElPMi1CaUl0RFZrWnd0SzlaVUZtbDFaWDF6Q3hC!2m2!1d19.0778842!2d72.82227499999999!3f6.12984088783624!4f-4.4909197791429705!5f0.7820865974627469"
    },
    "four": {
      "id":4,
      "name":"Kuta Beach", 
      "lat": -8.725577, 
      "lng": 115.168418, 
      "link": "https://www.google.com/maps/embed?pb=!4v1653176725361!6m8!1m7!1sCAoSK0FGMVFpcE1pTlRxSklEU0h5ZDZlRERyVFVrWWZodU9LbHk5OElLTnlOM3M.!2m2!1d-8.71702!2d115.1678578!3f319.1309317031231!4f-10.6447255445173!5f0.7820865974627469"
    },
    "five": {
      "id":5,
      "name":"Gringo Beach", 
      "lat": 18.389521, 
      "lng": -70.034827, 
      "link": "https://www.google.com/maps/embed?pb=!4v1653177604565!6m8!1m7!1sCAoSLEFGMVFpcE11V1ZDa0dIZi0tSUpXdTUzaFFfRnI5R3M0NW5vNEdrbTRkYlk4!2m2!1d18.3888696!2d-70.0365439!3f19.401030740169972!4f-6.158078145601365!5f0.7820865974627469"
    },
    "six": {
      "id":6,
      "name":"Guanabara Bay", 
      "lat": -22.937826, 
      "lng": -43.134661, 
      "link": "https://www.google.com/maps/embed?pb=!4v1653177887629!6m8!1m7!1sCAoSLEFGMVFpcE11N1R6TGQ2ellMa0JLZTQwOHJlNWlWckxhbFZPOGlsOVpNcVVX!2m2!1d-22.9383644!2d-43.1317335!3f16.468451207643852!4f-20.432379763336144!5f0.7820865974627469"
    },
    "seven": {
      "id":7,
      "name":"Cabrillo National Monument", 
      "lat": 32.671818, 
      "lng": -117.244388, 
      "link": "https://www.google.com/maps/embed?pb=!4v1653178054550!6m8!1m7!1sCAoSLEFGMVFpcE1qRU42ZjhmSTRLUDRNbHBMTWRXbk9SWVAtdkpaTkpHYVYtT0NW!2m2!1d32.67153!2d-117.2443783!3f68.65435115496996!4f-17.789383937291007!5f0.7820865974627469"
    },
    "eight": {
      "id":8,
      "name":"Marina Beach", 
      "lat": 13.063414, 
      "lng": 80.288067, 
      "link": "https://www.google.com/maps/embed?pb=!4v1653178220516!6m8!1m7!1sCAoSLEFGMVFpcE80UkJQQlJUNnBVOHVXcGpPYjdkbjFfYkFNQ0dmMnFjX3U4ZDRG!2m2!1d13.0629893!2d80.28809869999999!3f117.56459584896155!4f-19.14579222287152!5f0.7820865974627469"
    },
    "nine": {
      "id":9,
      "name":"Point Reyes", 
      "lat": 38.207821, 
      "lng": -122.972451, 
      "link": "https://www.google.com/maps/embed?pb=!4v1653178366711!6m8!1m7!1sCAoSLEFGMVFpcE10NFFfTTdYeFBLY3NHbUlhRVBWUEtmekJSSEZ4cXVBWjZDWFlM!2m2!1d38.2118128!2d-122.9735081!3f181.43006214240106!4f-5.827783227365728!5f0.7820865974627469"
    },
    "ten": {
      "id":10,
      "name":"Torrey Pines", 
      "lat": 32.886728, 
      "lng": -117.253417, 
      "link": "https://www.google.com/maps/embed?pb=!4v1653178466740!6m8!1m7!1sCAoSLEFGMVFpcFBJVUk2cEcxbGNMTDhBZTUxSV9hUFo4cFRGZExXUTRNZ09fRzZp!2m2!1d32.8864499!2d-117.2535935!3f194.91629637790462!4f-3.9406106218440016!5f0.7820865974627469"
    },
    "eleven": {
      "id":11,
      "name":"Destin Beach", 
      "lat": 30.377037, 
      "lng": -86.862820, 
      "link": "https://www.google.com/maps/embed?pb=!4v1653178606374!6m8!1m7!1sCAoSLEFGMVFpcE5EdVg5M194ZVU1QnJtN0JrS0NIbHRPa1NqWGh6VkpSZEUza0JY!2m2!1d30.3777771!2d-86.8633347!3f253.87804527690486!4f8.668756369876434!5f0.7820865974627469"
    }
  }`

  const data = JSON.parse(textData)

  console.log(typeof(data.one.name))
  console.log(data.one.name)

}