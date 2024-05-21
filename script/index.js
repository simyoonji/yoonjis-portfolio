// header scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if(window.scrollY <= 100) {
        header.classList.remove('scroll');
    } else {
        header.classList.add('scroll');
    }
});

// Intersection Observer를 이용한 스크롤 애니메이션

// 메인 섹션
const mainImg = document.querySelector('.main-img');
const mainTitle = document.querySelector('.main-title');
const mainP = document.querySelector('.main-p');

let observerMain = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target === mainImg) {
                entry.target.style.opacity = 1;

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
            if (entry.target === mainImg) {
                entry.target.style.opacity = 0;

                mainTitle.style.opacity = 0;
                mainTitle.style.transform = 'translateY(20%)';

                mainP.style.opacity = 0;
                mainP.style.transform = 'translateY(20%)';

            } else {
                entry.target.style.opacity = 0;
            }
        }
    });
});

observerMain.observe(mainImg);
observerMain.observe(mainTitle);
observerMain.observe(mainP);

// 스킬 섹션
const skills = document.querySelector('.skills');
const skillsTitle = skills.querySelector('h2');
const skillsGraphs = skills.querySelectorAll('.skills-graph'); 
const skillsToolTitle = skills.querySelector('h3');
const skillsTool = skills.querySelector('.skills-tool-contents');

let observerSkill = new IntersectionObserver((event) => {
    event.forEach((item) => {
        if(item.isIntersecting) {
            if(item.target === skillsTitle) {
                item.target.style.opacity = 1;
                item.target.style.transform = 'translateY(0%)';
            }else {
                item.target.style.opacity = 0;
                item.target.style.transform = 'translateY(-20%)';
            }
        }
    })
});

observerSkill.observe(skillsTitle);