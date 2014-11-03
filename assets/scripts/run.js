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
  	$('#content').html("<p class='quote'>quote" + data[randomItem].resource + "</p>");
  } else if (data[randomItem].type == "video") {
  	$('#content').html("<p>video" + data[randomItem].resource + "</p>");
  } else if (data[randomItem].type == "image") {
  	$('#content').html("<p>" + data[randomItem].resource + "</p>");
  } else {
  	$('#content').html("<p>Just Run!</p>");
  };

  $('#content').append(items[randomItem].type);
});