// anchors
$(() => {
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
  $('.js-service-nav-btn').click(function () {
    $('.js-service-nav-btn').removeClass('is-active')
    $(this).addClass('is-active')
  })
})

//reviews slider
$(() => {
  const reviewsSlider = new Swiper(".js-reviews-slider", {
    speed: 700,
    loop: true,
    spaceBetween: 40,
    navigation: {
      nextEl: ".reviews-slider-nav-next",
      prevEl: ".reviews-slider-nav-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      769: {
        slidesPerView: 2,
      },
    }
  });
});