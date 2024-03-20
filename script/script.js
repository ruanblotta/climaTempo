function getWeather() {
    const apiKey = '07ac49a90fe4a7aab3d3a2e0fe68359';
    var apiCity = document.getElementById('city').value;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${apiCity}&appid=${apiKey}`; // para buscar a informação de acordo com input

    fetch(apiURL)
    .then(Response => Response.json())
    .then(data => {
        const cityName = data.name;
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;
        const weatherWind = data.wind.speed;

        const weatherDiv = document.getElementById('weather');
        weatherDiv.innerHTML = `<p>Cidade: ${cityName}</p>
                                <p>Temperatura: ${temperature}</p>
                                <p>Descrição: ${weatherDescription}</p>
                                <p>Vento:  ${weatherWind}</p>`;
    })
    .catch(error => {
        console.error('Não foi possível obter dados do clima da cidade digitada', error);
    });

    document.getElementById('city').addEventListener('input', getWeather);
}