function getWeather() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const city = document.getElementById('cityInput').value;
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
  
        weatherInfo.innerHTML = `
          <h2>${city}</h2>
          <p>Temperature: ${temperature}°C</p>
          <p>Description: ${description}</p>
          <img src="http://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
        `;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
      });
  }
  