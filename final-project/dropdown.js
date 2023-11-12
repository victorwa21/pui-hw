$(document).ready(function(){
    $("#dropdownTrigger").click(function(){
        $("#myDropdown").toggle();
    });

    // Close the dropdown if the user clicks outside of it
    $(document).on("click", function(e) {
        if (!$(e.target).closest("#dropdownTrigger, #myDropdown").length) {
            $("#myDropdown").hide();
        }
    });

    $("#arrDestTrigger").click(function(){
        $("#arrDestdropdown").toggle();
    });

    // Close the dropdown if the user clicks outside of it
    $(document).on("click", function(e) {
        if (!$(e.target).closest("#arrDestTrigger, #arrDestdropdown").length) {
            $("#arrDestdropdown").hide();
        }
    });

    $('#datepickerTrigger').on('click', function() {
        $(this).datepicker({
            format: 'mm/dd/yyyy',
            autoclose: true
        }).datepicker('show');
    });
    $(document).on('click', function(event) {
        if (!$(event.target).closest('#datepickerTrigger, .datepicker').length) {
            $('.datepicker').hide();
        }
    });
});