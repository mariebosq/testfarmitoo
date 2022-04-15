import QuantityInput from './quantity.js';

// Set up quantity forms
(function(){
  let quantities = document.querySelectorAll('[data-quantity]');

  if (quantities instanceof Node) quantities = [quantities];
  if (quantities instanceof NodeList) quantities = [].slice.call(quantities);
  if (quantities instanceof Array) {
    quantities.forEach(div => (div.quantity = new QuantityInput(div, 'Down', 'Up')));
  }
})();

//Update price
//var input = document.getElementById("in").value;

//Calcul total price HT
let priceItem = document.getElementsByClassName('price-item')
let sum = 0;
for (let i = 0; i < priceItem.length; i++) {
    let price = parseInt(priceItem[i].textContent);
    sum += price;
}

//Calcul TVA
let totalPriceHT = sum;
let TVA = 20;
let totalTVA = (totalPriceHT/100)*TVA;
document.getElementById("totalTVA").textContent = totalTVA;

//Calcul frais de port HT

//Calcul promotion
let btnValider = document.getElementById("valider");

btnValider.addEventListener('click', function(event) {
  event.preventDefault();
  
  let minAmount = document.getElementById("minAmount").value;
  let reduction = document.getElementById("reduction").value;
  let freeDelivery = document.getElementById("freeDelivery").value;
  let totalHT = document.getElementById("total-HT").textContent;
  
  if (minAmount > totalHT) {
    sum = (reduction*totalHT)/100;
    document.getElementById("total-HT").textContent = sum;
    if (freeDelivery) {
      document.getElementById("delivery-HT").textContent = 0;
    }
  }


})

//Delete button
let deleteBtn = document.getElementsByClassName('delete-button')
let priceInt = 0;
for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', function(event) {
      //suppression du produit
      this.parentNode.parentNode.parentNode.parentNode.remove();
      //mise à jour du prix total HT
      let priceHT = this.parentNode.parentNode.children[0].children[1].textContent;
      let splitPrice = priceHT.split(' ');
      priceInt = parseInt(splitPrice[0]);
      sum = sum - priceInt;
      document.getElementById("total-HT").textContent = sum;
      //mise à jour de la TVA total
      totalTVA = (sum/100)*TVA;
      document.getElementById("totalTVA").textContent = totalTVA; 
      //mise à jour du code promo
  })
document.getElementById("total-HT").textContent = sum;
}
