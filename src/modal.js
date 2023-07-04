const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelector('.btn-open');
const closeModalBtn = document.querySelector('.btn-close');
const links = document.querySelectorAll('a.modal-link');
const about = document.querySelector('#about');
const contactUs = document.querySelector('#contact');
const modalBtn = document.querySelector('#modal-btn');

// close modal function
const closeModal = function () {
  modal.classList.add('modal-hidden');
  overlay.classList.add('hidden');

  // clear state of modal content
  links[0].classList.add('active');
  links[1].classList.remove('active');
  modalBtn.innerHTML = "Let's connect";
  contactUs.classList.add('hidden');
  about.classList.remove('hidden');
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// close modal when the Esc key is pressed
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// open modal function
const openModal = function () {
  modal.classList.remove('modal-hidden');
  overlay.classList.remove('hidden');
};
// open modal event
openModalBtn.addEventListener('click', openModal);

// change inner modal content
for (let link of links) {
  link.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('active')) return;

    const activeNow = document.querySelector('a.active');

    if (activeNow.innerHTML === 'About Us') {
      modalBtn.innerHTML = 'Message us';
      about.classList.add('hidden');
      contactUs.classList.remove('hidden');
    } else {
      modalBtn.innerHTML = "Let's connect";
      contactUs.classList.add('hidden');
      about.classList.remove('hidden');
    }
    activeNow.classList.remove('active');
    el.classList.add('active');
  });
}
