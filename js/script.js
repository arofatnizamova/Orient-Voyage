$(document).ready(function () {
    $('.slick-slider').each(function () {
    let slider = $(this);
    let options = {
      prevArrow: slider.parent().find('.slider-prev'),
      nextArrow: slider.parent().find('.slider-next'),
      infinite: true,
      autoPlay: true,
    }
    let extraOptions = {}
    if (slider.hasClass('tours-cards')) {
      extraOptions = {
        slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
          autoPlay: true,
        responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
            },
  ]
      }
    } else if (slider.hasClass('offers')) {
      extraOptions = {
        slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
          dots: true,
          autoPlay: true,
      }
    }else if (slider.hasClass('gallery')) {
      extraOptions = {
        slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
          dots: false,
          autoPlay: true,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
                    },
          ]
      }
    }
    slider.slick($.extend({}, extraOptions, options ));
  })
  AOS.init();
  function setImageSizes() {
    document.querySelectorAll('.gallery a').forEach(link => {
        const img = new Image();
        img.src = link.href;

        img.onload = function () {
            link.setAttribute('data-pswp-width', img.naturalWidth);
            link.setAttribute('data-pswp-height', img.naturalHeight);
        };
    });
}
// Вызываем функцию для установки размеров перед инициализацией галереи
setImageSizes();
    const lightbox = new PhotoSwipeLightbox({
    gallery: ".gallery",
    children: "a",
    pswpModule: PhotoSwipe
    });
    lightbox.on('uiRegister', function() {
        lightbox.pswp.options.zoom = false; // Отключает зум
        });

    lightbox.init();

    var thumbsSwiper = new Swiper(".thumbs-slider", {
      direction: "vertical",
      loop: true, // Вертикальное расположение миниатюр
      slidesPerView: 3, // Показываем 3 миниатюры одновременно
      spaceBetween: 10,
      watchSlidesProgress: true,
      freeMode: true,
    });

    var mainSwiper = new Swiper(".main-slider", {
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: thumbsSwiper,
      },
    });
})
