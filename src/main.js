import './css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import {ExchangeService} from './exchange-service.js';

function convertCurrency(response) {
  if (response.result === "success") {
    let inputArray = $("#currency").val().split(', ');
    console.log(inputArray)
    let currencyCode = inputArray[0];
    if (response.conversion_rates[currencyCode]) {
      let currencyName =  inputArray[1];
      let usdInput = $("#dollars").val();
      let convertDollars = usdInput * response.conversion_rates[currencyCode];
      $("#output").text(`${usdInput} USD is equivalent to ${convertDollars} in ${currencyName}`);
    } else {
      $("#output").text("Please select a valid currency");
    }
  } else {
    $("#output").text(`An error occured: ${response.message}`);
  }
} 

$(document).ready(function() {
  $('#submit').click(function() {
    ExchangeService.getExRate()
      .then(function(response) {
        convertCurrency(response);
      });
  });
});
