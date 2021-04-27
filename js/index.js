(()=>{
    const currentList = document.querySelectorAll('.current-list');
    const sideListbar = document.querySelectorAll('.nav-flex-box');
    const currentSection = document.querySelectorAll('.current-section');
    const sectionName = document.querySelectorAll('.section-name');
    const section0 = document.querySelector('.section-0');
    const section1 = document.querySelector('.section-1');
    const section2 = document.querySelector('.section-2');
    const section3 = document.querySelector('.section-3');

    currentList[0].addEventListener('click', () => {
        window.scrollTo({
            top: section0.offsetTop,
            behavior: 'smooth'
        });
    });
    currentList[1].addEventListener('click', () => {
        window.scrollTo({
            top: section1.offsetTop,
            behavior: 'smooth'
        });
    });
    currentList[2].addEventListener('click', () => {
        window.scrollTo({
            top: section2.offsetTop,
            behavior: 'smooth'
        });
    });
    currentList[3].addEventListener('click', () => {
        window.scrollTo({
            top: section3.offsetTop,
            behavior: 'smooth'
        });
    });

    sideListbar[0].addEventListener('click', () => {
        window.scrollTo({
            top: section0.offsetTop,
            behavior: 'smooth'
        });
    });
    sideListbar[1].addEventListener('click', () => {
        window.scrollTo({
            top: section1.offsetTop,
            behavior: 'smooth'
        });
    });
    sideListbar[2].addEventListener('click', () => {
        window.scrollTo({
            top: section2.offsetTop,
            behavior: 'smooth'
        });
    });
    sideListbar[3].addEventListener('click', () => {
        window.scrollTo({
            top: section3.offsetTop,
            behavior: 'smooth'
        });
    });


    window.addEventListener('scroll', () => {
        if (window.pageYOffset < section0.offsetHeight) {
            currentSection[0].style.background = 'black';
            currentSection[1].style.background = 'rgba(225, 225, 225, 1)';
            currentSection[2].style.background = 'rgba(225, 225, 225, 1)';
            currentSection[3].style.background = 'rgba(225, 225, 225, 1)';
            sectionName[0].style.display = "block";
            sectionName[1].style.display = "none";
            sectionName[2].style.display = "none";
            sectionName[3].style.display = "none";
        } else if (window.pageYOffset < section0.offsetHeight + section1.offsetHeight) {
            currentSection[0].style.background = 'rgba(225, 225, 225, 1)';
            currentSection[1].style.background = 'black';
            currentSection[2].style.background = 'rgba(225, 225, 225, 1)';
            currentSection[3].style.background = 'rgba(225, 225, 225, 1)';
            sectionName[0].style.display = "none";
            sectionName[1].style.display = "block";
            sectionName[2].style.display = "none";
            sectionName[3].style.display = "none";
            
        } else if (window.pageYOffset < section0.offsetHeight + section1.offsetHeight + section2.offsetHeight) {
            currentSection[0].style.background = 'rgba(225, 225, 225, 1)';
            currentSection[1].style.background = 'rgba(225, 225, 225, 1)';
            currentSection[2].style.background = 'black';
            currentSection[3].style.background = 'rgba(225, 225, 225, 1)';
            sectionName[0].style.display = "none";
            sectionName[1].style.display = "none";
            sectionName[2].style.display = "block";
            sectionName[3].style.display = "none";
        } else {
            currentSection[0].style.background = 'rgba(225, 225, 225, 1)';
            currentSection[1].style.background = 'rgba(225, 225, 225, 1)';
            currentSection[2].style.background = 'rgba(225, 225, 225, 1)';
            currentSection[3].style.background = 'black';
            sectionName[0].style.display = "none";
            sectionName[1].style.display = "none";
            sectionName[2].style.display = "none";
            sectionName[3].style.display = "block";
        }
    })

})();