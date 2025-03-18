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
  }else if (slider.hasClass('bus')) {
    extraOptions = {
      slidesToShow: 2.8,
        slidesToScroll: 1,
        centerMode: false,
        arrows: true,
        dots: false,
        autoPlay: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: true
            }
                  },
        ]
    }
  }
  slider.slick($.extend({}, extraOptions, options ));
})

  //sidebar on main page initialization
  $(".menu").metisMenu();

  //AOS
   AOS.init();

  //gallery photos and PhotoSwipe configs
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

  setImageSizes();
  const lightbox = new PhotoSwipeLightbox({
  gallery: ".gallery",
  children: "a",
  pswpModule: PhotoSwipe
  });
  lightbox.on('uiRegister', function() {
      lightbox.pswp.options.zoom = false; 
      });

  lightbox.init();

  //swipper slider configs
  var thumbsSwiper = new Swiper(".thumbs-slider", {
    direction: "vertical",
    loop: true, 
    slidesPerView: 3, 
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
    breakpoints: {
      990: {
        navigation : {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: false,
      },
      0: {
        navigation: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
      }
    }
  });


  //input on hotel page configs
  $(".increment").click(function () {
    let input = $(this).siblings("input");
    let value = parseInt(input.val(), 10);
    if (!isNaN(value)) {
        input.val(value + 1);
    }
  });

  $(".decrement").click(function () {
      let input = $(this).siblings("input");
      let value = parseInt(input.val(), 10);
      if (!isNaN(value) && value > parseInt(input.attr("min") || 1, 10)) {
          input.val(value - 1);
      }
  });
  //input on tour page configs
  $(function() {
    let datePicker = $('#dateRangePicker');

    if (datePicker.length) { 
        datePicker.daterangepicker({
            autoUpdateInput: false,
            locale: {
                format: 'DD.MM.YYYY',
                applyLabel: "Выбрать",
                cancelLabel: "Отмена",
                fromLabel: "С",
                toLabel: "По",
                customRangeLabel: "Свой диапазон"
            }
        });
        datePicker.on('show.daterangepicker', function(ev, picker) {
            setTimeout(() => {
                $('.applyBtn').removeClass('btn-primary').addClass('btn-blue');
                $('.cancelBtn').removeClass('btn-default').addClass('btn-blue');
            }, 10);
        });
        datePicker.on('apply.daterangepicker', function(ev, picker) {
            $(this).val(picker.startDate.format('DD.MM.YYYY') + ' - ' + picker.endDate.format('DD.MM.YYYY'));
        });
        datePicker.on('cancel.daterangepicker', function() {
            $(this).val('');
            datePicker.attr('placeholder', "Dates");
        });
    }
  });


})
