const dialog = document.getElementById('dialog');
const bodyEl = document.querySelector('body');
const openModalBtn = document.querySelector('.btn-open');
const closeModalBtn = document.querySelectorAll('.btn-close');

const menuBtns = document.querySelectorAll('.modal-menu-btn');
const about = document.querySelector('#about');
const contactUs = document.querySelector('#contact');
const modalBtn = document.querySelector('#modal-btn');

const closeModal = function () {
  dialog.close();
  bodyEl.classList.toggle('noscroll');

  // clear state of modal content
  menuBtns[0].classList.add('active');
  menuBtns[1].classList.remove('active');
  modalBtn.innerHTML = "Let's connect";
  contactUs.classList.add('hidden');
  about.classList.remove('hidden');
};

closeModalBtn.forEach((btn) => btn.addEventListener('click', closeModal));

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

const openModal = function () {
  dialog.showModal();
  bodyEl.classList.toggle('noscroll');
};

openModalBtn.addEventListener('click', openModal);

// change inner modal content
for (let btn of menuBtns) {
  btn.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('active')) return;

    const activeNow = document.querySelector('.active');

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
