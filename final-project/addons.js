$(document).ready(function () {
    localStorage.setItem('bicycle', 0);
    localStorage.setItem('pet', 0);
    $(".dropdown-item").on("click", function () {
        // Get the value associated with the clicked item
        var selectedValue = $(this).data("value");

        // Save the selected value to local storage
       
        
        // Update the text of the dropdown button
        var dropdownButton = $(this).closest(".dropdown").find(".dropdown-toggle");
        dropdownButton.text(selectedValue);
        
        if(dropdownButton.attr("id")==='bicyclesDropdown')
            localStorage.setItem('bicycle', selectedValue * 40);
        else if(dropdownButton.attr("id")==='petsDropdown')
            localStorage.setItem('pet', selectedValue * 78);

            d =  localStorage.getItem('pet');
            console.log(d);
    });
    $('.aoconfirm').on('click', function()  {
        
        window.location.href = "tripSummary.html";
    });
});
