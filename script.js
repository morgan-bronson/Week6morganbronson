'use strict'

document.getElementById('mybtn').addEventListener('click', time)
// Event Listener connects the button with the function "time()"

function time () {
  let size = parseFloat(document.getElementById('size').value)
  let toppings = parseFloat(document.getElementById('toppings').value)
  let subtotal = size + toppings
  let tax = subtotal * .13
  let total = subtotal + tax
  document.getElementById('subtotal').value = subtotal
  document.getElementById('tax').value = tax
  document.getElementById('total').value = total
}
