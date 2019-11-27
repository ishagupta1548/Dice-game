var random = Math.floor(Math.random() * 6) + 1; //generate random number

var image = ("images/dice" + random + ".png"); //address of the image

document.querySelector("img").setAttribute("src" , image); //setting the image

var random2 = Math.floor(Math.random() * 6) + 1; //random number generated for dice 2

var image2 = ("images/dice" + random2 + ".png"); // address for image for dice 2 

document.querySelector(".img2").setAttribute("src", image2); //setting the image

if(random > random2){
    document.querySelector("h1").innerHTML = "Player 1 wins" //checking is player 1 wins
}
else if(random2 > random){
    document.querySelector("h1").innerHTML = "Player 2 wins" //checking if player 2 wins
}

else{
    document.querySelector("h1").innerHTML = "It is a tie" //checking if it is a draw
}
