//fonctions
export function updateTVA(sum, totalTextTVA, TVA) {
    let totalTVA = (sum/100)*TVA;
    totalTextTVA.textContent = totalTVA;
} 
export function updateTotalHT(priceDelivery, sum, total) {
    let totalHT = priceDelivery + sum;
    total.textContent = totalHT;
}
export function updateTotalTTC(totalTextHT, totalTextTVA, totalTTC) {
    let totalHT = parseInt(totalTextHT.textContent)
    let totalTVA = parseInt(totalTextTVA.textContent)
    let calculTotal = totalHT + totalTVA;
    totalTTC.textContent = calculTotal;
}
export function updatePriceDelivery(allQuantities, priceDelivery, SHIPPING_PRICE, deliveryHT) {
    let totalValue = 0;
    for (let i = 0; i < allQuantities.length; i++) {
    let valueQuantity = parseInt(allQuantities[i].value);
    totalValue += valueQuantity
    }
    const shipping = totalValue / 3;
    priceDelivery = Math.ceil(shipping) * SHIPPING_PRICE;
    deliveryHT.textContent = priceDelivery;
}
