const API_KEY = '2323effc3a9d4e6ab2e72814250407'; 

async function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    const errorElem = document.getElementById('error');
    const weatherCard = document.getElementById('weatherCard');

    if (!city) {
        errorElem.textContent = "Please enter a city name.";
        weatherCard.style.display = 'none';
        return;
    }

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();

        document.getElementById('location').textContent = `${data.location.name}, ${data.location.country}`;
        document.getElementById('icon').src = data.current.condition.icon;
        document.getElementById('temperature').textContent = `${data.current.temp_c}°C`;
        document.getElementById('condition').textContent = data.current.condition.text;
        document.getElementById('feelslike').textContent = `🌡️ Feels like: ${data.current.feelslike_c}°C`;
        document.getElementById('wind').textContent = `💨 Wind: ${data.current.wind_kph} kph`;
        document.getElementById('humidity').textContent = `💧 Humidity: ${data.current.humidity}%`;

        errorElem.textContent = '';
        weatherCard.style.display = 'block';
    } catch (error) {
        errorElem.textContent = "City not found or API error.";
        weatherCard.style.display = 'none';
    }
}
