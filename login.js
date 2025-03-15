let inputuser = document.getElementById('inputuser');
let intputpass = document.getElementById('inputpass');
let btnlogin = document.getElementById('btnlogin');

btnlogin.addEventListener("click", function(e) {
	
	e.preventDefault() 
	
	if (inputuser.value == "Janriege") {
		
		if (inputpass.value == "1234"){
			
				location.href = "main.html";
								
		} else {
			alert ("Invalid Password");
		}
	} else {
		alert ("Invalid Username");
	}
	
});
