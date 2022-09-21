
// Exercise 7
function validate() {

	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");  
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");  

	// Validate fields entered by the user: name, phone, password, and email

	// TOTS ELS CAMPS SON OBLIGATORIS
	// TOTS ELS CAMPS SON HAN DE TENIR 3 CARACTERS
// El nom i cognoms han de contenir només lletres.
// El telèfon ha de contenir només números.


	let inputForm = document.querySelector('input');
	inputForm.required = true;
	let emailRegex = new RegExp('^(.+)@(\\S+)$');
	let passwordRegex = new RegExp('^(?=.*\d)(?=.*[a-zA-Z])$');
	//NO FUNCIONA LA PASSWORD

	
	if(fName.value < 3 || typeof(fName) != String){
		error++;
		fName.style.border='5px solid red';
		errorName.style.display = 'block';
	}

	if(fEmail.value < 3 || !emailRegex.test(fEmail.value)){
		error++;
		fEmail.style.border='5px solid red';
		errorEmail.style.display = 'block';

	}

	if(fAddress.value < 3){
		error++;
		fAddress.style.border='5px solid red';
		errorAddress.style.display = 'block';
	}

	if(fLastN.value <3 || typeof(fLastN) != String){
		error++;
		fLastN.style.border='5px solid red';
		errorLastN.style.display = 'block';

	}

	if(fPassword.value < 3 || !passwordRegex.test(fPassword.value)){
		error++;
		fPassword.style.border='5px solid red';
		errorPassword.style.display = 'block';

	}
	
	if(fPhone.value < 3 || typeof(fPhone) != Number){
		error++;
		fPhone.style.border='5px solid red';
		errorPhone.style.display = 'block';

	}

	if(fName.length < 3){
		error++;
		fName.style.border='5px solid red';
	}


//La contrasenya ha d'incloure números i lletres.
// L'email ha de tenir format d'email.







	/*if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}*/

}
