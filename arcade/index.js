const mousemove = document.querySelector(".mousemove");
const coin = document.getElementById("coin");
const blinkingText = document.getElementById("insert");

window.addEventListener("mousemove", (e) => {
	console.log(e);d
	mousemove.style.left = e.pageX + "px";
	mousemove.style.top = e.pageY + "px";
});

coin.addEventListener("mouseenter", () => {
	coin.style.transform = ""
});

coin.addEventListener("mouseenter", function(event) {
	
	// Déplacer l'objet de 10 pixels vers le bas en mettant à jour la position
	coin.style.top = "40vw";
  });

  coin.addEventListener("mouseout", function(event) {
	
	// Déplacer l'objet de 10 pixels vers le bas en mettant à jour la position
	coin.style.top = "37vw";
  });

if (blinkingText)
{
	let isVisible = true;
	setInterval(() => {
	  isVisible = !isVisible;
	  blinkingText.style.visibility = isVisible ? 'visible' : 'hidden';
	}, 500);
}