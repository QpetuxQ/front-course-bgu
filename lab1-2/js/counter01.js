// Элементы на странице
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector("[data-counter]");

// Клик на минус (уменьшение кол-ва ролл)
btnMinus.addEventListener("click", function () {
    // Проверяем чтоб счетчик был не меньше одного
    if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
    }
});

// Клик на плюс (увелечение кол-ва ролл)
btnPlus.addEventListener("click", function () {
    counter.innerText = ++counter.innerText;
});
