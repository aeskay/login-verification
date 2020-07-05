var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var password = document.getElementById('password');
var confpass = document.getElementById('confpass');

function errorPrint(error, message){
	document.getElementById(error).innerHTML=message;
}

function validate(){
	var regEx = {
	"fname" : /[a-z]/gi,
	"lname" : /[a-z]/gi,
	"email" : /^((\w)+([\-\.\+])?(\w)+)+@([A-Za-z])+.([A-Za-z])+(.[A-Za-z]+)?$/,
	"phone" : /^\(?\d{3}([\)\-])?([\s\-])?\d{3}([\)\-])?\s?\d{4}/,
	"password": /[\w\W]{8,}/
	}

	if (regEx["fname"].test(fname.value)) {
		fname.classList = "valid";
		errorPrint("fnameErr", "");
	} else{
		errorPrint("fnameErr", "Invalid Input");
		fname.classList = "invalid";
		
	}

	if (regEx["lname"].test(lname.value)) {
		lname.classList = "valid";
		errorPrint("lnameErr", "");
	} else{
		errorPrint("lnameErr", "Invalid Input");
		lname.classList = "invalid";
		
	}

	if (regEx["email"].test(email.value)) {
		email.classList = "valid";
		errorPrint("emailErr", "");
	} else{
		errorPrint("emailErr", "Invalid Email");
		email.classList = "invalid";
		
	}

	if (regEx["phone"].test(phone.value)) {
		phone.classList = "valid";
		errorPrint("phoneErr", "");
	} else{
		errorPrint("phoneErr", "Invalid Phone Number");
		phone.classList = "invalid";
		
	}

	if (regEx["password"].test(password.value)) {
		password.classList = "valid";
		errorPrint("passErr", "");
	} else{
		errorPrint("passErr", "Password must be at least 8 characters long");
		password.classList = "invalid";
		
	}

	if (password.value === confpass.value) {
		confpass.classList = "valid";
		errorPrint("confErr", "");
	} else{
		errorPrint("confErr", "Passwords do not match");
		confpass.classList = "invalid";
		
	}
}

