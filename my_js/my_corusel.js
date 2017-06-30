$(document).ready(function () {
    $('.sing-1').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        appendArrows: $('.slider-arrow'),
        nextArrow: '<div class="next fa fa-angle-right fa-3x"></div>',
        prevArrow: '<div class="prev fa fa-angle-left fa-3x"></div>',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
        }]

    });
    $('.sing-2').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        appendArrows: $('.slider-arrow-2'),
        nextArrow: '<div class="next-2 fa fa-angle-right fa-3x"></div>',
        prevArrow: '<div class="prev-2 fa fa-angle-left fa-3x"></div>',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
        }]
    });
});

$(function () {
        $('a').on('mouseover', function () {
            var aid = this.id;
            if (aid == 'link-1') {
                $('.treug-1').css('color', '#ed485c');
            } else if (aid == 'link-2') {
                $('.treug-2').css('color', '#ed485c');
            } else if (aid == 'link-3') {
                $('.treug-3').css('color', '#ed485c');
            } else if (aid == 'link-4') {
                $('.treug-4').css('color', '#ed485c');
            } else if (aid == 'link-5') {
                $('.treug-5').css('color', '#ed485c');
            } else if (aid == 'link-6') {
                $('.treug-6').css('color', '#ed485c');
            }
        });
    })

    .on('mouseout', function () {
        $('.treug').css('color', '#a9b8cc');
    });
