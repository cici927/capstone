$( document ).ready(function() {

// var characName = function(realName) {
// 	var names = '<strong>' + realName.0.name + '</strong>' + " is from the " + realName.culture + " culture." ;
// 	$('.results-container').html(names);
	//return names;
	//console.log(characName);
//};

//var searchRequest = { "phrase": entry}

var appendApiKeyHeader = function( xhr ) {
  xhr.setRequestHeader('Api-Key', 'etb2qagdsgwbnarg2rnykya3')
}

	function getCharacter(entry) {
		var searchRequest = { "phrase": entry}

		$.ajax({
			url: "http://www.anapioficeandfire.com/api/characters?name=" + entry,
			// success: function(data) {
			// 	var nameResults = characName(entry, data);
			// 	$('.results-container').html(nameResults);
			// 	console.log(data);
		})
			.done(function(data) {
				//characName(entry, data);
				//console.log(data.name);
				$.ajax({
					url: "https://api.got.show/api/characters/locations/" + entry,
				})
				.done(function(datatwo) {
					//console.log(datatwo);

					//var searchRequest = { "phrase": "dog"}
					$.ajax({
						type: "GET",
					    beforeSend: appendApiKeyHeader,
					    url: "https://api.gettyimages.com/v3/search", 
					    data: searchRequest})
						    //.success(function (data, textStatus, jqXHR) 
						    .done(function(data){	
						    	console.log(data)
						    })

					
					// .done(function(datathree) {
					// 	console.log(datathree)
					
				})
			});
		
	};



	$('.got-form').submit(function(e) {
			e.preventDefault();
			$('.results-container').html('');
			var entry = $(this).find("input[name='character']").val();
			getCharacter(entry);
			//console.log(entry);
	});

});