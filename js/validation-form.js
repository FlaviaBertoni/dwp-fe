function validationPhone(f) {
	if(f.phone.value.length<=0){}
	else if(f.phone.value.length<9 || f.phone.value.length>10) {
		alert("Preencha o telefone corretamente.");
		f.phone.focus();
	}else{
		ddd = f.phone.value.substring(0,2);
		if (f.phone.value.length==9) {
			part1 = f.phone.value.substring(2,5);
			part2 = f.phone.value.substring(5,9);
		}
		if (f.phone.value.length==10) {
			part1 = f.phone.value.substring(2,6);
			part2 = f.phone.value.substring(6,10);
		}
		f.phone.value = "("+ddd+") "+part1+"-"+part2
	}
}

var imgURL="";

function validationSingup(form) {
	if (form.nick.value=="") {
		alert("Campo vazio!\nPreencha o nome de usuário.");
		form.nick.focus();
		return false;
	}
	if(localStorage.getItem(form.nick.value)!= null){
		alert("O nome de usuário escolhido já existe!");
		form.nick.focus();
		return false;
	}
	var filtro_mail = /^.+@.+\..{2,3}$/
	if (!filtro_mail.test(form.email.value) || form.email.value=="") {
		alert("E-mail inválido! \nPreencha o e-mail corretamente.");
		form.email.focus();
		return false;
	}
	if (form.password.value=="" || form.password.value.length < 6) {
		alert("Senha inválida!\n A senha deve conter no minimo 6 caracteres.");
		form.password.focus();
		return false;
	}
	if (form.password.value!=form.confPass.value) {
		alert("Confirmação inválida!\nA senha e a senha de confirmação tem que ser iguais.");
		form.confPass.focus();
		return false;
	}
	
	setUser(form.nick.value,form.password.value,form.email.value,form.name.value,imgURL,form.favcolor.value);
	alert("Cadastro efetuado com sucesso!\n\nBem-vindo ao WebPortf!");			
	return true;
}
function setURLImg(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			imgURL = e.target.result;
		}
		reader.readAsDataURL(input.files[0]);
	}
}
$(document).ready(function(){
	$("#image").change(function(){
		setURLImg(this);
	});
});


function validationLogin(form) {
	if (form.user.value==""){
		alert("Campo vazio!\nPreencha o campo do usuário.");
		return false;
	}
	if (form.password.value=="" || form.password.value.length < 6) {
		alert("Senha inválida!\n A senha deve conter no minimo 6 caracteres.");
		form.password.focus();
		return false;
	}
	if(login(form.user.value,form.password.value)){
		alert("Login efetuado com sucesso!");
		return true;
	}
	return false;
}

function forgotPass(form){
	var nick = prompt("Qual é o seu nome de usuário?");
	if(localStorage.getItem(nick) == null){
		alert("Usuário não encontrado.");
	}else{
		var question = prompt("Qual é o seu e-mail?").toUpperCase();
		if(question == getEmail(nick).toUpperCase()){
			alert("Sua senha é: "+getPass(nick));
		}else{
			alert("E-mail não encontrado.");
		}
	}
}