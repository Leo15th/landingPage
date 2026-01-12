const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.remove("bg-gray-800");
    nav.classList.add("bg-gray-800/80", "shadow-md");
  } else {
    nav.classList.remove("bg-gray-800/80", "shadow-md");
    nav.classList.add("bg-gray-800");
  }
});

const menuToggleBtn = document.getElementById("menu-toggle-btn");
const menuToggleIcon = document.getElementById("menu-toggle-icon");
const menuitemsHolder = document.getElementById("menu-items-holder");

// menuToggle.addEventListener("click", () =>{
//     menuitemsHolder.classList.toggle("hidden");
//     menuToggle.classList.remove("fa-bars");
//     menuToggle.classList.add("fa-xmark", "absolute", "top-4", "right-4") ;
// })

menuToggleBtn.addEventListener("click", () => {
  if (menuToggleIcon.classList.contains("fa-bars")) {
    menuToggleIcon.classList.remove("fa-bars");
    menuToggleIcon.classList.add("fa-xmark");
    menuToggleBtn.classList.add("absolute", "top-4", "right-0");
    menuitemsHolder.classList.remove("hidden");
  } else {
    menuToggleIcon.classList.remove("fa-xmark");
    menuToggleIcon.classList.add("fa-bars");
    menuitemsHolder.classList.add("hidden");
  }
});

var swiper = new Swiper(".menuSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const gallerySwiper = new Swiper(".gallerySwiper", {
  centeredSlides: true,
  loop: true,

  speed: 4000,
  allowTouchMove: true,
  centeredSlides:false,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
      effect: "coverflow",
      grabCursor: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 20,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });