document.querySelector('.toggle-navigation').addEventListener('click', function () {
    document.querySelector('.navigation-responsive').classList.toggle('opened');
});

document.onscroll = function () {
    var header = document.querySelector('.header-top');
    if (document.documentElement.scrollTop >= 100) {
        header.classList.add('white');
    } else {
        header.classList.remove('white');
    }
}
try {
    document.querySelector('.landing .content .choose-language form input').addEventListener('focus', function () {
        document.querySelector('.landing .content .choose-language .languages').style.display = 'block';
    });


    document.querySelector('.landing .content .choose-language form input').addEventListener('keyup', function () {
        var value = this.value.toLowerCase();
        var items = document.querySelectorAll('.landing .content .choose-language .languages .items a');
        var headingItems = document.querySelectorAll('.landing .content .choose-language .languages h5');
        headingItems.forEach(function (element) {
            element.style.display = 'none';
        });
        items.forEach(function (element) {
            var regExp = new RegExp(value, 'g');
            if (regExp.test(element.textContent.toLocaleLowerCase())) {
                element.style.display = 'flex';
            } else {
                element.style.display = 'none';
            }
        });
    });


    document.querySelector('.landing .content .choose-language form input').addEventListener('blur', function () {
        document.querySelector('.landing .content .choose-language .languages').style.display = 'none';
    });

} catch (err) {

}

var swiper = new Swiper('.swiper-lang', {
    direction: 'horizontal',
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewheel: false,
    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        }
    }
});

var swiper = new Swiper('.swiper-over', {
    direction: 'horizontal',
    slidesPerView: 3,
    slidesPerGroup: 3,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewheel: false,
    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        992: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        }
    }
});
