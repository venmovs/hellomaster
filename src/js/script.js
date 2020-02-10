window.addEventListener('DOMContentLoaded', function () {
    'use strict';

/*
    тоглил бохы с услугами
*/

    let serviceBox = document.querySelectorAll(".service__box");
    for (let box of serviceBox) {
        box.addEventListener('click', function () {
            box.classList.toggle("service__box_active");
        });
    }

/*
    появление инпутов при нажатии на время
*/

    let signBox = document.querySelectorAll(".sign__box"),
        signForm = document.querySelector('.sign__wrapper__hidden'),
        scrolling = 0;


    for (let box of signBox){
        box.addEventListener('click', function () {
            signBox.forEach(n => n.classList.remove('sign__box__active'));
            box.classList.toggle("sign__box__active");
            let boxPos = box.getBoundingClientRect().y;
            let formPos = signForm.getBoundingClientRect().y;
            let dif = formPos - boxPos;
            if (dif < 20){
                    window.scrollBy(0, Math.abs(dif) + 60)
            }
            signForm.classList.add("sign__wrapper__active");
            scrolling = pageYOffset;

        });
    }

/*
    исчизновение при скролле
*/
    window.addEventListener('scroll', function() {
        let difference = scrolling - pageYOffset;
        if (difference < -50 || difference > 50){
            signForm.classList.remove('sign__wrapper__active');
        }
    });
});






