import './css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import {ExchangeService} from './exchange-service.js';

function convertCurrency(response, currencyFromName) {
  if (response.result === "success") {
    let inputArray = $("#currency").val().split(', ');
    let currencyCode = inputArray[0];
    if (response.conversion_rates[currencyCode]) {
      let currencyName =  inputArray[1];
      let currencyInput = $("#dollars").val();
      let convertDollars = currencyInput * response.conversion_rates[currencyCode];
      $("#output").text(`${currencyInput} ${currencyFromName} is equivalent to ${convertDollars} ${currencyName}`);
    } else {
      $("#output").text("Please select a valid currency");
    }
  } else {
    $("#output").text(`An error occured: ${response.message}`);
  }
} 

$(document).ready(function() {
  $('#submit').click(function() {
    let currencyFromArray = $('#currencyFrom').val().split(', ');
    let currencyFromCode = currencyFromArray[0];
    let currencyFromName = currencyFromArray[1];
    ExchangeService.getExRate(currencyFromCode)
      .then(function(response) {
        convertCurrency(response, currencyFromName);
      });
  });

  $('#currencyFrom').change(function() {
    let currencyFromArray = $('#currencyFrom').val().split(', ');
    let currencyFromFlagCode = currencyFromArray[2];
    let flagSrc = `<img src='https://flagcdn.com/16x12/${currencyFromFlagCode}.png' srcset='https://flagcdn.com/32x24/${currencyFromFlagCode}.png 2x, https://flagcdn.com/48x36/${currencyFromFlagCode}.png 3x' width='16' height='12'>`
    $('#flag1').html(flagSrc);
  });

  $('#currency').change(function() {
    let currencyArray = $('#currency').val().split(', ');
    let currencyFlagCode = currencyArray[2];
    let flagSrc2 = `<img src='https://flagcdn.com/16x12/${currencyFlagCode}.png' srcset='https://flagcdn.com/32x24/${currencyFlagCode}.png 2x, https://flagcdn.com/48x36/${currencyFlagCode}.png 3x' width='16' height='12'>`
    $('#flag2').html(flagSrc2);
  });
});