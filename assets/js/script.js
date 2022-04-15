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
let priceItem = document.getElementsByClassName('price-item')
let totalTextTVA = document.getElementById("totalTVA")
let deleteBtn = document.getElementsByClassName('delete-button')
let btnValider = document.getElementById("valider");
let totalTextHT = document.getElementById("total-HT")
let sum = 0;
let priceInt = 0;

//Calcul total price HT
for (let i = 0; i < priceItem.length; i++) {
    let price = parseInt(priceItem[i].textContent);
    sum += price;
}

//Calcul TVA
let TVA = 20;
let totalTVA = (sum/100)*TVA;
totalTextTVA.textContent = totalTVA;

//Calcul frais de port HT

//Calcul promotion
btnValider.addEventListener('click', function(event) {
  event.preventDefault();
  
  let minAmount = document.getElementById("minAmount").value;
  let reduction = document.getElementById("reduction").value;
  let freeDelivery = document.getElementById("freeDelivery").value;
  let totalHT = totalTextHT.textContent;
  
  if (minAmount > totalHT) {
    sum = (reduction*totalHT)/100;
    totalTextHT.textContent = sum;
    if (freeDelivery) {
      document.getElementById("delivery-HT").textContent = 0;
    }
  }

})

//Delete button
for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', function(event) {
      //suppression du produit
      this.parentNode.parentNode.parentNode.parentNode.remove();
      //mise à jour du prix total HT
      let priceHT = this.parentNode.parentNode.children[0].children[1].textContent;
      let splitPrice = priceHT.split(' ');
      priceInt = parseInt(splitPrice[0]);
      sum = sum - priceInt;
      totalTextHT.textContent = sum;
      //mise à jour de la TVA total
      totalTVA = (sum/100)*TVA;
      totalTextTVA.textContent = totalTVA; 
      //mise à jour du code promo
  })
  totalTextHT.textContent = sum;
}
