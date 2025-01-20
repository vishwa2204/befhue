
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

const cursor = document.querySelector(".cursor-1");

document.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;

  cursor.style.transform = `translate(${x}px, ${y}px)`;
});


// Reveal 

window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;

    var revealtop = reveals[i].getBoundingClientRect().top;

    var revealPoint = 50;

    if (revealtop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }


  }
}