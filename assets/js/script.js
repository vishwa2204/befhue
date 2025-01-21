
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
/////////////////////////////
const cursor1 = document.querySelector(".cursor-1"); // Big circle
const cursor2 = document.querySelector(".cursor-2"); // Small circle

let mouseX = 0, mouseY = 0; // Track the mouse's actual position
let smallCircleX = 0, smallCircleY = 0; // Small circle's interpolated position

// Update the mouse coordinates on mouse move
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX; // Mouse X position
  mouseY = e.clientY; // Mouse Y position

  // Move the big circle directly
  cursor1.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  cursor1.style.margin = '-10px -10px';
});

// Smooth animation for the small circle
function animate() {
  // Interpolate the small circle's position for smooth trailing
  smallCircleX += (mouseX - smallCircleX) * 0.1; // Adjust speed by changing 0.1
  smallCircleY += (mouseY - smallCircleY) * 0.1;

  // Move the small circle
  cursor2.style.transform = `translate(${smallCircleX}px, ${smallCircleY}px)`;
  cursor2.style.margin = '-4px -4px';

  requestAnimationFrame(animate); // Keep the animation running
}

// Start the animation
animate();
///////////////////////////////
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