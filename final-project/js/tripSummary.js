$(document).ready(function () {
    // Departure details
    deptime1 = localStorage.getItem('deptime1');
    deptime2 = localStorage.getItem('deptime2');
    depadd1 = localStorage.getItem('depadd1');
    depadd1city = localStorage.getItem('depadd1city');
    depadd2 = localStorage.getItem('depadd2');
    depadd2city = localStorage.getItem('depadd2city');
    deptottime = localStorage.getItem('deptottime');
    finalDepPrice = localStorage.getItem('finalDepPrice');

    $(".time1").text(deptime1);
    $(".address1").text(depadd1);
    $(".address1city").text(depadd1city);
    $(".totalTime").text(deptottime);
    $(".time2").text(deptime2);
    $(".address2").text(depadd2);
    $(".address2city").text(depadd2city);
    $(".depPrice").text("$" + finalDepPrice);

    // Return details
    arrtime1 = localStorage.getItem('arrtime1');
    arrtime2 = localStorage.getItem('arrtime2');
    arradd1 = localStorage.getItem('arradd1');
    arradd1city = localStorage.getItem('arradd1city');
    arradd2 = localStorage.getItem('arradd2');
    arradd2city = localStorage.getItem('arradd2city');
    arrtottime = localStorage.getItem('arrtottime');
    finalArrPrice = localStorage.getItem('finalArrPrice');

    $(".rettime1").text(arrtime1);
    $(".retaddress1").text(arradd1);
    $(".retaddress1city").text(arradd1city);
    $(".rettotalTime").text(arrtottime);
    $(".rettime2").text(arrtime2);
    $(".retaddress2").text(arradd2);
    $(".retaddress2city").text(arradd2city);
    $(".retPrice").text("$" + finalArrPrice);

    // Add-ons
    const addon = parseInt(localStorage.getItem('addon'), 10);
    if (addon == 0) {
        $('.addonItems').text('No add-ons');
        $('.addonPrice').text('$0.00');
    } else if (addon == 40) {
        $('.addonItems').text('1 Bicycle');
        $('.addonPrice').text('$40.00');
    } else if (addon == 78) {
        $('.addonItems').text('1 Pet');
        $('.addonPrice').text('$78.00');
    } else if (addon == 118) {
        $('.addonItems').text('1 Bicycle, 1 Pet');
        $('.addonPrice').text('$118.00');
    }

    // Calculate and display total
    const finalDepp = parseInt(localStorage.getItem('finalDepPrice'), 10);
    const finalArrp = parseInt(localStorage.getItem('finalArrPrice'), 10);
    const finalTotal = finalDepp + finalArrp + addon;
    $('#finalTotal').text('Total: $' + finalTotal.toFixed(2));
});
