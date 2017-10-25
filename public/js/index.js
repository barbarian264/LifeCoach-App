$(document).ready(function(){

    var quotes = ["Hoy sera tu dia","No te rindas","Eres fuerte"];
    var i = 0;

    setInterval(function() {

    	// $("#street").fadeIn();
        $("#street").fadeIn(2000);
    	$("#street").text(quotes[i]);


        $("#street").fadeOut(3000);
        $("#streetfoot").fadeOut(3000);

        if(i == quotes.length) {
        	i=0;
        }

        else {

        	i++;
        }

    }, 6000);
    





});