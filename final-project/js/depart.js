$(document).ready(function() {

    var trips = {
        pitt: [
            { id: 1, startTime: "8:00 AM", arriveTime: "2:59 PM", depLoc: "1100 Liberty Ave", depCity: "PIT", estTime: "6 hr 59 min", arrLoc: "30th St. Station - 2955 Market St", arrCity: "PHL", price: "$46.00" },
            { id: 2, startTime: "8:00 AM", arriveTime: "2:59 PM", depLoc: "1100 Liberty Ave", depCity: "PIT", estTime: "6 hr 59 min", arrLoc: "30th St. Station - 2955 Market St", arrCity: "PHL", price: "$50.00" },
            { id: 3, startTime: "12:15 PM", arriveTime: "6:45 PM", depLoc: "1100 Liberty Ave", depCity: "PIT", estTime: "6 hr 30 min", arrLoc: "30th St. Station - 2955 Market St", arrCity: "PHL", price: "$40.25" },
            { id: 4, startTime: "9:45 AM", arriveTime: "4:15 PM", depLoc: "1100 Liberty Ave", depCity: "PIT", estTime: "6 hr 30 min", arrLoc: "30th St. Station - 2955 Market St", arrCity: "PHL", price: "$60.75" },
            { id: 5, startTime: "11:00 AM", arriveTime: "5:30 PM", depLoc: "1100 Liberty Ave", depCity: "PIT", estTime: "6 hr 30 min", arrLoc: "30th St. Station - 2955 Market St", arrCity: "PHL", price: "$48.90" },
            { id: 6, startTime: "1:20 PM", arriveTime: "8:10 PM", depLoc: "1100 Liberty Ave", depCity: "PIT", estTime: "6 hr 50 min", arrLoc: "30th St. Station - 2955 Market St", arrCity: "PHL", price: "$42.80" }
        ],
        ny: [
            { id: 1, startTime: "8:00 AM", arriveTime: "2:59 PM", depLoc: "Moynihan Train Hall", depCity: "NYP", estTime: "6 hr 59 min", arrLoc: "30th St. Station - 2955 Market St", arrCity: "PHL", price: "$46.00" },
            { id: 2, startTime: "9:30 AM", arriveTime: "4:29 PM", depLoc: "Moynihan Train Hall", depCity: "NYP", estTime: "6 hr 59 min", arrLoc: "30th St. Station - 2955 Market St", arrCity: "PHL", price: "$52.00" },
            { id: 3, startTime: "11:15 AM", arriveTime: "6:14 PM", depLoc: "Moynihan Train Hall", depCity: "NYP", estTime: "6 hr 59 min", arrLoc: "30th St. Station - 2955 Market St", arrCity: "PHL", price: "$49.50" },
            { id: 4, startTime: "1:45 PM", arriveTime: "8:44 PM", depLoc: "Moynihan Train Hall", depCity: "NYP", estTime: "6 hr 59 min", arrLoc: "30th St. Station - 2955 Market St", arrCity: "PHL", price: "$55.75" },
            { id: 5, startTime: "3:30 PM", arriveTime: "10:29 PM", depLoc: "Moynihan Train Hall", depCity: "NYP", estTime: "6 hr 59 min", arrLoc: "30th St. Station - 2955 Market St", arrCity: "PHL", price: "$48.25" }
        ],
        bos: [
            { id: 1, startTime: "8:00 AM", arriveTime: "2:59 PM", depLoc: "Back Bay Station", depCity: "BOS", estTime: "6 hr 59 min", arrLoc: "30th St. Station - 2955 Market St", arrCity: "PHL", price: "$46.00" },
            { id: 2, startTime: "9:30 AM", arriveTime: "4:29 PM", depLoc: "Back Bay Station", depCity: "BOS", estTime: "6 hr 59 min", arrLoc: "30th St. Station - 2955 Market St", arrCity: "PHL", price: "$52.00" },
            { id: 3, startTime: "11:15 AM", arriveTime: "6:14 PM", depLoc: "Back Bay Station", depCity: "BOS", estTime: "6 hr 59 min", arrLoc: "30th St. Station - 2955 Market St", arrCity: "PHL", price: "$49.50" },
            { id: 4, startTime: "1:45 PM", arriveTime: "8:44 PM", depLoc: "Back Bay Station", depCity: "BOS", estTime: "6 hr 59 min", arrLoc: "30th St. Station - 2955 Market St", arrCity: "PHL", price: "$55.75" },
            { id: 5, startTime: "3:30 PM", arriveTime: "10:29 PM", depLoc: "Back Bay Station", depCity: "BOS", estTime: "6 hr 59 min", arrLoc: "30th St. Station - 2955 Market St", arrCity: "PHL", price: "$48.25" }
        ]
    };

    dropdownItemId = localStorage.getItem("selectedDropdownItemId");
    console.log("Search button clicked with ID:", dropdownItemId);
    for (var key in trips) {
        if (trips.hasOwnProperty(key)) {
            if (dropdownItemId === key) {
                var tripOptions = trips[key];
                for (var i = 0; i < tripOptions.length; i++) {
                    createTrip(tripOptions[i]);
                }
            }
        }
    }

    function createTrip(trip) {
        let template = document.querySelector(".depTrip");
        let clone = template.content.cloneNode(true);
        time1 = clone.querySelector(".time1");
        time2 = clone.querySelector(".time2");
        address1 = clone.querySelector(".address1");
        address1city = clone.querySelector(".address1city");
        totalTime = clone.querySelector(".totalTime");
        address2 = clone.querySelector(".address2");
        address2city = clone.querySelector(".address2city");
        depPrice = clone.querySelector(".depPrice");
        time1.textContent = trip.startTime;
        time2.textContent = trip.arriveTime;
        address1.textContent = trip.depLoc;
        address1city.textContent = trip.depCity;
        address2.textContent = trip.arrLoc;
        address2city.textContent = trip.arrCity;
        depPrice.textContent = trip.price;
        totalTime.textContent = trip.estTime;
        let depTrips = document.querySelectorAll(".depTrips");
        depTrips.forEach(function(depTrip) {
            depTrip.appendChild(clone);
        });
    }

    document.querySelector(".depTrips").addEventListener("click", function(event) {
        let totalPint;
        let totalP;
        if (event.target.classList.contains("select")) {
            let templateContainer = event.target.closest("#eachTrip");
            templateContainer.classList.toggle("fares");
            $('.select').hide();
            time1 = templateContainer.querySelector(".time1");
            time2 = templateContainer.querySelector(".time2");
            address1 = templateContainer.querySelector(".address1");
            address1city = templateContainer.querySelector(".address1city");
            totalTime = templateContainer.querySelector(".totalTime");
            address2 = templateContainer.querySelector(".address2");
            address2city = templateContainer.querySelector(".address2city");

            localStorage.setItem('deptime1', time1.textContent);
            console.log(localStorage.getItem('deptime1'));
            localStorage.setItem('deptime2', time2.textContent);
            localStorage.setItem('depadd1', address1.textContent);
            localStorage.setItem('depadd1city', address1city.textContent);
            localStorage.setItem('depadd2', address2.textContent);
            localStorage.setItem('depadd2city', address2city.textContent);
            localStorage.setItem('deptottime', totalTime.textContent);

            let p = templateContainer.querySelector(".depPrice");
            const depPriceText = p.textContent;
            const priceArray = depPriceText.match(/\d+\.\d+/);
            const price = priceArray ? priceArray[0] : null;
            const numericPrice = parseFloat(price);
            localStorage.setItem('selTripPrice', numericPrice);
            localStorage.setItem('selectedFare', 0);

            let initialPrice = parseFloat(localStorage.getItem('selTripPrice'));
            totalP = initialPrice.toFixed(2);

            if (templateContainer.classList.contains("fares")) {
                const fareOptions = [
                    { value: 'Coach', label: 'Coach +$0.00', price: 0 },
                    { value: 'Business', label: 'Business +$75.00', price: 75 },
                    { value: 'PrivateRoom', label: 'Private Room +$250.00', price: 250 }
                ];

                const uniqueName = 'fareClass_' + Date.now();
                $(templateContainer).find('.fareOptions').empty();

                fareOptions.forEach(function(option) {
                    const radioButtonId = uniqueName + '_' + option.value.toLowerCase();
                    const radioButton = $('<input>', {
                        type: 'radio',
                        name: uniqueName,
                        value: option.value,
                        id: radioButtonId,
                        price: option.price
                    });
                    if (radioButton.val() === 'Coach') {
                        radioButton.prop('checked', true);
                    }
                    const label = $('<label>', {
                        for: radioButtonId,
                        html: option.label
                    });

                    $(templateContainer).find('.fareOptions').append(radioButton);
                    $(templateContainer).find('.fareOptions').append(label);
                    $(templateContainer).find('.fareOptions').append('<br>');

                    radioButton.on('click', function() {
                        const selectedPrice = parseFloat(this.getAttribute('price'));
                        const selTripPrice = parseFloat(localStorage.getItem('selTripPrice'));
                        localStorage.setItem('selectedFare', this.value);
                        totalPint = (selectedPrice + selTripPrice)
                        totalP = totalPint.toFixed(2);
                        p.textContent = ("$" + totalP);
                    });
                });

                $('.confirm').on('click', function() {
                    localStorage.setItem('finalDepPrice', totalP);
                    console.log(totalP);
                    window.location.href = "bookarr.html";
                });
            }
        }
    });

    document.addEventListener("click", function(event) {
        let hasFaresClass = event.target.closest(".fares");

        if (!hasFaresClass) {
            let templateContainer = document.querySelector(".fares");
            let p = templateContainer.querySelector(".depPrice");
            const selTripPrice = parseFloat(localStorage.getItem('selTripPrice'));
            p.textContent = ("$" + selTripPrice.toFixed(2));
            templateContainer.classList.remove("fares");
            $('.select').show();
        }
    });

    var depDate = localStorage.getItem('departureDate');
    departureDate = document.querySelector(".departureDate");
    departureDate.textContent = depDate;

    if (dropdownItemId === "pitt") {
        departureDate.textContent = "Pittsburgh to Philadelphia - " + depDate;
    } else if (dropdownItemId === "ny") {
        departureDate.textContent = "New York to Philadelphia - " + depDate;
    } else if (dropdownItemId === "bos") {
        departureDate.textContent = "Boston to Philadelphia - " + depDate;
    }

});
