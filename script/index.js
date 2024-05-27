// skills active하면 보여준다.
const skillsContentsLi = document.querySelectorAll('.skills-contents li');
const skillsExplainLi = document.querySelectorAll('.skills-explain li');
const ACTIVE = 'active';

skillsContentsLi.forEach(item => {
    // data-explain값
    const explainId = item.getAttribute('data-explain');
    const explanationElement = document.querySelector(`.skills-explain li:nth-child(${explainId})`);

    item.addEventListener('mouseover', () => {
        activateExplanation(explanationElement);
    });
    item.addEventListener('mouseout', () => {
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
