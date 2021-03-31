console.log("hello world");

function getWeather(){
    var queryURL = "api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
    
    fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log(data);
    });

}

getWeather();