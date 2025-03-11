$(document).ready(function () {
    $('.slick-slider').each(function () {
    let slider = $(this);
    let options = {
      prevArrow: slider.parent().find('.slider-prev'),
      nextArrow: slider.parent().find('.slider-next'),
      infinite: true,
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
    } else if (slider.hasClass('categories')) {
      extraOptions = {
        slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
          autoPlay: true,
        responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2.7,
        slidesToScroll: 1,
      }
          },
    {
      breakpoint: 680,
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
})





// $('.slider').slick({
//     dots: false,
//     arrows: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 3.5,
//     slidesToScroll: 1,
//     prevArrow: $('.prev-btn'), 
//     nextArrow: $('.next-btn'),
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//     ]
// });




// $(document).ready(function(){
//     $('.slider-offer').slick({
//         dots: true,
//         arrows: true,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         prevArrow: $('.prev'), 
//         nextArrow: $('.next'),
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     });
// });


// $('.slider-tours').slick({
//     dots: false,
//     arrows: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 3.5,
//     slidesToScroll: 1,
//     prevArrow: $('.prv-btn'), 
//     nextArrow: $('.nxt-btn'),
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//     ]
// });


AOS.init();

 // JavaScript to handle pagination
