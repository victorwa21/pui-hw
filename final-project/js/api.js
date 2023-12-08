$(document).ready(function () {
    const departureLoc = localStorage.getItem('selectedDropdownItemId');
    const apiKey = 'zXPOlBBYFXAR6awaCrXiNIrzr0lvc2Y0';

    if (departureLoc === "pitt") {
        depcityId = 1310;
    } else if (departureLoc === "ny") {
        depcityId = 349727;
    } else if (departureLoc === "bos") {
        depcityId = 348735;
    }

    // First API call
    const url1 = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${depcityId}`;
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
            // Process the first API response 
            updatedepDropdownWithApiData(data.DailyForecasts);
        })
        .catch(error => {
            console.error('Error:', error.message);
        });

    
    const cityId = 350540; 
    //Second API call
    const url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityId}`;
    const params = {
        apikey: apiKey,
        language: 'en-us',
        details: 'true',
    };

    
    const urlWithParams = new URL(url);
    urlWithParams.search = new URLSearchParams(params);

    
    fetch(urlWithParams)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            
            updateDropdownWithApiData(data.DailyForecasts);
        })
        .catch(error => {
            console.error('Error:', error.message);
        });

    
    function updateDropdownWithApiData(forecasts) {
        const dropdownMenu = $('#weatherDropdown');
        dropdownMenu.empty(); 

        
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
        dropdownMenu.empty(); 

        
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
        
        const dropdown = new bootstrap.Dropdown(document.getElementById('weatherDropdownBtn'));
    });
});
