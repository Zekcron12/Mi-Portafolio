//************************************ MODO DARK ************************************//
const mododark = document.querySelector('#IDdark');

mododark.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  mododark.classList.toggle('active');

  // Guardamos el modo en localstorage.
  if(document.body.classList.contains('dark')){
    localStorage.setItem('dark-mode', 'true');
  } else {
    localStorage.setItem('dark-mode', 'false');
  }
});

// Obtenemos el modo actual.
if(localStorage.getItem('dark-mode') === 'true'){
  document.body.classList.add('dark');
  mododark.classList.add('active');
} else {
  document.body.classList.remove('dark');
  mododark.classList.remove('active');
}
//************************************ MODO DARK ************************************//
