$(document).ready(function() {

    var trips = {
        pitt: [
            { id: 1, startTime: "8:00 AM", arriveTime: "2:59 PM", depLoc: "30th St. Station - 2955 Market St", depCity: "PHL", estTime: "6 hr 59 min", arrLoc: "1100 Liberty Ave", arrCity: "PIT", price: "$46.00" },
            { id: 2, startTime: "7:00 AM", arriveTime: "1:59 PM", depLoc: "30th St. Station - 2955 Market St", depCity: "PHL", estTime: "6 hr 59 min", arrLoc: "1100 Liberty Ave", arrCity: "PIT", price: "$50.00" },
            { id: 3, startTime: "9:30 AM", arriveTime: "3:29 PM", depLoc: "30th St. Station - 2955 Market St", depCity: "PHL", estTime: "5 hr 59 min", arrLoc: "1100 Liberty Ave", arrCity: "PIT", price: "$55.00" },
            { id: 4, startTime: "11:45 AM", arriveTime: "5:30 PM", depLoc: "30th St. Station - 2955 Market St", depCity: "PHL", estTime: "5 hr 45 min", arrLoc: "1100 Liberty Ave", arrCity: "PIT", price: "$48.50" },
            { id: 5, startTime: "1:15 PM", arriveTime: "7:14 PM", depLoc: "30th St. Station - 2955 Market St", depCity: "PHL", estTime: "5 hr 59 min", arrLoc: "1100 Liberty Ave", arrCity: "PIT", price: "$52.75" },
            { id: 6, startTime: "3:00 PM", arriveTime: "8:59 PM", depLoc: "30th St. Station - 2955 Market St", depCity: "PHL", estTime: "5 hr 59 min", arrLoc: "1100 Liberty Ave", arrCity: "PIT", price: "$49.25" }
        ],
        ny: [
            { id: 1, startTime: "3:00 PM", arriveTime: "8:59 PM", depLoc: "30th St. Station - 2955 Market St", depCity: "PHL", estTime: "5 hr 59 min", arrLoc: "Moynihan Train Hall", arrCity: "NYP", price: "$49.25" },
            { id: 2, startTime: "4:30 PM", arriveTime: "9:29 PM", depLoc: "30th St. Station - 2955 Market St", depCity: "PHL", estTime: "5 hr 59 min", arrLoc: "Moynihan Train Hall", arrCity: "NYP", price: "$55.00" },
            { id: 3, startTime: "6:15 PM", arriveTime: "11:14 PM", depLoc: "30th St. Station - 2955 Market St", depCity: "PHL", estTime: "5 hr 59 min", arrLoc: "Moynihan Train Hall", arrCity: "NYP", price: "$52.75" },
            { id: 4, startTime: "8:45 PM", arriveTime: "1:44 AM", depLoc: "30th St. Station - 2955 Market St", depCity: "PHL", estTime: "5 hr 59 min", arrLoc: "Moynihan Train Hall", arrCity: "NYP", price: "$58.50" },
            { id: 5, startTime: "10:30 PM", arriveTime: "3:29 AM", depLoc: "30th St. Station - 2955 Market St", depCity: "PHL", estTime: "5 hr 59 min", arrLoc: "Moynihan Train Hall", arrCity: "NYP", price: "$51.00" }
        ],
        bos: [
            { id: 2, startTime: "4:15 PM", arriveTime: "9:14 PM", depLoc: "30th St. Station - 2955 Market St", depCity: "PHL", estTime: "5 hr 59 min", arrLoc: "Back Bay Station", arrCity: "BOS", price: "$53.00" },
            { id: 3, startTime: "5:45 PM", arriveTime: "10:44 PM", depLoc: "30th St. Station - 2955 Market St", depCity: "PHL", estTime: "5 hr 59 min", arrLoc: "Back Bay Station", arrCity: "BOS", price: "$47.75" },
            { id: 4, startTime: "7:30 PM", arriveTime: "12:29 AM", depLoc: "30th St. Station - 2955 Market St", depCity: "PHL", estTime: "5 hr 59 min", arrLoc: "Back Bay Station", arrCity: "BOS", price: "$51.25" },
            { id: 5, startTime: "9:00 PM", arriveTime: "2:59 AM", depLoc: "30th St. Station - 2955 Market St", depCity: "PHL", estTime: "5 hr 59 min", arrLoc: "Back Bay Station", arrCity: "BOS", price: "$56.50" },
            { id: 6, startTime: "10:45 PM", arriveTime: "3:44 AM", depLoc: "30th St. Station - 2955 Market St", depCity: "PHL", estTime: "5 hr 59 min", arrLoc: "Back Bay Station", arrCity: "BOS", price: "$49.75" }
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

            localStorage.setItem('arrtime1', time1.textContent);
            console.log(localStorage.getItem('arrtime1'));
            localStorage.setItem('arrtime2', time2.textContent);
            localStorage.setItem('arradd1', address1.textContent);
            localStorage.setItem('arradd1city', address1city.textContent);
            localStorage.setItem('arradd2', address2.textContent);
            localStorage.setItem('arradd2city', address2city.textContent);
            localStorage.setItem('arrtottime', totalTime.textContent);

            let p = templateContainer.querySelector(".depPrice");
            const depPriceText = p.textContent;
            const priceArray = depPriceText.match(/\d+\.\d+/);
            const price = priceArray ? priceArray[0] : null;
            const numericPrice = parseFloat(price);
            localStorage.setItem('aselTripPrice', numericPrice);
            localStorage.setItem('aselectedFare', 0);
            let initialPrice = parseFloat(localStorage.getItem('aselTripPrice'));
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
                        localStorage.setItem('aselectedFare', this.value);
                        totalPint = (selectedPrice + selTripPrice)
                        totalP = totalPint.toFixed(2);
                        p.textContent = ("$" + totalP);
                    });
                });
                $('.confirm').on('click', function() {
                    localStorage.setItem('finalArrPrice', totalP);
                    console.log(totalP);
                    window.location.href = "addons.html";
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

    var arrDate = localStorage.getItem('arrivalDate');
    arrivalDate = document.querySelector(".departureDate");
    arrivalDate.textContent = arrDate;

    if (dropdownItemId === "pitt") {
        arrivalDate.textContent = "Philadelphia to Pittsburgh - " + arrDate;
    } else if (dropdownItemId === "ny") {
        arrivalDate.textContent = "Philadelphia to New York - " + arrDate;
    } else if (dropdownItemId === "bos") {
        arrivalDate.textContent = "Philadelphia to Boston - " + arrDate;
    }

});
