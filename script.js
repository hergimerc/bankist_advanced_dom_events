'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////////////////////////////////////////////////

const header = document.querySelector('.header');
const allSelections = document.querySelectorAll('.sections');
console.log(allSelections);

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// Membuat objek DOM baru, tag = div dengan nama message
const message = document.createElement('div');

// Memberikan objek DOM yang baru dibuat tadi class cookie-message
message.classList.add('cookie-message');

// message.textContent = 'We use cookies to improve functionality and analytics.';

// Menambahkan text
message.innerHTML =
  'We use cookies to improve functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// Memasukkan elemen DOM yang dibuat tadi ke dalam web, di atas header
// header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));
header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });
