document.getElementById('search-btn').addEventListener('click', function() { 
    const city = document.getElementById('city-input').value; 
    console.log('City entered:', city);  
    fetchWeatherData(city); // Call the function with the entered city
}); 

async function fetchWeatherData(city) { 
    const apiKey = 'e873f68136d3f65622cc03d7ebb536f3';
    const apiUrl  =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ apiKey}`; 
    try { 
    const response = await fetch(apiUrl); 
    const data = await response.json(); 
    console.log('Weather data:', data); 
    // Additional code to update DOM with weather information 
    } catch (error) { 
    console.error('Error fetching weather data:', error); 
    } 
    }