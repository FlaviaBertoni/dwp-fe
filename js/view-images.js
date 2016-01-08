var listImages = ["../images/c1.jpg","../images/c2.jpg","../images/c3.jpg","../images/c4.jpg","../images/c5.jpg","../images/g1.jpg","../images/g2.jpg","../images/g3.jpg","../images/g4.jpg","../images/g5.jpg","../images/b1.png","../images/b2.png","../images/b3.jpg","../images/b4.png","../images/b5.png"];
var descriptionImg = ["Gardening landscape <small>by <a id='link' href='http://gintasdesign.deviantart.com/'>gintasdesign</a></small>",
"Xenia Responsive One Page Parallax Theme <small>by <a id='link' href='http://samiyilmaz.deviantart.com/'>samiyilmaz</a></small>",
"Bonum Commune - web design for law firm <small>by <a id='link' href='http://sycylianbeef.deviantart.com/'>SycylianBeef</a></small>",
"Nimbus Accounting Design <small>by <a id='link' href='http://sycylianbeef.deviantart.com/'>shoahmed</a></small>",
"Design for marketing services <small>by <a id='link' href='http://gintasdesign.deviantart.com/'>gintasdesign</a></small>",
"Heroes WoW - MOP Version <small>by<a id='link' href=' http://evil-s.deviantart.com/'> Evil-S</a></small>",
"Interface for a Game-Streaming-Site <small>by<a id='link' href=' http://creatix86.deviantart.com/'> CreatiX86</a></small>",
"Web Design - WoWVendor <small>by<a id='link' href='http://shizoy.deviantart.com/ '> Shizoy</a></small>",
"7Sword <small>by<a id='link' href=' http://onejian.deviantart.com/'> onejian</a></small>",
"WoW Rises - A World of Warcraft Website Design <small>by<a id='link' href=' http://loomarevo.deviantart.com/'> LoomarEvO</a></small>",
"Blog Fun Wordpress <small>by<a id='link' href='http://gintasdesign.deviantart.com/ '> AryaInk</a></small>",
"web design - Fishbein Bogdan <small>by<a id='link' href='http://shizoy.deviantart.com/ '> Shizoy</a></small>",
"Atica - WordPress Creative Blog Theme - Home <small>by<a id='link' href='http://zergev.deviantart.com/ '> ZERGEV</a></small>",
"Pretty - Personal / Gallery Tumblr Theme <small>by<a id='link' href='http://nicotinell.deviantart.com/ '> NicotineLL</a></small>",
"Moe's micro blog design <small>by<a id='link' href='http://dan-es.deviantart.com/ '> dan-Es</a></small>"];
var currentImage="";
var main = function(){

	currentImage = localStorage.getItem("srcImg");
	$('.active-image').attr('src', currentImage);
	$('#title').html(descriptionImg[searchID(currentImage)]);
	
	$('.active-image').attr('src', currentImage);
	$('#close').click(function(){
		window.location="portf.html";
	});
	$('#next').click(function(){
		nextImg();
    });
	$(document).keydown(function(event) {
		if(event.which === 39){
			nextImg();
		}
	});
	$('#prev').click(function(){
		prevImg();
    });
	$(document).keydown(function(event) {
		if(event.which === 37){
			prevImg();
		}
	});
	getStoragePost();
};

var searchID = function(image){
	for(var i=0;i<listImages.length;i++){
		if(listImages[i]==image){
			return i;
		}
	}
};

var nextImg = function(){
	var nextID = searchID(currentImage) + 1;
    if(nextID >= listImages.length){
        nextID = 0;
	}
	$('.active-image').attr('src', listImages[nextID]);
	$('#title').html(descriptionImg[nextID]);
	currentImage = listImages[nextID];
	//Limpa os comentários da imagem anterior (função de post.js)
	clearPosts();
	//Adiciona os comentários da imagem atual (função de post.js)
	getStoragePost();
};

var prevImg = function(){
	var nextID = searchID(currentImage) - 1;
    if(nextID < 0){
        nextID = listImages.length-1;
	}
	$('.active-image').attr('src', listImages[nextID]);
	$('#title').html(descriptionImg[nextID]);
	currentImage = listImages[nextID];
	//Limpa os comentários da imagem anterior (função de post.js)
	clearPosts();
	//Adiciona os comentários da imagem atual (função de post.js)
	getStoragePost();
};

$(document).ready(main);