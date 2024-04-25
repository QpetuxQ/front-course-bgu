// Подсчёт стоимости товаров и доставка

function calcCartPriceAndDelivery() {
    const cartItems = document.querySelectorAll(".cart-item");
    // Итого:
    const priceTotalEl = document.querySelector(".total-price");

    const deliveryCost = document.querySelector(".delivery-cost");
    const cartDelivery = document.querySelector("[data-cart-delivery]");

    // Общая стоимость товаров
    let totalPrice = 0;

    cartItems.forEach(function (item) {
        // Находим количество товара и стоимость
        const amountEl = item.querySelector("[data-counter]");
        const priceEl = item.querySelector(".price__currency");
        // Подсчет стоимости товара в корзине
        const currentPrice =
            parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

        totalPrice = totalPrice + currentPrice; // totalPrice += currentPrice
    });
    // Отображаем цену на странице
    priceTotalEl.innerText = totalPrice;

    // Скрываем / Показываем блок со стоимостью доставки
    if (totalPrice > 0) {
        cartDelivery.classList.remove("none");
    } else {
        cartDelivery.classList.add("none");
    }
    // Если доставка больше 600 рублей, то она бесплатна
    if (totalPrice >= 600) {
        deliveryCost.classList.add(".free");
        deliveryCost.innerText = "0р";
    } else {
        deliveryCost.classList.remove(".free");
        deliveryCost.innerText = "250р";
    }
}
