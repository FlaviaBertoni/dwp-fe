var id=1;
function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		
		reader.onload = function (e) {
			
			$("#"+id).attr('src', e.target.result);
			/*Armazenando o caminho da imagem no localStorage*/
			var user = localStorage.getItem("currentUser");
			setMyPortf(user, id, e.target.result);
		}
		
		reader.readAsDataURL(input.files[0]);
	}
}
function setImg(id){
	this.id=id;
	$('#myImgInput').click();
}
$(document).ready(function(){
	var user = localStorage.getItem("currentUser");
	
	var color = getColor(user);
	$(".neighborhood-guides .my-portf .row .group img").css("background-color",color);

	for(var i=1; i<9; i++){
		var img = getMyPortf(user, i);
		if( img != ""){	
			$("#"+i).attr('src', img);
		}
	}
	
	$("#myImgInput").change(function(){
		readURL(this);
	});
});