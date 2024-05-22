const contact = document.querySelector('.contact');
const contactLf = contact.querySelector('.contact-lf');
const contactRt = contact.querySelector('.contact-rt');

let observerContact = new IntersectionObserver((event) => {
    event.forEach((item) => {
        if (item.isIntersecting) {
            if(item.target === contactLf){
                item.target.style.opacity = 1;
                item.target.style.transform = 'rotate(0deg)';

                contactRt.style.opacity = 1;
                contactRt.style.transform = 'rotate(0deg)';
            }else {
                if(item.target === contactLf) {
                    item.target.style.opacity = 0;
                    item.target.style.transform = 'rotate(90deg)';
                     contactRt.style.opacity = 1;
                    contactRt.style.transform = 'rotate(-90deg)';
                } 
            }
        }
    })
});

observerContact.observe(contact);
observerContact.observe(contactLf);
observerContact.observe(contactRt)