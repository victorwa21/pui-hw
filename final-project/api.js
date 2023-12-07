$(document).ready(function () {
    const apiKey = 'zXPOlBBYFXAR6awaCrXiNIrzr0lvc2Y0'; // Replace with your actual API key
    const cityId = 350540; // Replace with the desired city ID

    const url = `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${cityId}`;
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
        // For demonstration purposes, let's update the HTML content
        const apiDataContainer = $('.api-data-phl');
        apiDataContainer.empty(); // Clear previous data

        // Display the forecast information
        data.forEach(hour => {
            const hourElement = `<p>${hour.DateTime}: ${hour.Temperature.Value} ${hour.Temperature.Unit}</p>`;
            apiDataContainer.append(hourElement);
        });
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
});