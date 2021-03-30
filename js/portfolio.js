(() => {
    let yOffset = 0;
    let prevScrollHeight;
    let currentSection = 0;

    const sceneInfo = [{ //0
            heightNum: 1,
            sectionHeight: 0,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-0')
            }
        },
        {
            heightNum: 1,
            sectionHeight: 0,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-1')
            }
        },
        {
            heightNum: 1,
            sectionHeight: 0,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-2')
            }
        },
        {
            heightNum: 3,
            sectionHeight: 0,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-3')
            }
        }
    ];
    
    window.addEventListener('wheel', () => {
        let a = 0;
        console.log(a++);
    });

    function setLayout() {
        //각 스크롤 섹션의 높이 세팅
        prevScrollHeight = 0;

        for (let i = 0; i < sceneInfo.length; i++) {
            sceneInfo[i].sectionHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].sectionHeight}px`;
            prevScrollHeight += sceneInfo[i].sectionHeight;
            if (i !== sceneInfo.length - 1) {
                sceneInfo[i + 1].scrollHeight = prevScrollHeight;
            }
        }
    }

    setLayout();
})();
