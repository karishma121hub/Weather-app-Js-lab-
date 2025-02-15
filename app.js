async function fetchWeatherData(city) {
    const apiKey = 'e873f68136d3f65622cc03d7ebb536f3';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        console.log("Fetching weather data for:", city); // Debugging

        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log("API Response:", data); // Log full response

        if (data.cod === 200) {
            document.getElementById('city-name').textContent = `City: ${data.name}, ${data.sys.country}`;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('weather-description').textContent = `Condition: ${data.weather[0].description}`;
        } else {
            document.getElementById('city-name').textContent = 'City not found!';
            document.getElementById('temperature').textContent = '';
            document.getElementById('weather-description').textContent = '';
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById('city-name').textContent = 'Error fetching data!';
    }
}

// Event listener for button click
document.getElementById('search-btn').addEventListener('click', function () {
    const city = document.getElementById('city-input').value.trim();
    if (city) {
        fetchWeatherData(city);
    } else {
        alert("Please enter a city name");
    }
});
