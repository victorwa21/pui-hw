$(document).ready(function () {
    const departureLoc = localStorage.getItem('selectedDropdownItemId');
    const apiKey = 'zXPOlBBYFXAR6awaCrXiNIrzr0lvc2Y0';
    if (departureLoc === "pitt") {
        depcityId= 1310;
    } else if ( departureLoc === "ny") {
        depcityId= 349727;
    } else if (departureLoc=== "bos") {
        depcityId= 348735;
    } 
        
        
        
    
        // First API call
        const url1 = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${depcityId}`;
        const params1 = {
            apikey: apiKey,
            language: 'en-us',
            details: 'true',
        };
        const urlWithParams1 = new URL(url1);
        urlWithParams1.search = new URLSearchParams(params1);
    
        fetch(urlWithParams1)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Process the first API response data here
                updatedepDropdownWithApiData(data.DailyForecasts);
            })
            .catch(error => {
                console.error('Error:', error.message);
            });
        



     // Replace with your actual AccuWeather API key
    const cityId = 350540; // Replace with the desired city ID

    const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityId}`;
    const params = {
        apikey: apiKey,
        language: 'en-us',
        details: 'true',
    };

    // Construct the URL with parameters
    const urlWithParams = new URL(url);
    urlWithParams.search = new URLSearchParams(params);

    // Make the API request using fetch
    fetch(urlWithParams)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Process the API response data here
            updateDropdownWithApiData(data.DailyForecasts);
        })
        .catch(error => {
            console.error('Error:', error.message);
        });


// Function to update dropdown menu with API data
function updateDropdownWithApiData(forecasts) {
    const dropdownMenu = $('#weatherDropdown');
    dropdownMenu.empty(); // Clear previous data

    // Display the 10-day forecast information
    forecasts.forEach(day => {
        const date = new Date(day.Date);
        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
        const monthAndDay = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
        const iconPhrase = day.Day.IconPhrase;
        const maxTemperature = day.Temperature.Maximum.Value;
        const minTemperature = day.Temperature.Minimum.Value;
        const weatherIcon = day.Day.Icon;

        const dayElement = `
            <div>
                <p id= "dow"> ${dayOfWeek}, ${monthAndDay}</p>
                <p id = "wicon">${iconPhrase}   <img src="https://developer.accuweather.com/sites/default/files/${weatherIcon < 10 ? '0' : ''}${weatherIcon}-s.png" alt="Weather Icon"></p> 
                <p id="max">Max Temp: ${maxTemperature} ${day.Temperature.Maximum.Unit}</p>
                <p id="min">Min Temp: ${minTemperature} ${day.Temperature.Minimum.Unit}</p>
              
            </div>
            <div class="dropdown-divider divide"></div>
        `;
        dropdownMenu.append(dayElement);
    });
}

function updatedepDropdownWithApiData(forecasts) {
    const dropdownMenu = $('#weatherdepDropdown');
    dropdownMenu.empty(); // Clear previous data

    // Display the 10-day forecast information
    forecasts.forEach(day => {
        const date = new Date(day.Date);
        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
        const monthAndDay = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
        const iconPhrase = day.Day.IconPhrase;
        const maxTemperature = day.Temperature.Maximum.Value;
        const minTemperature = day.Temperature.Minimum.Value;
        const weatherIcon = day.Day.Icon;

        const dayElement = `
            <div>
                <p id= "dow"> ${dayOfWeek}, ${monthAndDay}</p>
                <p id = "wicon">${iconPhrase}   <img src="https://developer.accuweather.com/sites/default/files/${weatherIcon < 10 ? '0' : ''}${weatherIcon}-s.png" alt="Weather Icon"></p> 
                <p id="max">Max Temp: ${maxTemperature} ${day.Temperature.Maximum.Unit}</p>
                <p id="min">Min Temp: ${minTemperature} ${day.Temperature.Minimum.Unit}</p>
              
            </div>
            <div class="dropdown-divider divide"></div>
        `;
        dropdownMenu.append(dayElement);
    });
}


    // Toggle visibility of the dropdown content on button click
    $('#weatherDropdownBtn').on('click', function () {
        // Toggle the dropdown manually using Bootstrap 5 API
        const dropdown = new bootstrap.Dropdown(document.getElementById('weatherDropdownBtn'));

        // Fetch weather data only if the dropdown is now visible
        if (dropdown._menu.classList.contains('show')) {
            //fetchWeatherData();
        }
    });
});
