const weatherApi = {
    key: "c5e75a77e58c897752efb95f1fc184ca",
}

const searchInputBox = document.getElementById('input-box');

var button = document.getElementById("search-button");
button.addEventListener('click', (event) =>{
    if(document.getElementById("input-box").value.length == 0)
    {
        alert("Please enter the name of city")
    }
    else 
    {
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    document.querySelector('.weather-body').style.display = "block";
    }    
});
    


function getWeatherReport(city) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi.key}&units=metric`)


    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}


function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    
    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('images/clear.jpg')";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('images/cloud.jpg')";
        
    } else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('images/cloud.jpg')";
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('images/rain.jpg')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('images/snow.jpg')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
        
    }
    else if(weatherType.textContent == 'Smoke') {
    
        document.body.style.backgroundImage = "url('images/smoke.jpg')";
        
    }  
}


function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month}, ${year} \n ${day}` ;
}