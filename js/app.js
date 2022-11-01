'use strict';
console.log('app.js');

// Nusitaikymas ==============================
const els = {
  addMovieBtn: document.getElementById('add-movie-btn'),
  addMovieModal: document.getElementById('add-modal'),

};
console.log('els ===', els);

// EVENT LISTENERS ==========================

els.addMovieBtn.addEventListener('click', () => {

   // parodyti modala
    els.addMovieModal.classList.add('visible');

});