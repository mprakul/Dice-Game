
  var n1 = Math.ceil(Math.random() * 6);
  var n2 = Math.ceil(Math.random() * 6);

  document.querySelector(".img1").setAttribute("src","images/dice"+n1+".png");
  document.querySelector(".img2").setAttribute("src","images/dice"+n2+".png");

  var heading;

  if(n1 > n2)
  {
    heading = "🎉 Player 1 Wins!";
  }
  else if(n1 == n2)
  {
    heading = "Hooba Dooba Doo, It's A Draw!! ✨";
  }
  else{
    heading = "Player 2 Wins! 🎊";
  }

  document.querySelector("h1").innerHTML = heading;
