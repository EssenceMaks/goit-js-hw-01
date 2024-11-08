function getShippingMessage(country, price, deliveryFee) {
    return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
}

// Виклик в консоль
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

// Виклик на сторінку
document.addEventListener('DOMContentLoaded', () => {
    const result2 = document.getElementById('result2');
    result2.innerHTML = `
        <p>${getShippingMessage("Australia", 120, 50)}</p>
        <p>${getShippingMessage("Germany", 80, 20)}</p>
        <p>${getShippingMessage("Sweden", 100, 20)}</p>
    `;
});
