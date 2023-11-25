$(document).ready(function(){
    
    var trips = {
    
            pitt: [
                { id: 1, startTime: "8:00 AM", arriveTime: "2:59 PM", depLoc: "1100 Liberty Ave", depCity: "PIT", estTime: "6 hr 59 min",
                  arrLoc:"30th St. Station - 2955 Market St", arrCity: "PHL", price: "$46.00"},
                  { id: 2, startTime: "8:00 AM", arriveTime: "2:59 PM", depLoc: "1100 Liberty Ave", depCity: "PIT", estTime: "6 hr 59 min",
                  arrLoc:"30th St. Station - 2955 Market St", arrCity: "PHL", price: "$46.00"},
                //{ id: 3, name: "Object3", value: "Value3" }
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
                        createTrip(tripOptions[i]);
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
        // Check if the clicked element is a button with class "select"
        if (event.target.classList.contains("select")) {
            // Get the parent container of the button
            let templateContainer = event.target.closest("#eachTrip");

                
                templateContainer.classList.toggle("fares");
            
        }
    });
    document.addEventListener("click", function (event) {
        // Check if the clicked element is not part of the templateContainer
        let hasFaresClass = event.target.closest(".fares");

        // If the clicked element or its ancestors do not have the "fares" class
        if (!hasFaresClass) {
            // Remove the class from all elements with the "fares" class
            let templateContainers = document.querySelectorAll(".fares");
            templateContainers.forEach(function (templateContainer) {
                templateContainer.classList.remove("fares");
            });
        }
    });




});


