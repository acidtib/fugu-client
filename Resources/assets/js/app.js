if (navigator.onLine) {
  	
  	//Lets open the database
	var db = Ti.Database.openFile(Ti.Filesystem.getFile(Ti.Filesystem.getApplicationDataDirectory(), 'fugu.db'));   

	//Create the table
	db.execute("CREATE TABLE IF NOT EXISTS API(id INTEGER, client TEXT, key TEXT)");


	//Lets close it up
	db.close();



} else {
	alert('Im Not Online');
} 