var searchBtn = document.querySelector(".search-bar>button");
searchBtn.addEventListener("click", checkWeather);
document.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        checkWeather();
    };
});
async function checkWeather(){
    let searchInput = document.querySelector(".search-bar>input");
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid=bab0450c31f4518ee744682512bc82c4&units=metric"
    const response = await fetch(apiUrl);
    var data = await response.json();
    console.log(data);
    cityName.innerHTML = data.name;   // Id's can be directly treated as variable name.
    temparature.innerHTML = Math.round(data.main.temp) + "&degc";
    document.querySelector(".humidityValue").innerHTML = data.main.humidity + "%";
    document.querySelector(".windSpeed").innerHTML = data.wind.speed + " Km/Hr";
    document.querySelector("#weatherStatusImage > img").setAttribute("src", "./images/" + data.weather[0].main.toLowerCase() + ".png")
    
}

