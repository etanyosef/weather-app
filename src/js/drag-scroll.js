export const pointerScroll = (elem) => {
    const dragStart = (ev) => elem.setPointerCapture(ev.pointerId);
    const dragEnd = (ev) => elem.releasePointerCapture(ev.pointerId);
    const drag = (ev) => elem.hasPointerCapture(ev.pointerId) && (elem.scrollLeft -= ev.movementX);

    elem.addEventListener('pointerdown', dragStart);
    elem.addEventListener('pointerup', dragEnd);
    elem.addEventListener('pointermove', drag);
}

// TODO: replace drag with carousel: https://codepen.io/tutsplus/pen/MWZwrGJ
const carousel = document.querySelector('.carousel-container');