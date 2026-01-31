const apiKey = "01821ab409dec8ba4ac897bcf3fa625e"; // Put your API key here

function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("cityName").innerText = data.name;
            document.getElementById("temperature").innerText =
                `🌡️ Temperature: ${data.main.temp} °C`;
            document.getElementById("description").innerText =
                `🌥️ Weather: ${data.weather[0].description}`;
            document.getElementById("humidity").innerText =
                `💧 Humidity: ${data.main.humidity}%`;
            document.getElementById("wind").innerText =
                `🌬️ Wind Speed: ${data.wind.speed} m/s`;
        })
        .catch(error => {
            alert(error.message);
        });
}
