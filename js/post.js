var main = function(){
	$('.btn').click(toPost);
    $('.status-box').keyup(function(event) {
        if(event.which!=13 && event.which!=32){
			var postLength = $(this).val().length;
			var charactersLeft = 200 - postLength;
			$('.counter').text(charactersLeft);
		}else{
			charactersLeft = $('.counter').text();
		}
		
		if(charactersLeft!=200){
			$('.btn').removeClass('disabled');
			if(event.which==13){
				toPost();
			}
		}else{
			$('.btn').addClass('disabled');
		}
    });
	$('.btn').addClass('disabled');
};
var toPost = function(){
	var imgPost = "../images/anonymous.jpg";
	var post = $('.status-box').val();
	var name = "Anônimo";
	
	if(localStorage.getItem('currentUser') != "" && localStorage.getItem('currentUser') != null){
		if(getName(localStorage.getItem('currentUser')) != null){
			name = getName(localStorage.getItem('currentUser'));
		}
		if(getImg(localStorage.getItem('currentUser')) != null){
			imgPost = getImg(localStorage.getItem('currentUser'));
		}
	}

	var icon = '<img src="'+imgPost+'" class="thumbnail	col-md-1"/>';
	var textPost = "<li class='col-md-11'><p><strong>"+name+"</strong></p>"+post+"</li>";
	$('.posts').prepend(textPost);
	$('.posts').prepend(icon);
    $('.status-box').val('');
	$('.counter').text(200);
	$('.btn').addClass('disabled');
	setStoragePost(icon,textPost);
};
var setStoragePost = function(icon,textPost){
	var arrayPosts = localStorage.getItem($('#title').text());
	if(arrayPosts!=null){
		arrayPosts = JSON.parse(arrayPosts);
		arrayPosts.push(icon+textPost);
		localStorage[$('#title').text()] = JSON.stringify(arrayPosts);
	}else{
		var newArrayPosts = [];
		newArrayPosts[0] = icon+textPost;
		localStorage[$('#title').text()] = JSON.stringify(newArrayPosts);
	}
};
var getStoragePost = function(){
	var arrayPosts = localStorage.getItem($('#title').text());
	if(arrayPosts!=null){
		arrayPosts = JSON.parse(arrayPosts);
		for(var i in arrayPosts){
			var post = arrayPosts[i];
			$('.posts').prepend(post);
		}
	}
};
var clearPosts = function(){
	$('.posts').text("");
};

$(document).ready(main);