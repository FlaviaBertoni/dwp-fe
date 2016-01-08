function main(){
	var nick = localStorage.getItem("currentUser");
	var pass = JSON.parse(localStorage.getItem(nick))[1];
	login(nick,pass);
}

function setUser(nick,pass,email,name,img,color){
	var arrayUser = [];
	arrayUser[0] = nick;
	arrayUser[1] = pass;
	arrayUser[2] = email;
	if(name!="" && name!=null){arrayUser[3] = name;}else{arrayUser[3] = nick;}
	if(img!="" && img!=null){arrayUser[4] = img;}else{arrayUser[4] = "../images/anonymous.jpg";}
	if(color!="" && color!=null){arrayUser[5] = color;}else{arrayUser[5] = "#00b0ff";}
	arrayUser[6] = "";
	arrayUser[7] = "";
	arrayUser[8] = "";
	arrayUser[9] = "";
	arrayUser[10] = "";
	arrayUser[11] = "";
	arrayUser[12] = "";
	arrayUser[13] = "";
	localStorage[nick] = JSON.stringify(arrayUser);
}

function login(nick, pass){
	if(localStorage.getItem(nick)!="" && localStorage.getItem(nick)!=null){
		if(getPass(nick) == pass){
			var urlPortf ="";
			if($(".active a").text() == "Home"){
				urlPortf = "html/my-portf.html"
			}else{
				urlPortf = "my-portf.html";
			}
			var htmlLogin = '<a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-user"></span> '+nick+'<span class="caret"></span></a>'+
				'<ul class="dropdown-menu">'+
					'<li><a href="'+urlPortf+'"><span class="glyphicon glyphicon-picture"></span> Meu portfólio</a></li>'+
					'<li><a href="#" onclick=logout()><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>'+
				'</ul>';
			$("#log-in").addClass("dropdown");
			$("#log-in").html(htmlLogin);
			$("#sing-in").html("");
			localStorage.setItem("currentUser",nick);
			return true;
		}
		alert("Senha ou usuário incorretos!");
		return false;
	}
	alert("O usuário não existe!");
	return false;
}
function logout(){
	$("#log-in").removeClass("dropdown");
	$("#sing-in").html('<a href="subscribe.html"><span class="glyphicon glyphicon-user"></span> Sign Up</a>');
	$("#log-in").html('<a href="../html/login.html"><span class="glyphicon glyphicon-log-in"></span> Login</a>');
	localStorage.setItem("currentUser","");
}
function getUser(nick){
	var arrayUser = JSON.parse(localStorage.getItem(nick));
	return arrayUser[0];
}
function getPass(nick){
	var arrayUser = JSON.parse(localStorage.getItem(nick));
	return arrayUser[1];
}
function getEmail(nick){
	var arrayUser = JSON.parse(localStorage.getItem(nick));
	return arrayUser[2];
}
function getName(nick){
	var arrayUser = JSON.parse(localStorage.getItem(nick));
	return arrayUser[3];
}
function getImg(nick){
	var arrayUser = JSON.parse(localStorage.getItem(nick));
	return arrayUser[4];
}
function getColor(nick){
	var arrayUser = JSON.parse(localStorage.getItem(nick));
	return arrayUser[5];
}

function getMyPortf(nick, id){
	id += 5;
	var arrayUser = JSON.parse(localStorage.getItem(nick));
	return arrayUser[id];
}
function setMyPortf(nick, id, img){
	id += 5;
	var arrayUser = JSON.parse(localStorage.getItem(nick));
	arrayUser[id] = img;
	localStorage[nick] = JSON.stringify(arrayUser);
}

$(document).ready(main);