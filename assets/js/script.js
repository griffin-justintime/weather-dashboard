function getWeather() {
  var queryURL =
    "https://www.api.openweathermap.org/data/2.5/weather?q={Atlanta}&appid={8da99dc6848e03a904b5a1ef78e5a494}";

  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

getWeather();
