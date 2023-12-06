$(document).ready(function () {
    deptime1= localStorage.getItem('deptime1');
    deptime2=localStorage.getItem('deptime2');
    depadd1=localStorage.getItem('depadd1');
    depadd1city=localStorage.getItem('depadd1city');
    depadd2=localStorage.getItem('depadd2');
    depadd2city=localStorage.getItem('depadd2city');
    deptottime=localStorage.getItem('deptottime');
    finalDepPrice=localStorage.getItem('finalDepPrice');

    $(".time1").text(deptime1);
    $(".address1").text(depadd1);
    $(".address1city").text(depadd1city);
    $(".totalTime").text(deptottime);
    $(".time2").text(deptime2);
    $(".address2").text(depadd2);
    $(".address2city").text(depadd2city);
    $(".depPrice").text("$"+finalDepPrice);


    arrtime1= localStorage.getItem('arrtime1');
    arrtime2=localStorage.getItem('arrtime2');
    arradd1=localStorage.getItem('arradd1');
    arradd1city=localStorage.getItem('arradd1city');
    arradd2=localStorage.getItem('arradd2');
    arradd2city=localStorage.getItem('arradd2city');
    arrtottime=localStorage.getItem('arrtottime');
    finalArrPrice=localStorage.getItem('finalArrPrice');

    $(".rettime1").text(arrtime1);
    $(".retaddress1").text(arradd1);
    $(".retaddress1city").text(arradd1city);
    $(".rettotalTime").text(arrtottime);
    $(".rettime2").text(arrtime2);
    $(".retaddress2").text(arradd2);
    $(".retaddress2city").text(arradd2city);
    $(".retPrice").text("$"+finalArrPrice);

    document.query

    

});