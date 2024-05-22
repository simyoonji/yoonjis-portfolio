const mouse = document.querySelector('.mouse');
const contactTxtItems = document.querySelectorAll('.contact p');
const MOUSE_CHANGE = 'mouse-change';

// 마우스 변경
window.addEventListener('mousemove', (event) => {
    mouse.style.left = `${event.clientX}px`;
    mouse.style.top = `${event.clientY}px`;
});

contactTxtItems.forEach((item) => {
    item.addEventListener('mouseover', (event) => {
        mouse.classList.add(MOUSE_CHANGE);
    });
    item.addEventListener('mouseout', (event) => {
        mouse.classList.remove(MOUSE_CHANGE);
    });
});
