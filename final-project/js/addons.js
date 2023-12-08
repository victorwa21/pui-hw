$(document).ready(function () {
    
    localStorage.setItem('addonBicycles', 0);
    localStorage.setItem('addonPets', 0);

    $(".dropdown-item").on("click", function () {
        
        var selectedValue = $(this).data("value");

        var dropdownButton = $(this).closest(".dropdown").find(".dropdown-toggle");
        dropdownButton.text(selectedValue);

        if (dropdownButton.attr("id") === 'bicyclesDropdown') {
            localStorage.setItem('addonBicycles', selectedValue * 40);
        } else if (dropdownButton.attr("id") === 'petsDropdown') {
            localStorage.setItem('addonPets', selectedValue * 78);
        }
        
    });

    $('.aoconfirm').on('click', function()  {
        var addonBicycles = parseInt(localStorage.getItem('addonBicycles'), 10) || 0;
        var addonPets = parseInt(localStorage.getItem('addonPets'), 10) || 0;
        localStorage.setItem('addon', addonBicycles + addonPets);
        console.log(localStorage.getItem('addon'));
        window.location.href = "tripSummary.html";
    });
});

