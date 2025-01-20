//////////////////////// Form Popup /////////////////////////////////////////////

// Select elements
let popup = document.querySelector('.popup-form');
let closeBtn = document.querySelector('#close');

// Check if the popup has already been shown
let isPopupShown = localStorage.getItem('isPopupShown');

// Show the popup only if it hasn't been shown before
if (!isPopupShown) {
    window.addEventListener("load", function () {
        setTimeout(function open() {
            popup.style.scale = "1"; // Show the popup
            popup.classList.toggle('rot');
            if (popup.style.scale === "1") {
                document.querySelector('.body').classList.toggle('blur'); // Add blur effect to the background
            }
        }, 1000); // Delay of 1 second before showing the popup
    });
}

// Close button functionality
closeBtn.addEventListener("click", function () {
    popup.classList.toggle('rot');
    popup.style.scale = "0"; // Hide the popup

    if (popup.style.scale === "0") {
        document.querySelector('.body').classList.remove('blur'); // Remove blur effect
    }

    // Mark popup as shown in localStorage to prevent it from showing again
    localStorage.setItem('isPopupShown', 'true');
});
//////////////////////// Navbar /////////////////////


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

  // Correctly position the circle with `translate(-50%, -50%)`
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