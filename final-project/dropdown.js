var dropdownItemId;
$(document).ready(function(){
    
    var arrDestText = document.getElementById("arrdropdownTrigger");

    var depDestText = document.getElementById("dropdownTrigger");

    // Event listener for Bootstrap dropdown show event
    $("#dropdownTrigger").on("show.bs.dropdown", function () {
        console.log("Dropdown is about to be shown");
    });

    // Event listener for Bootstrap dropdown hide event
    $("#dropdownTrigger").on("hide.bs.dropdown", function () {
        console.log("Dropdown is about to be hidden");
    });

    // Event listener for Bootstrap dropdown item click
    $(".dropdown-item").on("click", function() {
        // Update the text based on the clicked item
        dropdownItemId = $(this).attr("id");
        console.log(dropdownItemId); 
        if (dropdownItemId === "pitt") {
            depDestText.innerHTML = "Pittsburgh, PA - Union Station (PGH)";
        } else if ( dropdownItemId === "ny") {
            depDestText.innerHTML = "New York, NY - Moynihan Train Hall (NYP)";
        } else if ( dropdownItemId=== "bos") {
            depDestText.innerHTML = "Boston, MA - Back Bay Station (BBY)";
        } else {
            depDestText.innerHTML = "From:  enter an address or city";
        }
        
    });

    $("#arrdropdownTrigger").on("show.bs.dropdown", function () {
        console.log("Dropdown is about to be shown");
    });

    // Event listener for Bootstrap dropdown hide event
    $("#arrdropdownTrigger").on("hide.bs.dropdown", function () {
        console.log("Dropdown is about to be hidden");
    });

    // Event listener for Bootstrap dropdown item click
    $(".arrdropdown-item").on("click", function() {
        // Update the text based on the clicked item
        if (this.id === "phl") {
            arrDestText.innerHTML = "Philadelphia, PA - 30th St. Sta. (PHL)";
        } else {
            arrDestText.innerHTML = "From:  enter an address or city";
        }
    });

      

 // Function to initialize the first date picker
function initDatePicker() {
    $('#datepickerTrigger').datepicker({
        format: 'mm/dd/yyyy',
        autoclose: true,
        startDate: 'today',
        endDate: '+1w',
    }).on('changeDate', function (selected) {
        localStorage.setItem('departureDate', moment(selected.date).format('dddd, MMMM D'));
        // Update the start date of the second date picker when the first date picker's date changes
        $('#arrdatepickerTrigger').datepicker('setStartDate', selected.date);
        var endDateForSecondPicker = new Date();
        endDateForSecondPicker.setDate(endDateForSecondPicker.getDate() + 7);
        $('#arrdatepickerTrigger').datepicker('setEndDate', endDateForSecondPicker);
    });
}

// Function to initialize the second date picker
function initArrDatePicker() {
    $('#arrdatepickerTrigger').datepicker({
        format: 'mm/dd/yyyy',
        autoclose: true,
        startDate: 'today',
        endDate: '+1w'
    }).on('changeDate', function (selected) {
        localStorage.setItem('arrivalDate', moment(selected.date).format('dddd, MMMM D'));
        // Calculate the end date for the first date picker based on the selected date
        var endDateForFirstPicker = new Date(selected.date);
        endDateForFirstPicker.setDate(endDateForFirstPicker.getDate()); // Add one day
        // Update the end date of the first date picker
        $('#datepickerTrigger').datepicker('setEndDate', endDateForFirstPicker);
        $('#datepickerTrigger').datepicker('setStartDate', 'today');
    });

}

// Initialize date pickers on button clicks
$('#datepickerBtn').on('click', function () {
    initDatePicker();
    $('#datepickerTrigger').datepicker('show');
});

$('#arrdatepickerBtn').on('click', function () {
    initArrDatePicker();
    $('#arrdatepickerTrigger').datepicker('show').on('changeDate', function (selected) {
        // Additional logic for the second date picker's change date event if needed
    });
});

// Hide the datepickers when clicking outside of them
$(document).on('click', function (event) {
    if (!$(event.target).closest('#datepickerBtn, #arrdatepickerBtn, .datepicker').length) {
        $('.datepicker').hide();
    }
});

// Handle the date change event for the first datepicker
$('#datepickerTrigger').on('changeDate', function (selected) {
    console.log(selected.date);
    var formattedDate = moment(selected.date).format('dddd, MMMM D');
    $('#datepickerTrigger .btn').text(formattedDate);
    $('.datepicker').hide();
});

// Handle the date change event for the second datepicker
$('#arrdatepickerTrigger').on('changeDate', function (selected) {
    console.log(selected.date);
    var formattedDate = moment(selected.date).format('dddd, MMMM D');
    $('#arrdatepickerTrigger .btn').text(formattedDate);
    $('.datepicker').hide();
});

$(".search").on("click", function() {
    // Trigger an event to signal that the search button was clicked and pass the dropdownItemId
    event.preventDefault();
    localStorage.setItem("selectedDropdownItemId", dropdownItemId);
    window.location.href = "bookdep.html";
    
});


   
});