var randomNumber1 = Math.floor(Math.random() * 2) + 1;
var randomNumber2 = Math.floor(Math.random() * 2) + 1;
// var a = "dice";
// var state1 = a + randomNumber1 + ".png";
// var state2 = a + randomNumber2 +".png";
var img1 = document.querySelectorAll("img")[0];
if(randomNumber1 == 1)
{
  img1.setAttribute("src", "head.png");
  document.querySelector("h1").innerHTML = "It's a head!";
}
else
{
  img1.setAttribute("src", "tail.png")
  document.querySelector("h1").innerHTML = "It's a tail!";
}


// var img2 = document.querySelectorAll("img")[1];
// img2.setAttribute("src", state2);
// if (randomNumber1 > randomNumber2)
// {
// document.querySelector("h1").innerHTML = "Player 1 wins!"
// }
// else if (randomNumber1 < randomNumber2)
// document.querySelector("h1").innerHTML = "Player 2 wins!"
// else
// {
//   document.querySelector("h1").innerHTML = "It's a draw!";
// }
