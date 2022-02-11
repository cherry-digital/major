$('.slideshow').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    customPaging: function (slider, i) {
        var thumb = $(slider.$slides[i]).data();
        return '<a>' + (i + 1) + '</a>';
    },
    autoplay: true,
    autoplaySpeed: 3000,
});

$('.slideshow-references').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    customPaging: function (slider, i) {
        var thumb = $(slider.$slides[i]).data();
        return '<a>' + (i + 1) + '</a>';
    },
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
            }
    }
        ]
});


$('.slideshow-news').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    customPaging: function (slider, i) {
        var thumb = $(slider.$slides[i]).data();
        return '<a>' + (i + 1) + '</a>';
    },
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
    },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
    }
        ]
});
