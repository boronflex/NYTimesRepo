var key = "24ad0c2914ee4ca7983d996ef1128800"


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

$.ajax({
	url: queryURL,
	method: "GET"
}).done(function(response){

	console.log(response);


})