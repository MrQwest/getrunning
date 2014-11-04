$.getJSON( "run.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( key + val );
  });

  itemsLength = items.length;
  randomItem = Math.floor(Math.random() * itemsLength)

 
  // show number of items in json array.
  console.log("there are " + itemsLength + " items in the array");
  console.log("The random number is " + randomItem);
  console.log(data[randomItem].type);

  if (data[randomItem].type == "quote") {
  	$('#content').html("<p class='quote'>" + data[randomItem].resource + "</p>");
  } else if (data[randomItem].type == "video") {
  	// if youtube video, strip out unneeded sections and feed into embed code.
  	var video_id = data[randomItem].resource.split('v=')[1];
	var ampersandPosition = video_id.indexOf('&');
	if(ampersandPosition != -1) {
	  video_id = video_id.substring(0, ampersandPosition);
	}
	console.log(video_id);
	$('#content').append("<div class='videoWrapper'><iframe width=560 height=315 src='//www.youtube.com/embed/" + video_id + "' frameborder='0' allowfullscreen></iframe></div>");

	// $('#content').html("<p>" + data[randomItem].resource + "</p>");
  } else if (data[randomItem].type == "image") {
  	$('#content').html("<img src=" + data[randomItem].resource + " />");
  } else {
  	$('#content').html("<p>Just Run!</p>");
  };

  $('#content').append(items[randomItem].type);
});