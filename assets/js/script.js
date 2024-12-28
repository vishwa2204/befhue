
//---------------- counter section start-------------------------------------------------------

const counters = document.querySelectorAll('.count');
const speed = 97;

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // When 50% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = Number(entry.target.getAttribute('data-target'));
      const countElement = entry.target;
      let currentCount = 0;

      const updateCount = () => {
        const inc = target / speed;
        currentCount += inc;
        countElement.textContent = Math.floor(currentCount);

        if (currentCount < target) {
          requestAnimationFrame(updateCount);
        } else {
          countElement.textContent = target;
        }
      };
      updateCount();
      observer.unobserve(entry.target);
    }
  });
}, options);

counters.forEach(counter => {
  observer.observe(counter);
});



//  -------------------- testimonial section start -------------------------------
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     grabCursor: true,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

