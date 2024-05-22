// main  
const mainImg = document.querySelector('.main-img');
const mainTitle = document.querySelector('.main-title');
const mainP = document.querySelector('.main-p');

let observerMain = new IntersectionObserver((event) => {
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
observerMain.observe(mainImg);
observerMain.observe(mainTitle);
observerMain.observe(mainP);

// skills scroll animation
const skills = document.querySelector('.skills');
const skillsTitle = skills.querySelector('h2');
const skillsGraph = skills.querySelectorAll('.skills-graph');

let observerSkills = new IntersectionObserver((event) => {
    event.forEach((item) => {
        if (item.isIntersecting) {
            if (item.target === skills) {
               skillsTitle.style.opacity = 1;
               skillsTitle.style.transform = 'translateY(0%)';
               
                skillsGraph.forEach(span => {
                    setTimeout(() => {
                        span.style.display = 'inline-block';
                    }, 500)
                });
            }
        } else {
            if (item.target === skills) {
                skillsTitle.style.opacity = 0;
                skillsTitle.style.transform = 'translateY(20%)';
                skillsGraph.forEach(span => {
                    span.style.display = 'none';
                });
            }
        }
    });
});
observerSkills.observe(skills);
observerSkills.observe(skillsTitle);
skillsGraph.forEach(span => observerSkills.observe(span));

const skillsTool = document.querySelector('.skills-tool');
const skillsToolTitle = skillsTool.querySelector('h3');
const skillsToolList = skillsTool.querySelectorAll('li');

let observerSkillsTool = new IntersectionObserver((event) => {
    event.forEach((item) => {
        if (item.isIntersecting) {
            if (item.target === skillsToolTitle) {
                item.target.style.opacity = 1;
                item.target.style.transform = 'translateY(0%)';

                skillsToolList.forEach((li, index) => {
                    li.style.opacity = 1;
                    li.style.transform = 'translateX(0)';
                    li.style.transition = `transform 0.5s ease ${index * 0.1}s, opacity 0.5s ease ${index * 0.1}s`;
                });
            }
        } else {
            if (item.target === skillsToolTitle) {
                item.target.style.opacity = 0;
                item.target.style.transform = 'translateY(20%)';

                skillsToolList.forEach((li) => {
                    li.style.opacity = 0;
                    li.style.transform = 'translateX(-20%)';
                });
            }
        }
    });
});

observerSkillsTool.observe(skillsTool);
observerSkillsTool.observe(skillsToolTitle);
skillsToolList.forEach(li => observerSkillsTool.observe(li));


// skills active하면 보여준다.
const skillsContentsLi = document.querySelectorAll('.skills-contents li');
const skillsExplainLi = document.querySelectorAll('.skills-explain li');
const ACTIVE = 'active';

skillsContentsLi.forEach(item => {
    // data-explain값
    const explainId = item.getAttribute('data-explain');
    const explanationElement = document.querySelector(`.skills-explain li:nth-child(${explainId})`);

    item.addEventListener('mouseover', () => {
        // 설명 활성화하는 함수. 설명항목을 활성화하여 보이도록 만들어준다. 
        activateExplanation(explanationElement);
    });
    item.addEventListener('mouseout', () => {
        // 설명함수 비활성화.
        deactivateExplanation(explanationElement);
    });
});

activateExplanation = (explanationElement) => {
    skillsExplainLi.forEach(item => {
        item.classList.remove(ACTIVE);
    });
    explanationElement.classList.add(ACTIVE);
}
deactivateExplanation = (explanationElement) => {
    explanationElement.classList.remove(ACTIVE);
}
