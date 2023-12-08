
$(document).ready(function () {
    
    localStorage.setItem('addonBicycles', 0);
    localStorage.setItem('addonPets', 0);

    $(".dropdown-item").on("click", function () {
        // Get the value associated with the clicked item
        var selectedValue = $(this).data("value");

        // Update the text of the dropdown button
        var dropdownButton = $(this).closest(".dropdown").find(".dropdown-toggle");
        dropdownButton.text(selectedValue);

        // Update localStorage based on the dropdown
        if (dropdownButton.attr("id") === 'bicyclesDropdown') {
            localStorage.setItem('addonBicycles', selectedValue * 40);
        } else if (dropdownButton.attr("id") === 'petsDropdown') {
            localStorage.setItem('addonPets', selectedValue * 78);
        }

        // Calculate the sum of both addons and update localStorage
       
        
    });

    $('.aoconfirm').on('click', function()  {
        var addonBicycles = parseInt(localStorage.getItem('addonBicycles'), 10) || 0;
        var addonPets = parseInt(localStorage.getItem('addonPets'), 10) || 0;
        localStorage.setItem('addon', addonBicycles + addonPets);
        console.log(localStorage.getItem('addon'));
        window.location.href = "tripSummary.html";
    });
});
