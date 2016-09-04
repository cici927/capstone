$( document).ready(function() {

	$("#button").click(function(){
		$("#images").empty();
		$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
		{
			tags: "game of thrones",
			tagmode: "any",
			format: "json"

		}, function(data) {
			$.each(data.items, function(i, item){
				$('<img/>').attr("src", item.media.m).appendTo('#images');
				if(i==0) return false;
				console.log(item);
			});
		
		});
	
	});	


});



//1st request
//https://www.flickr.com/services/api/flickr.photos.search.html

//"id": "29288493761", "owner": "97636774@N08", "secret": "c97483c2e9", "server": "8309", "farm": 9, "title": "DSC_8295-Edit.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0

//2nd request

//https://www.flickr.com/services/api/misc.urls.html

//Docs
