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


//*****************************VALIDACION DE CONTACTO ******************************//
const INPUTS = document.querySelectorAll('#IDform input');
const BUTTON = document.getElementById('IDbutton');


let expression = { email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ };

let contents = { email: false };

const validateForm = (e) => {
  switch (e.target.name) {
    case "email":
      validateContent(expression.email, e.target, 'email');
    break;
  }
}

const validateContent = (expressions, input, content) => {
  const TESTING = document.getElementById(`ID${content}`);
  if(expressions.test(input.value)){
    TESTING.classList.remove('input-email');
    TESTING.classList.remove('active-error');
    TESTING.classList.add('active-correct');
    contents[content] = true;
  } else {
    TESTING.classList.remove('input-email');
    TESTING.classList.remove('active-correct');
    TESTING.classList.add('active-error');
    contents[content] = false;
    setTimeout(() => {
      TESTING.classList.remove('active-error');
      TESTING.classList.add('input-email');
    }, 6600);
  }
}

INPUTS.forEach((input) => {
  input.addEventListener('keyup', validateForm);
  input.addEventListener('blur', validateForm);
});

//*****************************VALIDACION DE CONTACTO ******************************///




//************************************ FIRE BASE ************************************//

const form = document.getElementById('IDform');
const textIncomplete = document.getElementById('IDtext-1');
const textIncorrect  = document.getElementById('IDtext-2');
const textSent = document.getElementById('IDtext-3');

form.addEventListener('submit', e=> {
	e.preventDefault();

	//Si esta completo:
  if (contents.email && form.msj.value > "") {
  	const cleanInput = document.getElementById('IDemail');
    textSent.classList.remove('text-invalid');
    textSent.classList.add('textSent');
    setTimeout(() => {
    	textSent.classList.remove('textSent');
      textSent.classList.add('text-invalid');
      db.collection('Correos').add({ 
				Usuario: form.email.value,
				Mensaje: form.msj.value
			});
			form.email.value = '';
			form.msj.value = '';
			cleanInput.classList.remove('active-correct');
      cleanInput.classList.add('input-email');
    }, 900);
  } //Si estan vacio los casilleros: 
  else if (contents.email === '' || form.msj.value === "") {
    textIncomplete.classList.remove('text-invalid');
    textIncomplete.classList.add('textIncomplete');
    setTimeout(() => {
      textIncomplete.classList.remove('textIncomplete');
      textIncomplete.classList.add('text-invalid');
    }, 2000);
  }
  //Si estan incorrectos los casilleros: 
 	else {
    textIncorrect.classList.remove('text-invalid');
    textIncorrect.classList.add('textIncorrect');
    setTimeout(() => {
      textIncorrect.classList.remove('textIncorrect');
      textIncorrect.classList.add('text-invalid');
    }, 2000);
  }
}); 

//************************************ FIRE BASE ************************************//

