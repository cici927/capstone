$( document ).ready(function() {

	var characName = function(entry, realName) {
		var names = realName[0].name + " is a " + realName[0].culture;
		$('.results-container').html(names);
		return names;
		//console.log(realName);
	};

//var searchRequest = { "phrase": entry}

// var appendApiKeyHeader = function( xhr ) {
//   xhr.setRequestHeader('Api-Key', 'etb2qagdsgwbnarg2rnykya3')
// }

	function getCharacter(entry) {
		//var searchRequest = { "phrase": entry}

		$.ajax({
			url: "http://www.anapioficeandfire.com/api/characters?name=" + entry
			// success: function(data) {
			// 	var nameResults = characName(entry, data);
			// 	$('.results-container').html(nameResults);
			// 	console.log(data);
			// }		
	 	})
	// }		
			.done(function(data) {
				characName(entry, data);
				//console.log(data);
		
	
				$.ajax({
					url: "https://api.got.show/api/characters/locations/" + entry,
				})
				.done(function(datatwo) {
					var secondCall = "They are currently located in " + datatwo.data[0].locations[0];
					

						$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
						{
							tags: entry,
							tagmode: "any",
							format: "json"

						}, function(datathree) {
							$.each(datathree.items, function(i, item){
								$('<img/>').attr("src", item.media.m).appendTo('#images');
									if(i==0) return false;
							});
		
						});
	
					});	
				})

			
			
	}			


	$('.got-form').submit(function(e) {
			e.preventDefault();
			$("#main").empty();
			$('.results-container').html('');
			var entry = $(this).find("input[name='character']").val();
			getCharacter(entry);
			//console.log(entry);
	});

});