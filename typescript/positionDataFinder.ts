export class Solution {
  id: number;
  name: string;
  lat: number;
  lng: number;
  link: string;
  description: string;

  constructor(id, name, lat, lng, link, description) {
    this.id = id;
    this.name = name;
    this.lat = lat;
    this.lng = lng;
    this.link = link;
    this.description = description;
  }
}

export function getIndexOfPosition(index) {
  const textData = 
  `{
    "zero": {
      "id":0,
      "name":"Juhu Beach", 
      "lat": 19.096286, 
      "lng": 72.826739, 
      "link": "https://www.google.com/maps/embed?pb=!4v1653175077267!6m8!1m7!1sCAoSLEFGMVFpcE5WLW1lVWx4RElPMi1CaUl0RFZrWnd0SzlaVUZtbDFaWDF6Q3hC!2m2!1d19.0778842!2d72.82227499999999!3f6.12984088783624!4f-4.4909197791429705!5f0.7820865974627469",
      "description": " Juhu Beach is located in Mumbai, India and is one of the dirtiest beaches in the country. Each day, trucks and excavators attempt to remove the trash but new trash constantly washes up along the shore. Therefore, further waste-management services are required in order to make the beach clean."
    },
    "one": {
      "id":1,   
      "name":"Philippines, Freedom Island", 
      "lat": 14.487935, 
      "lng": 120.977712, 
      "link": "https://www.google.com/maps/embed?pb=!4v1653176302680!6m8!1m7!1sCAoSLEFGMVFpcE1yZFZPMm1YTE1UVnhnSEs1Q1pQaUU0b2lPd2FzSnlPbkM3UDlB!2m2!1d14.5560825690599!2d120.978561937809!3f283.218086020333!4f4.992403341375933!5f0.7820865974627469",
      "description": "Freedom Island is located in the Philippines, and its beach is on the top 5 list of dirtiest beaches in the world. Even though about 400 truckloads’ worth of trash was cleared from the beach, garbage continues to remain along the coastline. Thus, a more effective method of removing the trash is needed in order to make the beach habitable."
    },
    "two": { 
      "id":2,
      "name":"Henderson Island", 
      "lat": -24.361086, 
      "lng": -128.304109, 
      "link": "https://www.google.com/maps/embed?pb=!4v1653175077267!6m8!1m7!1sCAoSLEFGMVFpcE5WLW1lVWx4RElPMi1CaUl0RFZrWnd0SzlaVUZtbDFaWDF6Q3hC!2m2!1d19.0778842!2d72.82227499999999!3f6.12984088783624!4f-4.4909197791429705!5f0.7820865974627469",
      "description": "Henderson Island is located in the Pitcairn Islands, a British territory situated about 3,400 miles from the coast of Chile. About 37 million articles of trash are on its beaches and certain conservation organizations have attempted to save the island from permanent damage."
    },
    "three": {
      "id":3,
      "name":"Kuta Beach", 
      "lat": -8.725577, 
      "lng": 115.168418, 
      "link": "https://www.google.com/maps/embed?pb=!4v1653176725361!6m8!1m7!1sCAoSK0FGMVFpcE1pTlRxSklEU0h5ZDZlRERyVFVrWWZodU9LbHk5OElLTnlOM3M.!2m2!1d-8.71702!2d115.1678578!3f319.1309317031231!4f-10.6447255445173!5f0.7820865974627469",
      "description": "Kuta Beach is located in Indonesia, the country that is ranked #2 in global marine pollution. Indonesia is known for its intense monsoon season, and coincidentally, it is during this time where the rate of trash disposal on the beach is highest. This makes Kuta Beach a target for many marine protection organizations."
    },
    "four": {
      "id":4,
      "name":"Gringo Beach", 
      "lat": 18.389521, 
      "lng": -70.034827, 
      "link": "https://www.google.com/maps/embed?pb=!4v1653177604565!6m8!1m7!1sCAoSLEFGMVFpcE11V1ZDa0dIZi0tSUpXdTUzaFFfRnI5R3M0NW5vNEdrbTRkYlk4!2m2!1d18.3888696!2d-70.0365439!3f19.401030740169972!4f-6.158078145601365!5f0.7820865974627469",
      "description": "Gringo Beach is located in the Dominican Republic, and is on the list of the top dirtiest beaches in the world. The beach is infamous for toxic pollution, which includes chemical and pharmaceutical contamination. Although some organizations have made attempts to clean the beach, none have been successful."
    },
    "five": {
      "id":5,
      "name":"Guanabara Bay", 
      "lat": -22.937826, 
      "lng": -43.134661, 
      "link": "https://www.google.com/maps/embed?pb=!4v1653177887629!6m8!1m7!1sCAoSLEFGMVFpcE11N1R6TGQ2ellMa0JLZTQwOHJlNWlWckxhbFZPOGlsOVpNcVVX!2m2!1d-22.9383644!2d-43.1317335!3f16.468451207643852!4f-20.432379763336144!5f0.7820865974627469",
      "description": "Gringo Beach is located in the Dominican Republic, and is on the list of the top dirtiest beaches in the world. The beach is infamous for toxic pollution, which includes chemical and pharmaceutical contamination. Although some organizations have made attempts to clean the beach, none have been successful."
    },
    "six": {
      "id":6,
      "name":"Cabrillo National Monument", 
      "lat": 32.671818, 
      "lng": -117.244388, 
      "link": "https://www.google.com/maps/embed?pb=!4v1653178054550!6m8!1m7!1sCAoSLEFGMVFpcE1qRU42ZjhmSTRLUDRNbHBMTWRXbk9SWVAtdkpaTkpHYVYtT0NW!2m2!1d32.67153!2d-117.2443783!3f68.65435115496996!4f-17.789383937291007!5f0.7820865974627469",
      "description": "Guanabara Bay is located in Rio de Janeiro, Brazil. In addition to plastic pollution, its beaches have been known to contain human waste, thus making it one of the dirtiest beaches in the world. A $1.1 billion plan to clean the bay is currently in effect."
    },
    "seven": {
      "id":7,
      "name":"Marina Beach", 
      "lat": 13.063414, 
      "lng": 80.288067, 
      "link": "https://www.google.com/maps/embed?pb=!4v1653178220516!6m8!1m7!1sCAoSLEFGMVFpcE80UkJQQlJUNnBVOHVXcGpPYjdkbjFfYkFNQ0dmMnFjX3U4ZDRG!2m2!1d13.0629893!2d80.28809869999999!3f117.56459584896155!4f-19.14579222287152!5f0.7820865974627469",
      "description": "Description here"
    },
    "eight": {
      "id":8,
      "name":"Point Reyes", 
      "lat": 38.207821, 
      "lng": -122.972451, 
      "link": "https://www.google.com/maps/embed?pb=!4v1653178366711!6m8!1m7!1sCAoSLEFGMVFpcE10NFFfTTdYeFBLY3NHbUlhRVBWUEtmekJSSEZ4cXVBWjZDWFlM!2m2!1d38.2118128!2d-122.9735081!3f181.43006214240106!4f-5.827783227365728!5f0.7820865974627469",
      "description": "Description here"
    },
    "nine": {
      "id":9,
      "name":"Torrey Pines", 
      "lat": 32.886728, 
      "lng": -117.253417, 
      "link": "https://www.google.com/maps/embed?pb=!4v1653178466740!6m8!1m7!1sCAoSLEFGMVFpcFBJVUk2cEcxbGNMTDhBZTUxSV9hUFo4cFRGZExXUTRNZ09fRzZp!2m2!1d32.8864499!2d-117.2535935!3f194.91629637790462!4f-3.9406106218440016!5f0.7820865974627469",
      "description": "Description here"
    },
    "ten": {
      "id":10,
      "name":"Destin Beach", 
      "lat": 30.377037, 
      "lng": -86.862820, 
      "link": "https://www.google.com/maps/embed?pb=!4v1653178606374!6m8!1m7!1sCAoSLEFGMVFpcE5EdVg5M194ZVU1QnJtN0JrS0NIbHRPa1NqWGh6VkpSZEUza0JY!2m2!1d30.3777771!2d-86.8633347!3f253.87804527690486!4f8.668756369876434!5f0.7820865974627469",
      "description": "Description here"
    }
  }`

  const data = JSON.parse(textData)

  let zero = new Solution(data.zero.id, data.zero.name, data.zero.lat, data.zero.lng, data.zero.link, data.zero.description)
  let one = new Solution(data.one.id, data.one.name, data.one.lat, data.one.lng, data.one.link, data.one.description)
  let two = new Solution(data.two.id, data.two.name, data.two.lat, data.two.lng, data.two.link, data.two.description)
  let three = new Solution(data.three.id, data.three.name, data.three.lat, data.three.lng, data.three.link, data.three.description)
  let four = new Solution(data.four.id, data.four.name, data.four.lat, data.four.lng, data.four.link, data.four.description)
  let five = new Solution(data.five.id, data.five.name, data.five.lat, data.five.lng, data.five.link, data.five.description)
  let six = new Solution(data.six.id, data.six.name, data.six.lat, data.six.lng, data.six.link, data.six.description)
  let seven = new Solution(data.seven.id, data.seven.name, data.seven.lat, data.seven.lng, data.seven.link, data.seven.description)
  let eight = new Solution(data.eight.id, data.eight.name, data.eight.lat, data.eight.lng, data.eight.link, data.eight.description)
  let nine = new Solution(data.nine.id, data.nine.name, data.nine.lat, data.nine.lng, data.nine.link, data.nine.description)
  let ten = new Solution(data.ten.id, data.ten.name, data.ten.lat, data.ten.lng, data.ten.link, data.ten.description)

  let possible = [zero, one, two, three, four, five, six, seven, eight, nine, ten];

  return possible[index % 11]
}