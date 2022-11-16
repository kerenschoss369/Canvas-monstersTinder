'use strict';
var gSwipeCount = 0;

function onInit() {
    doSwipe();
}

function doSwipe() {
    var elContainer = document.querySelector('.swipe-container');
    var mc = new Hammer(elContainer);
    mc.on('panright panleft', (ev) => {
        const direction = ev.additionalEvent === 'panright' ? 'right' : 'left'
        const elImgs = elContainer.querySelectorAll('img')
        const elCurrImg = elImgs[elImgs.length - gSwipeCount - 1]

        if (direction === 'right') elCurrImg.classList.add('animate__fadeOutRight')
        else elCurrImg.classList.add('animate__fadeOutLeft');

        gSwipeCount++;
    });
}