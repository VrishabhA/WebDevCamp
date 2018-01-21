//Array of movie objects
var data=[{title:"Kingsman the Secret Service" ,rating: 4.5 ,hasWatched: true},
{title:"The Shawshank Redemption" ,rating: 4.5 ,hasWatched: true},
{title:"Captain Phillips" ,rating: 3.5 ,hasWatched: true},
{title:"Blood and Bone" ,rating: 3.7 ,hasWatched: false}
];

//Iterate through array and print

data.forEach(function(movie){
	
	if(movie.hasWatched === true)
		status="watched";
	else
		status="not watched";

	console.log("You have "+status+" "+"\""+movie.title+"\" -"+movie.rating+" stars");
});