
// SELECTEURS

// document.querySelector("p").style.visibility = 'visible'

// const baliseHTML = document.querySelector("h4");

// console.log(baliseHTML);

// baliseHTML.style.background = "yellow";


// click event

	// variables
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2"); //idem
const response = document.querySelector("p");

	// console.log(questionContainer); pour check

	// questionContainer.style.borderRadius = "150px";

	// questionContainer.addEventListener(evenement, fonction);

questionContainer.addEventListener("click", () => {
	console.log("click !");
	questionContainer.classList.toggle("question-click") //add - remove - toggle (=si actif remove sinon add)
})

btn1.addEventListener("click", () => {
	response.classList.add("show-response");
	response.style.color = "green";
})

btn2.addEventListener("click", () => {
	response.classList.add("show-response");
	response.style.color = "red";
})

// mouse events
const mousemove =document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
	console.log(e);
	mousemove.style.left = e.pageX + "px";
	mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
	mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
	mousemove.style.transform = "scale(1) translate(-50%, -50%)";
	mousemove.style.border = "2px solid rgb(232, 10, 10)";
});

questionContainer.addEventListener("mouseenter", ())
