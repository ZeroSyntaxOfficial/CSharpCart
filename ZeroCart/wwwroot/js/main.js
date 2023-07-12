var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    autoplay: true,
    autoplay: {
      delay: 2000,
    },
    loop: true,
    speed: 2000,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".promoSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });

document.addEventListener("DOMContentLoaded", function () {
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
    document.getElementById("navbar_top").classList.add("fixed-topbar");
    // add padding top to show content behind navbar
    navbar_height = document.querySelector(".navbar").offsetHeight;
    document.body.style.paddingTop = navbar_height + "px";
    } else {
    document.getElementById("navbar_top").classList.remove("fixed-topbar");
    // remove padding top from body
    document.body.style.paddingTop = "0";
    }
});
});