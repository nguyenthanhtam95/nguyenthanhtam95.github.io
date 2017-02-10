function requeteAPI(url, elementID){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById(elementID).innerHTML = jsonPretty;
    }
};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

/* var http = new XMLHttpRequest();
http.onreadystatechange = function () {
	if(this.readyState == 4 && this.status == 200){
		var objet = this.responseText;
		var java = JSON.stringify(JSON.parse(objet), null, 2);
		document.getElementById("dem").innerHTML = java;
	}		
};

http.open("GET", "http://bitcoin.mubiz.com/info", true);
http.send(); */

function homePageLoading() {	
    url = 'http://bitcoin.mubiz.com/info';
	url0 = 'http://bitcoin.mubiz.com/blockchaininfo';
	url1 = 'http://bitcoin.mubiz.com/mininginfo';
	url2 = 'http://bitcoin.mubiz.com/peerinfo';
    elementID = 'demo';
	elementID0 = 'd';
	elementID1 = 'de';
	elementID2 = 'dem';
    requeteAPI(url, elementID);
	requeteAPI(url0, elementID0);
	requeteAPI(url1, elementID1);
	requeteAPI(url2, elementID2);
}