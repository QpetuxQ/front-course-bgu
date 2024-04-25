// Div внутри корзины, в который мы добавляем товары
const cartWrapper = document.querySelector(".cart-wrapper");

// Отслеживаем клик на экране
window.addEventListener("click", function (event) {
    // Проверяем, что клик был совершён по кнопке "+ в корзину"
    if (event.target.hasAttribute("data-cart")) {
        // Находим карточку с товаром, внутри которой был совершён клик
        const card = event.target.closest(".card");

        // Собираем данные с этого товара и записываем их в единый объект productInfo
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector(".product-img").getAttribute("src"),
            title: card.querySelector(".item-title").innerText,
            itemsInBox: card.querySelector("[data-items-in-box]").innerText,
            weight: card.querySelector(".price__weight").innerText,
            currency: card.querySelector(".price__currency").innerText,
            counter: card.querySelector("[data-counter]").innerText,
        };

        // Проверка, есть ли такой товар в корзине или нет.
        const itemInCart = cartWrapper.querySelector(
            `[data-id="${productInfo.id}"]`
        );

        // Если товар есть в корзине
        if (itemInCart) {
            const counterEl = itemInCart.querySelector("[data-counter]");
            counterEl.innerText =
                parseInt(counterEl.innerText) + parseInt(productInfo.counter);
        } else {
            //Если товара нет в корзине

            // Собранные данные подставим в шаблон для товара в корзине
            const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
        <div class="cart-item__top">
            <div class="cart-item__img">
                <img src="${productInfo.imgSrc}" alt="${productInfo.imgSrc}">
            </div>
            <div class="cart-item__desc">
                <div class="cart-item__title">${productInfo.title}</div>
                <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

                
                <div class="cart-item__details">

                    <div class="items items--small counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter="">${productInfo.counter}</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>

                    <div class="price">
                        <div class="price__currency">${productInfo.currency}</div>
                    </div>

                </div>
                

            </div>
        </div>
    </div>`;

            // Отобразим товар в корзине
            cartWrapper.insertAdjacentHTML("afterbegin", cartItemHTML);
        }

        // Сбрасываем счетчик на единицу
        card.querySelector("[data-counter]").innerText = 1;

        // Отображение статуса корзины Пустая / Полная
        toggleCartStatus();

        // Пересчет общей стоимости товаров в корзине
        calcCartPriceAndDelivery();
    }
});
