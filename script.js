'use strict'

document.getElementById('mybtn').addEventListener('click', time)
// Event Listener connects the button with the function "time()"

function time () {
  // Create our number formatter.
  // Code from https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
  var formatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  });
  let size = parseFloat(document.getElementById('size').value)
  let toppings = parseFloat(document.getElementById('toppings').value)
  let subtotal = size + toppings
  let tax = subtotal * .13
  let total = subtotal + tax
  console.log(formatter.format(total))
  document.getElementById('subtotal').value = formatter.format(subtotal);   
  document.getElementById('tax').value = tax = formatter.format(tax);
  document.getElementById('total').value = total = formatter.format(total);
}
