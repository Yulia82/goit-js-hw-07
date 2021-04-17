import images from './data/data-task-03.js'

const listEl = document.querySelector('#gallery');

listEl.classList.add('gallery');

const createImage = imageObj => {
    const liEl = document.createElement('li');
    liEl.classList.add('item');
    
    liEl.insertAdjacentHTML('beforeend',
    `<img class ="image" src="${imageObj.url}" alt="${imageObj.alt}">`);
    return liEl;
};
    

const createImagesList = (imagesArray) => {
    return imagesArray.map(createImage);
};

listEl.append(...createImagesList(images));