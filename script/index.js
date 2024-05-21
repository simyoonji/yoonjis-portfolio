// header scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if(window.scrollY <= 100) {
        header.classList.remove('scroll');
    } else {
        header.classList.add('scroll');
    }
});

// main scroll
const mainImg = document.querySelector('.main-img');
const mainTitle = document.querySelector('.main-title');
const mainP = document.querySelector('.main-p');

let observer = new IntersectionObserver((event) => {
    event.forEach((item) => {
        if (item.isIntersecting) {
            if (item.target === mainImg) {
                item.target.style.opacity = 1;

                setTimeout(() => {
                    mainTitle.style.opacity = 1;
                    mainTitle.style.transform = 'translateY(0%)';
                }, 500);

                setTimeout(() => {
                    mainP.style.opacity = 1;
                    mainP.style.transform = 'translateY(0%)';
                }, 1000);

            } 

        } else {
            if (item.target === mainImg) {
                item.target.style.opacity = 0;

                mainTitle.style.opacity = 0;
                mainTitle.style.transform = 'translateY(20%)';

                mainP.style.opacity = 0;
                mainP.style.transform = 'translateY(20%)';

            } else {
                item.target.style.opacity = 0;
            }
        }
    });
});

observer.observe(mainImg);
observer.observe(mainTitle);
observer.observe(mainP);

//   skills

let observer = new IntersectionObserver(() => {
    
})