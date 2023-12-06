$(document).ready(function(){
    
    var trips = {
    
            pitt: [
                { id: 1, startTime: "8:00 AM", arriveTime: "2:59 PM", depLoc: "1100 Liberty Ave", depCity: "PIT", estTime: "6 hr 59 min",
                  arrLoc:"30th St. Station - 2955 Market St", arrCity: "PHL", price: "$46.00"},
                  { id: 2, startTime: "8:00 AM", arriveTime: "2:59 PM", depLoc: "1100 Liberty Ave", depCity: "PIT", estTime: "6 hr 59 min",
                  arrLoc:"30th St. Station - 2955 Market St", arrCity: "PHL", price: "$50.00"},
                
                  
                  {
                    id: 3,
                    startTime: "12:15 PM",
                    arriveTime: "6:45 PM",
                    depLoc: "1100 Liberty Ave",
                    depCity: "PIT",
                    estTime: "6 hr 30 min",
                    arrLoc: "30th St. Station - 2955 Market St",
                    arrCity: "PHL",
                    price: "$40.25"
                  },
                  
                    {
                    id: 4,
                    startTime: "9:45 AM",
                    arriveTime: "4:15 PM",
                    depLoc: "1100 Liberty Ave",
                    depCity: "PIT",
                    estTime: "6 hr 30 min",
                    arrLoc: "30th St. Station - 2955 Market St",
                    arrCity: "PHL",
                    price: "$60.75"
                  },
                  
                
                  {
                    id: 5,
                    startTime: "11:00 AM",
                    arriveTime: "5:30 PM",
                    depLoc: "1100 Liberty Ave",
                    depCity: "PIT",
                    estTime: "6 hr 30 min",
                    arrLoc: "30th St. Station - 2955 Market St",
                    arrCity: "PHL",
                    price: "$48.90"
                  },
                  {
                    id: 6,
                    startTime: "1:20 PM",
                    arriveTime: "8:10 PM",
                    depLoc: "1100 Liberty Ave",
                    depCity: "PIT",
                    estTime: "6 hr 50 min",
                    arrLoc: "30th St. Station - 2955 Market St",
                    arrCity: "PHL",
                    price: "$42.80"
                  }
               
            ],
            ny: [
                { id: 4, name: "Object4", value: "Value4" },
                { id: 5, name: "Object5", value: "Value5" },
                { id: 6, name: "Object6", value: "Value6" }
            ],
            bos: [
                { id: 7, name: "Object7", value: "Value7" },
                { id: 8, name: "Object8", value: "Value8" },
                { id: 9, name: "Object9", value: "Value9" }
            ]
        };

        

    dropdownItemId = localStorage.getItem("selectedDropdownItemId");
    console.log("Search button clicked with ID:", dropdownItemId);
        for (var key in trips) {
            if (trips.hasOwnProperty(key)) {
                if (dropdownItemId === key) {
                    var tripOptions = trips[key];
                    for (var i = 0; i < tripOptions.length; i++) {
                        createTrip(tripOptions[i])
                        
                }
            }
        }
    }
    
    
    


    function createTrip(trip){
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
        depTrips.forEach(function (depTrip) {
            depTrip.appendChild(clone);
        }); 
       

                           
                        
                        
                            
                        
                       
                      
    }
    
    document.querySelector(".depTrips").addEventListener("click", function (event) {
        let totalPint;
        let totalP;
        // Check if the clicked element is a button with class "select"
        if (event.target.classList.contains("select")) {
            

            // Get the parent container of the button
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
                
                localStorage.setItem('deptime1',time1.textContent);
                console.log(localStorage.getItem('deptime1'));
                localStorage.setItem('deptime2', time2.textContent);
                localStorage.setItem('depadd1', address1.textContent);
                localStorage.setItem('depadd1city', address1city.textContent);
                localStorage.setItem('depadd2', address2.textContent);
                localStorage.setItem('depadd2city', address2city.textContent);
                localStorage.setItem('deptottime', totalTime.textContent);
            
                let p = templateContainer.querySelector(".depPrice");
                const depPriceText = p.textContent;

                // Use a regular expression to extract the numeric part
                const priceArray = depPriceText.match(/\d+\.\d+/);

                // If a match is found, get the first element from the array (the whole match)
                const price = priceArray ? priceArray[0] : null;

                // Convert the extracted string to a number
                const numericPrice = parseFloat(price);
                localStorage.setItem('selTripPrice', numericPrice);
                localStorage.setItem('selectedFare', 0);
                


                
                let initialPrice = parseFloat(localStorage.getItem('selTripPrice'));
                totalP = initialPrice.toFixed(2);



           

                if (templateContainer.classList.contains("fares")) {
                    

                    const fareOptions = [
                        { value: 'Coach', label: 'Coach +$0.00', price: 0},
                        { value: 'Business', label: 'Business +$75.00', price: 75 },
                        { value: 'PrivateRoom', label: 'Private Room +$250.00', price: 250 }
                    ];
            
                    // Get the fare-options container
                    const uniqueName = 'fareClass_' + Date.now();

                    // Clear existing content within the current templateContainer
                    $(templateContainer).find('.fareOptions').empty();
                
                    // Loop through the fare options and create radio buttons
                    fareOptions.forEach(function (option) {
                        // Create unique IDs for radio buttons within each template
                        const radioButtonId = uniqueName + '_' + option.value.toLowerCase();
                
                        // Create radio button element
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
                        // Create label element
                        const label = $('<label>', {
                            for: radioButtonId,
                            html: option.label
                        });
                
                        // Append radio button and label to the container within the current templateContainer
                        $(templateContainer).find('.fareOptions').append(radioButton);
                        $(templateContainer).find('.fareOptions').append(label);
                        $(templateContainer).find('.fareOptions').append('<br>'); // Add line break for better spacing
                        
                        radioButton.on('click', function () {
                            

                               
                            
                           
                            const selectedPrice = parseFloat(this.getAttribute('price'));
                            const selTripPrice = parseFloat(localStorage.getItem('selTripPrice'));
                            localStorage.setItem('selectedFare', this.value);

                            // Assuming .depPrice is a class applied to an element that displays the price
                            totalPint=(selectedPrice + selTripPrice)
                            totalP = totalPint.toFixed(2);
                           p.textContent= ("$" + totalP);
                            
                        });
                    });
                    $('.confirm').on('click', function()  {
                        localStorage.setItem('finalDepPrice', totalP);
                        console.log(totalP);
                        window.location.href = "bookarr.html";
                    }

                    )}

                }});

   

    document.addEventListener("click", function (event) {
        // Check if the clicked element is not part of the templateContainer
        let hasFaresClass = event.target.closest(".fares");
        


        // If the clicked element or its ancestors do not have the "fares" class
        if (!hasFaresClass) {

            // Remove the class from all elements with the "fares" class
            let templateContainer = document.querySelector(".fares");
                let p = templateContainer.querySelector(".depPrice");
                const selTripPrice = parseFloat(localStorage.getItem('selTripPrice'));
                p.textContent= ("$" + selTripPrice.toFixed(2));
                templateContainer.classList.remove("fares");
                $('.select').show();
           
        }
    });

    

    var depDate = localStorage.getItem('departureDate');
    departureDate = document.querySelector(".departureDate");
    departureDate.textContent = depDate;
   
    if (dropdownItemId === "pitt"){
        departureDate.textContent = "Pittsburgh to Philadelphia - "+ depDate;
    }


    else if(dropdownItemId === "ny"){
        departureDate.textContent = "New York to Philadelphia - "+ depDate;
    }

    else if(dropdownItemId === "bos"){
        departureDate.textContent = "Boston to Philadelphia - " + depDate;
    }


});


