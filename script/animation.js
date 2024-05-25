// header
const headerMenuList = document.querySelectorAll('.page');
const sections = document.querySelectorAll('section');
const COLOR = 'color';

let observer = new IntersectionObserver((event) => {
  event.forEach(item => {
    if (item.isIntersecting) {
        
      headerMenuList.forEach(color => {
        color.classList.remove(COLOR);

        // link값 가져오고 #제거작업을 한것과 === 현재 보이는 section id값을 가져온다.
        if (color.getAttribute('href').substring(1) === item.target.id) {
          color.classList.add(COLOR);
        }
      });
    }
  });
});
sections.forEach(item => {
  observer.observe(item);
});


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

// card scroll animation
const profileInner = document.querySelector('.profile-inner');
const profileCard = profileInner.querySelector('.profile-card');
const FLIP = 'flip';

document.addEventListener('DOMContentLoaded', () => {
    let observerCard = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    profileCard.classList.add(FLIP);
                }, 300);
            } else {
                profileCard.classList.remove(FLIP);
            }
        });
    });
    observerCard.observe(profileInner);
});

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

// skillsTool Area
const skillsTool = document.querySelector('.skills-tool');
const skillsToolTitle = skillsTool.querySelector('h3');
const skillsToolList = skillsTool.querySelectorAll('li');
const skillsToolIcon = skillsTool.querySelector('svg');
const ROTATE = 'rotate';

let observerSkillsTool = new IntersectionObserver((event) => {
    event.forEach((item) => {
        if (item.isIntersecting) {
            if (item.target === skillsToolTitle) {
                item.target.style.opacity = 1;
                item.target.style.transform = 'translateY(0%)';

                setTimeout(() => {
                    skillsToolList.forEach((li, index) => {
                        li.style.opacity = 1;
                        li.style.transform = 'translateX(0)';
                        li.style.transition = `transform 0.5s ease ${index * 0.1}s, opacity 0.5s ease ${index * 0.1}s`;
                    });
                }, 500);

                setTimeout(() => {
                    skillsToolIcon.classList.add(ROTATE);
                }, 1000)
            }
        } else {
            if (item.target === skillsToolTitle) {
                item.target.style.opacity = 0;
                item.target.style.transform = 'translateY(20%)';

                skillsToolList.forEach((li) => {
                    li.style.opacity = 0;
                    li.style.transform = 'translateX(-20%)';
                });
                skillsToolIcon.classList.remove(ROTATE);
            }
        }
    });
});
observerSkillsTool.observe(skillsToolTitle);

// contact area
const contact = document.querySelector('.contact');
const contactLf = contact.querySelector('.contact-lf');
const contactRt = contact.querySelector('.contact-rt');

let observerContact = new IntersectionObserver((event) => {
    event.forEach((item) => {
        if (item.isIntersecting) {
            if (item.target === contactLf) {
                item.target.style.opacity = 1;
                item.target.style.transform = 'rotate(0deg)';
                
                contactRt.style.opacity = 1;
                contactRt.style.transform = 'rotate(0deg)';

            } else if (item.target === contactRt) {
                item.target.style.opacity = 1;
                item.target.style.transform = 'rotate(0deg)';

                contactLf.style.opacity = 1;
                contactLf.style.transform = 'rotate(0deg)';
            }
        } else {
            if (item.target === contactLf) {
                item.target.style.opacity = 0;
                item.target.style.transform = 'rotate(90deg)';
                
                contactRt.style.opacity = 0;
                contactRt.style.transform = 'rotate(-90deg)';
            } else if (item.target === contactRt) {
                item.target.style.opacity = 0;
                item.target.style.transform = 'rotate(-90deg)';
                
                contactLf.style.opacity = 0;
                contactLf.style.transform = 'rotate(90deg)';
            }
        }
    });
});

observerContact.observe(contactLf);
observerContact.observe(contactRt);
