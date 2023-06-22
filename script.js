let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


window.onscroll = function () {
  var height = $(window).height();
  var scrollTop = $(window).scrollTop();
  var obj = $('#scroll');
  var pos = obj.position();
  if (height + scrollTop < pos.top) {
     $('.button').fadeIn();
  }
  else {
     $('.button').fadeOut(); 
  }
}




    var swiper = new Swiper('.swiper-container', {
      effect: 'cube',
      grabCursor: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on: {
        slideChange: function () {
          var activeIndex = swiper.realIndex;
          var partnersHeading = document.querySelector('.partners-heading');
          if (activeIndex === 2) {
            partnersHeading.style.display = 'none';
          } else {
            partnersHeading.style.display = 'block';
          }
        },
      },
    });
