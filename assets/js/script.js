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
let priceItem = document.getElementsByClassName('price-item');
let totalTextTVA = document.getElementById("totalTVA");
let deleteBtn = document.getElementsByClassName('delete-button');
let btnValider = document.getElementById("valider");
let totalTextHT = document.getElementById("sous-total-HT");
let total = document.getElementById("total-HT");
let totalTTC = document.getElementById("total-TTC");
let deliveryHT = document.getElementById("delivery-HT");
let allQuantities = document.getElementsByClassName('quantity');
let addBtn = document.getElementsByClassName('add');
let subBtn = document.getElementsByClassName('sub');
let sum = 0;
let priceInt = 0;
let quantityProducts = 0;
let priceDelivery = 0;
let totalHT = 0;
let countClick = 0;


//Calcul total price HT
for (let i = 0; i < priceItem.length; i++) {
  let price = parseInt(priceItem[i].textContent);
  sum += price;
}


//Calcul TVA
let TVA = 20;
let TT = sum += priceDelivery;
let totalTVA = (TT/100)*TVA;
totalTextTVA.textContent = totalTVA;


//Calcul frais de port HT
for (let i = 0; i < allQuantities.length; i++) {
  let valueQuantity = parseInt(allQuantities[i].value);
  quantityProducts += valueQuantity
}

if (quantityProducts <= 3) {
  priceDelivery = 20;
  deliveryHT.textContent = priceDelivery;
} else {
    priceDelivery += 20;
    deliveryHT.textContent = priceDelivery;
  } 


//Calcul promotion
btnValider.addEventListener('click', function(event) {
  event.preventDefault();
  //possibilité de rentrer qu'un code promo
  if(countClick++ < 1) {

    let minAmount = document.getElementById("minAmount").value;
    let reduction = document.getElementById("reduction").value;
    let freeDelivery = document.getElementById("freeDelivery").value;
    let sousTexteTotalHT = totalTextHT.textContent;
    let sousTotalHT = parseInt(sousTexteTotalHT)
    if (minAmount < sousTotalHT) {
      let pourcentage = (reduction*sousTotalHT)/100;
      sum = sousTotalHT - pourcentage;
      totalTextHT.textContent = sum;
      //mise à jour de la TVA total
      updateTVA() 
      //mise à hour du prix total HT 
      updateTotalHT()
      //mise à hour du prix total TTC 
      updateTotalTTC()
      if (freeDelivery) {
        deliveryHT.textContent = 0;
      }
    }
  }

})

//Delete button
for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', function(event) {
      //suppression du produit
      this.parentNode.parentNode.parentNode.parentNode.remove();
      //mise à jour du sous prix total HT
      let priceHT = this.parentNode.parentNode.children[0].children[1].textContent;
      let splitPrice = priceHT.split(' ');
      priceInt = parseInt(splitPrice[0]);
      sum = sum - priceInt;
      totalTextHT.textContent = sum;
      //mise à jour de la TVA total
      updateTVA() 
      //mise à hour du prix total HT 
      updateTotalHT()
      //mise à hour du prix total TTC 
      updateTotalTTC()
      //mise à jour du code promo
  });
  totalTextHT.textContent = sum;
}

// Total HT
let contentHT = totalTextHT.textContent;
let convertPrice = parseInt(contentHT);
totalHT = priceDelivery + convertPrice;
total.textContent = totalHT;

// Total TTC
let calculTotal = totalHT + totalTVA;
totalTTC.textContent = calculTotal;


//Gestion quantité
//Ajout d'une quantité
for (let i = 0; i < addBtn.length; i++) {
  addBtn[i].addEventListener('click', function(event) {
    quantityProducts += 1;
    //mise à jour du prix sous total HT
    let priceHT = this.parentNode.parentNode.children[0].children[1].textContent;
    let splitPrice = priceHT.split(' ');
    priceInt = parseInt(splitPrice[0]);
    sum = sum + priceInt;
    totalTextHT.textContent = sum;
    //mise à jour de la TVA total
    updateTVA()
    //mise à hour du prix total HT 
    updateTotalHT()
    //mise à hour du prix total TTC 
    updateTotalTTC()
    //mise à jour des frais de port
  })
}

//Suppression d'une quantité
for (let i = 0; i < subBtn.length; i++) {
  subBtn[i].addEventListener('click', function(event) {
    //C'est pour le total HT
    quantityProducts -= 1;
    //mise à jour du prix sous total HT
    let priceHT = this.parentNode.parentNode.children[0].children[1].textContent;
    let splitPrice = priceHT.split(' ');
    priceInt = parseInt(splitPrice[0]);
    sum = sum - priceInt;
    totalTextHT.textContent = sum;
    //mise à jour de la TVA total
    updateTVA() 
    //mise à hour du prix total HT 
    updateTotalHT()
    //mise à hour du prix total TTC 
    updateTotalTTC()
    //récupération de la quantité de ce produit
    let productQuantity = event.target.parentNode.children[1].value;
  })
}
//fonctions
function updateTVA() {
  totalTVA = (sum/100)*TVA;
  totalTextTVA.textContent = totalTVA;
} 
function updateTotalHT() {
  totalHT = priceDelivery + sum;
  total.textContent = totalHT;
}
function updateTotalTTC() {
  calculTotal = totalHT + totalTVA;
  totalTTC.textContent = calculTotal;
}
