const API_KEY = "94bec4dbd2fed92e63b9a58af1c554fa";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span");
        
        weather.innerText = `${data.main.temp}℃ / ${data.name}`;
        
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}

// 브라우저에서 위치 좌표 발송(trun, false)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);