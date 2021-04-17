const listEl = document.querySelectorAll('#categories .item');
console.log(`В списке ${listEl.length} категории.`);

listEl.forEach(element => {
    console.log(`Категория: ${element.firstElementChild.textContent}`);

    const liEl = element.lastElementChild.querySelectorAll('li');
    console.log(`Количество элементов: ${liEl.length}`);
});