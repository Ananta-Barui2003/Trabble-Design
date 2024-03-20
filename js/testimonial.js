$('.user_data_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.user_slide'
  });
  $('.user_slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.user_data_slide',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
  });