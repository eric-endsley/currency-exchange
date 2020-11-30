import './css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import {ExchangeService} from './exchange-service.js';

function convertCurrency(response) {
  if (response.result === "success") {
    let newCurrency = $("#currency").val();
    let usdInput = $("#dollars").val();
    if (response.conversion_rates[newCurrency]) {
      let convertDollars = usdInput * response.conversion_rates[newCurrency];
      $("#output").text(`${usdInput} USD is equivalent to ${convertDollars} of the selected currency`);
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
