/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */


/*Define Global Variables*/

let elements = document.querySelector('body');
let sections = elements.getElementsByTagName('section');
const ul = document.querySelector('#navbar__list');




/** This function cleans any active section on the page */
const cleanActiveSections = (sections) => {
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove("your-active-class")
    }
}

/**This function gets the active section taking the first section with a positive amount of pixels to the top of the viewport */
const getActiveSection = (sections) => {
    let activeSection = null;
    for (let i = 0; i < sections.length; i++) {
        let sectionTop = sections[i].getBoundingClientRect().top;
        if (sectionTop > -30) {
            activeSection = sections[i];
            break;
        }
    }
    return activeSection;
}

/** This function scrolls to section */

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    let sectionTop = section.offsetTop;
    window.scrollTo(0, sectionTop);
}

/** this function builds the navigation menu */

function buildNav() {

    for (let i = 0; i < sections.length; i++) {
        let li = document.createElement('li');
        li.innerText = `Section ${[i+1]} `;
        li.addEventListener("click", () => {
            scrollToSection(`section${[i+1]}`);
        })
        ul.appendChild(li);
    }

};


// build the nav

window.onload = () => {
    buildNav();
}


// This function listens to the scroll and ads the class "active section" to the section on top of the viewport

window.addEventListener('scroll', function(e) {
    cleanActiveSections(sections);
    const activeSection = getActiveSection(sections);
    if (activeSection) {
        activeSection.classList.add("your-active-class");
    }

});