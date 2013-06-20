//Check if theres internet connection
if (navigator.onLine) {
  	
  	$(function() {
  		//Validate the form to make sure it has content
		$(".initial_keys").validate({
   			submitHandler: function(form) {
     			
     			//Grab the values from the form
     			client = $('input[id=client]').val();
     			api = $('input[id=api]').val();
     			//alert(client + api);

     			var success = false;

     			//Make a request to validate that the values work
     			jQuery.getJSON("https://api.digitalocean.com/droplets/?client_id="+ client +"&api_key="+api, function(json) {
    				success = true;

    				alert(json['status']);
				});

     			//If they dont work then freak out
				setTimeout(function() {
				    if (!success)
				    {
				        // Handle error accordingly
				        alert("Houston, we have a problem.");
				    }
				}, 5000);

     			//form.submit();
   			}
		})
	});


  	//Lets open the database
	var db = Ti.Database.openFile(Ti.Filesystem.getFile(Ti.Filesystem.getApplicationDataDirectory(), 'fugu.db'));   

	//Create the table
	db.execute("CREATE TABLE IF NOT EXISTS API(id INTEGER, client TEXT, key TEXT)");

	//Lets close it up
	db.close();


} else {
	alert('Im Not Online');
} 