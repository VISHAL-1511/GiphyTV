//1. Grab the input value

var button = document.querySelector(".js-go");

button.addEventListener('click',function(){

	window.location.reload();

});


//2. Do the data stuff with API

var item = prompt("What GIF's you wanna watch??");

var query = item.split(' ').join('+');

var url = "http://api.giphy.com/v1/gifs/search?q="+ query +"&api_key=1uF0i2WktL36PzyHwL7eYEwHC51NRw4u";

	
	//AJAX Request

	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open( 'GET', url );
	GiphyAJAXCall.send();

	GiphyAJAXCall.addEventListener('load',function(e){

		var data = e.target.response;
		pushToDOM(data);

	});

//3.Show mw GIF's

function pushToDOM(input){

	var response = JSON.parse(input);
	var f = document.querySelector(".js-container");

	
	var imageUrls = response.data;
	
	var i;

	for(i=0;i<6;i++){

		
		setTimeout(function(){
		var src = imageUrls[i].images.fixed_height.url;
		console.log(src);
		
		clear(f);
		f.innerHTML = "<img src=\"" + src + "\" class=\"container-image\">";
 	
		i++;

		},5000*i);

	}

	function clear(item) {
        item.innerHTML = "";
    }

}