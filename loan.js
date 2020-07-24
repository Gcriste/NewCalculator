$(document).ready(function(){
    var container = $("<div>");
    container.attr("class", "container");


    //title
    var title = $("<div>");
    title.html("Title: " + "Loan Calculator")
    title.attr("class", "title");


    //payment
    var textPayment= $("<input>");
    var payment = $("<div>");
    payment.html("Payment: ");
    payment.attr("class", "payment");
    textPayment.attr("class", "payment-text");
    payment.append(textPayment)

    //rate
    var textRate = $("<input>");
    var rate = $("<div>");
    rate.html("Annual Percentage Rate: " + "")
    rate.attr("class", "rate");
    textRate.attr("class", "rate-text");
    rate.append(textRate)

    //loan
    var textLoan = $("<input>");
    var loan = $("<div>");
    loan.html("Loan: " + "")
    loan.attr("class", "loan");
    textLoan.attr("class", "loan-text");
    loan.append(textLoan)
    
    //months/years
    var monthYear = $("<div>");

    var months = $("<div>");
   
    for (i = 0; i < 1; i++) {
        var radioMonth= $('<input type="radio" name="months" />');
    }
    months.html("months");
    months.append(radioMonth)

    var years = $("<div>");
    for (i = 0; i < 1; i++) {
        var radioYear = $('<input type="radio" name="years" />');
    }
    years.html("years :")
    years.append(radioYear)

    monthYear.append(months);
    monthYear.append(years);

    //calculate
    var calculate = $("<button>");
    calculate.attr("class", "submit calculate");
    calculate.html("calculate");

    //append values to div
    container.append(title, payment, rate, loan, monthYear, calculate)
    $(".loan-calculator").append(container)

    //submit
    $(".submit").click(function(){
        
    //payment value
    var paymentInput = $(".payment-text").val().trim();
    console.log("payment: " + paymentInput);

    // rate value
    var rateInput = $(".rate-text").val().trim();
    console.log("rate: " + rateInput);

    // loan value
    var loanInput = $(".loan-text").val().trim();
    console.log("loan: " + loanInput);


    var monthInput = $(".months").val();
    console.log("Months: " + monthInput)

    var yearInput = $(".years").val();
    console.log("Years: " + yearInput)
    })



})



