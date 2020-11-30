import './css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import {ExchangeService} from './exchange-service.js';

function convertCurrency(response) {
  if (response.result === "success") {
    let newCurrency = $("#currency").val();
    let usdInput = $("#dollars").val();
    let convertDollars = usdInput * response.conversion_rates[newCurrency};
    console.log(convertDollars)
    $("#output").text(convertDollars);
  } else {
    $("#output").text(`An error occured: ${response.message}`);
  }
} 

$(document).ready(function() {
  $('#submit').click(function() {
    ExchangeService.getExRate()
      .then(function(response) {
        console.log(response);
        convertCurrency(response);
      });
  });
});
