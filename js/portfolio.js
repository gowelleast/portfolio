(() => {

    const currentList = document.querySelectorAll('.current-list');
    const currentSection = document.querySelectorAll('.current-section');
    const section0 = document.querySelector('#scroll-section-0');
    const section1 = document.querySelector('#scroll-section-1');
    const section2 = document.querySelector('#scroll-section-2');
    const section3 = document.querySelector('#scroll-section-3');

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

    window.addEventListener('scroll', () => {
        console.log(window.pageYOffset)
        if (window.pageYOffset < section0.offsetHeight) {
            currentSection[0].style.background = 'white';
            currentSection[1].style.background = 'black';
            currentSection[2].style.background = 'black';
            currentSection[3].style.background = 'black';
        } else if (window.pageYOffset < section0.offsetHeight + section1.offsetHeight) {
            currentSection[0].style.background = 'black';
            currentSection[1].style.background = 'white';
            currentSection[2].style.background = 'black';
            currentSection[3].style.background = 'black';
        } else if (window.pageYOffset < section0.offsetHeight + section1.offsetHeight + section2.offsetHeight) {
            currentSection[0].style.background = 'black';
            currentSection[1].style.background = 'black';
            currentSection[2].style.background = 'white';
            currentSection[3].style.background = 'black';
        } else {
            currentSection[0].style.background = 'black';
            currentSection[1].style.background = 'black';
            currentSection[2].style.background = 'black';
            currentSection[3].style.background = 'white';
        }
    })

})();
