
function loadFile() {
	const request = new XMLHttpRequest();
	request.responseType = "text";
	request.addEventListener("load", parseOurPlaylist);
	request.open("GET", "./usrdata/lists/testlist.dat");
	request.send();
}

function parseOurPlaylist() {
	alert(this.responseText);
}
