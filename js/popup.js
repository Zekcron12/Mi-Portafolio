


//-------------------- SOBRE MI --------------------//
const open = document.getElementById('open');
const modal_sobremi = document.getElementById('modal_sobremi');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_sobremi.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_sobremi.classList.remove('show');
});

//-------------------- SERVICIOS --------------------//
const open9 = document.getElementById('open9');
const modal_servicio = document.getElementById('modal_servicio');
const close9 = document.getElementById('close9');

open9.addEventListener('click', () => {
  modal_servicio.classList.add('show');  
});

close9.addEventListener('click', () => {
  modal_servicio.classList.remove('show');
});

//-------------------- HTML --------------------//
const open1 = document.getElementById('open1');
const modal_html = document.getElementById('modal_html');
const close1 = document.getElementById('close1');

open1.addEventListener('click', () => {
  modal_html.classList.add('show');  
});

close1.addEventListener('click', () => {
  modal_html.classList.remove('show');
});

//-------------------- CSS --------------------//
const open2 = document.getElementById('open2');
const modal_css = document.getElementById('modal_css');
const close2 = document.getElementById('close2');

open2.addEventListener('click', () => {
  modal_css.classList.add('show');  
});

close2.addEventListener('click', () => {
  modal_css.classList.remove('show');
});

//-------------------- JS --------------------//
const open3 = document.getElementById('open3');
const modal_js = document.getElementById('modal_js');
const close3 = document.getElementById('close3');

open3.addEventListener('click', () => {
  modal_js.classList.add('show');  
});

close3.addEventListener('click', () => {
  modal_js.classList.remove('show');
});

//-------------------- SASS --------------------//
const open4 = document.getElementById('open4');
const modal_sass = document.getElementById('modal_sass');
const close4 = document.getElementById('close4');

open4.addEventListener('click', () => {
  modal_sass.classList.add('show');  
});

close4.addEventListener('click', () => {
  modal_sass.classList.remove('show');
});

//-------------------- GIT --------------------//
const open5 = document.getElementById('open5');
const modal_git = document.getElementById('modal_git');
const close5 = document.getElementById('close5');

open5.addEventListener('click', () => {
  modal_git.classList.add('show');  
});

close5.addEventListener('click', () => {
  modal_git.classList.remove('show');
});

//-------------------- PS --------------------//
const open6 = document.getElementById('open6');
const modal_ps = document.getElementById('modal_ps');
const close6 = document.getElementById('close6');

open6.addEventListener('click', () => {
  modal_ps.classList.add('show');  
});

close6.addEventListener('click', () => {
  modal_ps.classList.remove('show');
});

//-------------------- Cursos --------------------//
const open7 = document.getElementById('open7');
const modal_cursos = document.getElementById('modal_cursos');
const close7 = document.getElementById('close7');

open7.addEventListener('click', () => {
  modal_cursos.classList.add('show');  
});

close7.addEventListener('click', () => {
  modal_cursos.classList.remove('show');
});

//-------------------- Proyectos --------------------//
const open8 = document.getElementById('open8');
const modal_proyectos = document.getElementById('modal_proyectos');
const close8 = document.getElementById('close8');

open8.addEventListener('click', () => {
  modal_proyectos.classList.add('show');  
});

close8.addEventListener('click', () => {
  modal_proyectos.classList.remove('show');
});


//-------------------- MODO DARK --------------------//
const mododark = document.querySelector('#oscuro');

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