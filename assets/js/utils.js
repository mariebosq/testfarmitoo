import { TVA, SHIPPING_PRICE } from './const.js';

/**
 * 
 * @param { int } sum 
 * @param { dom element } totalTextTVA 
 */
export function updateTVA(sum, totalTextTVA) {
    if(!sum || isNaN(sum) || !totalTextTVA) {
        return null;
    }
    let totalTVA = (sum/100)*TVA;
    totalTextTVA.textContent = totalTVA;
}

/**
 * 
 * @param { int } priceDelivery 
 * @param { int } sum 
 * @param { dom element } total 
 */
export function updateTotalHT(priceDelivery, sum, total) {
    if(!sum || isNaN(sum) || !priceDelivery || isNaN(priceDelivery) || !total) {
        return null;
    }
    let totalHT = priceDelivery + sum;
    total.textContent = totalHT;
}

/**
 * 
 * @param { dom element } totalTextHT 
 * @param {dom element } totalTextTVA 
 * @param { dom element } totalTTC 
 */
export function updateTotalTTC(totalTextHT, totalTextTVA, totalTTC) {
    if(!totalTextHT || !totalTextTVA || !totalTTC) {
        return null;
    }
    let totalHT = parseInt(totalTextHT.textContent)
    let totalTVA = parseInt(totalTextTVA.textContent)
    let calculTotal = totalHT + totalTVA;
    totalTTC.textContent = calculTotal;
}

/**
 * 
 * @param { dom element } allQuantities 
 * @param { int } priceDelivery 
 * @param { dom element } deliveryHT 
 */
export function updatePriceDelivery(allQuantities, priceDelivery, deliveryHT) {
    if (!allQuantities || !priceDelivery || isNaN(priceDelivery) || !deliveryHT) {
        return null;
    }
    let totalValue = 0;
    for (let i = 0; i < allQuantities.length; i++) {
        let valueQuantity = parseInt(allQuantities[i].value);
        totalValue += valueQuantity
    }
    const shipping = totalValue / 3;
    priceDelivery = Math.ceil(shipping) * SHIPPING_PRICE;
    deliveryHT.textContent = priceDelivery;
}