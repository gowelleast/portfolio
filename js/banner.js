(function () {
    const btn1 = document.querySelector('.btn1');
    const btn2 = document.querySelector('.btn2');
    const btn3 = document.querySelector('.btn3');
    const btn4 = document.querySelector('.btn4');
    const banner = document.querySelector('.banner-box');
    const scrollUp = document.querySelector('.scroll_up');
    const scrollDown = document.querySelector('.scroll_down');
    let i = 1;
    let timeId;
    function btnColor() {
        btn1.style.background = 'rgb(228, 225, 225, .7)'
        btn2.style.background = 'rgb(228, 225, 225, .7)'
        btn3.style.background = 'rgb(228, 225, 225, .7)'
        btn4.style.background = 'rgb(228, 225, 225, .7)'
        if(i===1)   btn1.style.background = '#fff'
        else if(i===2)  btn2.style.background = '#fff'
        else if(i===3)  btn3.style.background = '#fff'
        else if(i===4)  btn4.style.background = '#fff'
        clearTimeout(timeId);
        timeId = setInterval(bannerRight,4000);
    }
    function bannerRight() {
        i++;
        if (i === 5) i = 1;
        banner.style.transform = 'translateX(' + (1-i) * 100 + '%)';
        btnColor();
    }
    
    timeId = setInterval(bannerRight,4000);

    btn1.addEventListener('click', function () {
        i=1;
        banner.style.transform = 'translateX(0%)';
        btnColor();
    })
    btn2.addEventListener('click', function () {
        i=2;
        banner.style.transform = 'translateX(-100%)';
        btnColor();
    })
    btn3.addEventListener('click', function () {
        i=3;
        banner.style.transform = 'translateX(-200%)';
        btnColor();
    })
    btn4.addEventListener('click', function () {
        i=4;
        banner.style.transform = 'translateX(-300%)';
        btnColor();
    })

    scrollUp.addEventListener('click', function() {
        scrollTo(0,0);
    })
    scrollDown.addEventListener('click', function() {
        scrollTo(1000,4000);
    })
})();

(function(window, document) {
    'use strict';

    const $toggles = document.querySelectorAll('.toggle'); //NodeList 유사배열
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function() {
        toggleElements();
    });

    window.addEventListener('resize', function() {
        if(window.innerWidth > 1024) {
            offElements();
        }
    })

    function toggleElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
        });
    }

    function offElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('on');
        });
    }
})(window, document)
// (function () {
//     const leftbtn = document.querySelector('.left-btn');
//     const rightbtn = document.querySelector('.right-btn');
//     const banner = document.querySelector('.banner-box');
//     let i = 0;
//     leftbtn.addEventListener('click', function () {
//         i--;
//         if(i===-1) i = 3;
//         banner.style.transform = 'translateX(' + -i * 100 + '%)';

//         console.log(i);
//     })
//     rightbtn.addEventListener('click', function () {
//         i++;
//         if(i===4) i = 0;
//         banner.style.transform = 'translateX(' + -i * 100 + '%)';

//         console.log(i);
//     })
// })();
