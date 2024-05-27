$('.testi').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$(".slider").slick({
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
});

function front() {
    document.getElementById("front").style.display = "block";
    document.getElementById("back").style.display = "none";
    document.getElementById("supportt").style.display = "none";
    document.getElementById("frontt").classList.add("active-border");
    document.getElementById("backk").classList.remove("active-border");
    document.getElementById("support").classList.remove("active-border");
}

function back() {
    document.getElementById("front").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("supportt").style.display = "none";
    document.getElementById("frontt").classList.remove("active-border");
    document.getElementById("backk").classList.add("active-border");
    document.getElementById("support").classList.remove("active-border");
}

function support() {
    document.getElementById("front").style.display = "none";
    document.getElementById("back").style.display = "none";
    document.getElementById("supportt").style.display = "block";
    document.getElementById("frontt").classList.remove("active-border");
    document.getElementById("backk").classList.remove("active-border");
    document.getElementById("support").classList.add("active-border");
}

let topp = document.getElementById('top-aro')
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        topp.classList.remove('aro')
    }
    else {
        topp.classList.add('aro')

    }
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
}