// top btn
const topBtn = document.querySelector('.top');

window.addEventListener('scroll', () => {
    const scroll = document.documentElement.scrollTop
  if (scroll > 1000) {
        topBtn.style.opacity = 1;  
  } else {
        topBtn.style.opacity = 0;  
  }
});

// 맨 위로 스크롤 함수
const scrollToTop = () => {
  document.documentElement.scrollTop = 0;
};

// 버튼 클릭 이벤트 리스너
topBtn.addEventListener('click', scrollToTop);

// skills active하면 보여준다.
const skillsContentsList = document.querySelectorAll('.skills-contents li');
const skillsExplainList = document.querySelectorAll('.skills-explain li');
const ACTIVE = 'active';

skillsContentsList.forEach(item => {
    const explainId = item.getAttribute('data-explain');
    const explanationElement = document.querySelector(`.skills-explain li:nth-child(${explainId})`);

    item.addEventListener('mouseover', () => {
        activateExplanation(explanationElement);
    });
});
activateExplanation = (explanationElement) => {
    skillsExplainList.forEach(item => {
        item.classList.remove(ACTIVE);
    });
    explanationElement.classList.add(ACTIVE);
}

// work tab menu
const workTab = document.querySelector('.work-tab');
const workListTitle = document.querySelectorAll('.work-title');
const workContents = document.querySelectorAll('.work-contents');
const BLOCK = 'block';
const FOCUS = 'focus';

workListTitle.forEach((item) => {
    item.addEventListener('click', () => {
        const content = item.nextElementSibling;
        console.log(content);

        workListTitle.forEach((focus) => {
            focus.classList.remove(FOCUS);
        });
        workContents.forEach((block) => {
            block.classList.remove(BLOCK);
        });
        item.classList.add(FOCUS);

        if (content && content.classList.contains('work-contents')) {
            content.classList.add(BLOCK);
        }
    });
});
