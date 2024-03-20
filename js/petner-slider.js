$('.petner_slide').slick({
    centerMode: false,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-arrow-left-long"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-arrow-right-long"></i></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 481,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 2
        }
      }
    ]
  });