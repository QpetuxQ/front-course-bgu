// Добавляем прослушку на весь сайт

window.addEventListener("click", function (event) {
    // Объявляем переменную для счётчика
    let counter;
    //Проверяем клик строго по кнопкам Плюс или Минус
    if (
        event.target.dataset.action === "plus" ||
        event.target.dataset.action === "minus"
    ) {
        // Находим обёртку счётчика по родителю .counter-wrapper
        const counterWrapper = event.target.closest(".counter-wrapper");

        // Находим див с числом счётчика
        counter = counterWrapper.querySelector("[data-counter]");
    }

    // Проверка элемента, является ли нажатая кнопка кнопкой Плюс
    if (event.target.dataset.action === "plus") {
        counter.innerText = ++counter.innerText;
    }

    // Проверка элемента, является ли нажатая кнопка кнопкой Минус

    if (event.target.dataset.action === "minus") {
        // Проверяем чтоб счетчик был не меньше одного
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        }
        // Проверяем товар, который находится в корзине
        else if (
            event.target.closest(".cart-wrapper") &&
            parseInt(counter.innerText) === 1
        ) {
            // Удаляем товар из корзины
            event.target.closest(".cart-item").remove();

            // Отображение статуса корзины Пустая / Полная
            toggleCartStatus();

            // Пересчет общей стоимости товаров в корзине
            calcCartPriceAndDelivery();
        }
    }

    // Проверяем клик на + или - внутри корзины
    if (
        event.target.hasAttribute("data-action") &&
        event.target.closest(".cart-wrapper")
    ) {
        // Пересчет общей стоимости товаров в корзине
        calcCartPriceAndDelivery();
    }
});
