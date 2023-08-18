
    const apiKey = "a2175c099581a12316f6d17d04d11867";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
   
        if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
   } else {

    let data = await response.json();


document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
   
if(data.weather[0].main == 'Rain') {
weatherIcon.src = "img/cloud-rain-solid.svg";
} 
else if (data.weather[0].main == 'Clouds') {
weatherIcon.src = "img/cloud-solid.svg";
}
else if (data.weather[0].main == 'Clear') {
weatherIcon.src = "img/sun-solid.svg";
}
else if (data.weather[0].main == 'Drizzle') {
weatherIcon.src = "img/cloud-sun-rain-solid.svg";
}
else if (data.weather[0].main == 'Mist') {
weatherIcon.src = "img/smog-solid.svg";
}
else if (data.weather[0].main == 'Thunderstorm') {
weatherIcon.src = "img/cloud-bolt-solid.svg";
}
else if (data.weather[0].main == 'Snow') {
weatherIcon.src = "img/cloud-meatball-solid.svg";
}

document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";

   }
   
    }



    

     searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
        
    })  
    
    searchBox.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          checkWeather(searchBox.value);
        }
      });


    // searchBtn.addEventListener("keydown", (e)=>{
    //     if (e.keydown === 13 || e.key === 'Enter' || "keydown" === "Enter") {
    //     checkWeather(searchBox.value);
    //     console.log("click"); }
    // })  
   
//     searchBtn.addEventListener("keydown", (event)=>{
//         if (event.keyCode === 13 || event.key === 'Enter') {
//             console.log('Enter');
//         checkWeather(searchBox.value);
//         console.log("click");
//     }
// });  
    //Оставлю эти рудименты эволюции, чтобы в ббудущем понять, почему эти строки не работали



    checkWeather();

