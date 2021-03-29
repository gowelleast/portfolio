(function() {
    const stageElem = document.querySelector('.stage');
    const houseElem = document.querySelector('.house');
    const barElem = document.querySelector('.progress-bar');
    const mousePos = { x: 0, y: 0};
    const btn = document.querySelectorAll('.btn');
    let maxScrollValue;

    btn[0].addEventListener('click', function(){
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    })
    btn[1].addEventListener('click', function(){
        window.scroll({ top: 0.11*maxScrollValue, left: 0, behavior: 'smooth' });
    })
    btn[2].addEventListener('click', function(){
        window.scroll({ top: 0.2*maxScrollValue, left: 0, behavior: 'smooth' });
    })
    btn[3].addEventListener('click', function(){
        window.scroll({ top: 0.3*maxScrollValue, left: 0, behavior: 'smooth' });
    })
    btn[4].addEventListener('click', function(){
        window.scroll({ top: 0.4*maxScrollValue, left: 0, behavior: 'smooth' });
    })
    btn[5].addEventListener('click', function(){
        window.scroll({ top: 0.5*maxScrollValue, left: 0, behavior: 'smooth' });
    })
    btn[6].addEventListener('click', function(){
        window.scroll({ top: 0.605*maxScrollValue, left: 0, behavior: 'smooth' });
    })
    btn[7].addEventListener('click', function(){
        window.scroll({ top: 0.705*maxScrollValue, left: 0, behavior: 'smooth' });
    })
    btn[8].addEventListener('click', function(){
        window.scroll({ top: 0.81*maxScrollValue, left: 0, behavior: 'smooth' });
    })
    btn[9].addEventListener('click', function(){
        window.scroll({ top: 0.91*maxScrollValue, left: 0, behavior: 'smooth' });
    })
    
    function resizeHandler() {
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }

    window.addEventListener('scroll', function() {
        const scrollPer = pageYOffset/maxScrollValue;
        const zMove = scrollPer * 2950 - 400;
        houseElem.style.transform = 'translateZ(' + zMove + 'vw)';
        // progress-bar
        barElem.style.width =  scrollPer * 100 + '%';
    });

    window.addEventListener('mousemove', function(e) {
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
        stageElem.style.transform = 'rotateX(' + (mousePos.y * 5) + 'deg) rotateY(' + (mousePos.x * 5) + 'deg)';
    });

    window.addEventListener('resize', resizeHandler);
    stageElem.addEventListener('click', function(e) {
        new Character({
            xPos: e.clientX / window.innerWidth * 100,
            speed: Math.random()
        });
    })

    resizeHandler();

}) ();