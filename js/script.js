'use strict';

const click = (target, callback) => {
  target.addEventListener('click', (e) => {
    e.preventDefault();
    return callback(e)
  });
}

const hideMobileMenu = () => {
  mobileMenu.classList.toggle('mobile-hidden');
};

const hamburgerButton = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgerButton.addEventListener('click', (e) => {
  hideMobileMenu();
});

const mobileMenuItems = document.querySelectorAll('.mobile-menu__list-item a');
const documentSections = document.querySelectorAll('*[id^="section"]');
const documentSectionsArray = [...documentSections];

const scrollToSection = (i) => {
  documentSectionsArray[i].scrollIntoView({
    bahavior: 'smooth'
  });
};

mobileMenuItems.forEach((item, index) => {
  click(item, () => {
    scrollToSection(index);
    hideMobileMenu();
  })
});


// /* BOX_NUMBERS ANIMATIONS */

// const animateSectionNumberBox = () => {
//   let elements;
//   let windowHeight;

//   const init = () => {
//     elements = document.querySelectorAll('.animated');
//     windowHeight = window.innerHeight;
//     addEventHandlers();
//     checkPosition();
//   }

//   const addEventHandlers = () => {
//     window.addEventListener('scroll', checkPosition);
//     window.addEventListener('resize', init);
//   }

//   const checkPosition = () => {
//     for (let i = 0; i < elements.length; i++) {
//       let positionFromTop = elements[i].getBoundingClientRect().top;

//       if (positionFromTop - windowHeight <= 0) {
//         elements[i].className = elements[i].className.replace(
//           'animated',
//           'visible'
//         );
//       }
  
//       if ((positionFromTop - windowHeight > 1) || (positionFromTop < 0)) {
//         elements[i].className = elements[i].className.replace(
//           'visible',
//           'animated'
//         );
//       }
//     }
//   };

//   init();
//   checkPosition();

// };

// animateSectionNumberBox();