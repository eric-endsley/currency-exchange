import './css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import {ExchangeService} from './exchange-service.js'

function getCurrency(response) {
  if (response.result = "success") {
    let newCurrency = $("#currency").val();
    let usdInput = $("#dollars").val();
    let convertDollars = usdInput * response.`${newCurrency}`;
    $("#output").text(convertDollars);
  } else {
    $("#output").text(`An error occured: ${response.message}`)
  }
} 


