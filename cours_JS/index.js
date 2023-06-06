
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
	// console.log(e);d
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

questionContainer.addEventListener("mouseenter", () => {
	questionContainer.style.background = "red"
});

questionContainer.addEventListener("mouseout", () => {
	questionContainer.style.background = "plum"
});

response.addEventListener("mouseover", () => {
	response.style.transform =  "rotate(5deg)";
});


// ------------------------------

// KeyPress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
const ring = (key) => {
	const audio = new Audio();
	audio.src = "./assets/" + key + ".mp3";
	audio.play();
};
// console.log(key);
document.addEventListener("keypress", (e) => {
	// console.log(e.key);
	key.textContent = "Voici du la lettre tapee " + e.key;
	if (e.key === "j") {
		keypressContainer.style.background = "teal";
	}
	if (e.key === "Enter")
		ring(e.key);
});

// -------

// scroll event
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
	// console.log(window.scrollY);
	if (window.scrollY > 120) {
		nav.style.top = 0;
	} else {
		nav.style.top = "-50px";
	}
});

// ----------------- Form event
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";


inputName.addEventListener('input', (e) => {
	pseudo = e.target.value;
	// console.log(pseudo);
});

select.addEventListener("input", (e) => {
	language = e.target.value;
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	if (cgv.checked) {
		document.querySelector("form > div").innerHTML = `
			<h3>Bienvenue ${pseudo}</h3>
		`;
	} else {
		alert("veuilley accepter les CGV")
	}
});

// ---------------
// load Event ce d;clanche quand tout le doc est charge
window.addEventListener("load", () => {
	// console.log("document charge !");
});

//------------------------------------------------
// ForEach
// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    box.style.transform = "scale(0.7)";
  });
});

//------------------------------------------------
// addEventListener Vs onclick => pas optimal
// document.body.onclick = function() {
//   console.log("Scroll !");
// };

// Bubbling => fin (de base l'eventlistener est paramétré en mode Bublbing)
document.body.addEventListener("click", () => {
  console.log("click 1 !");
});

// Usecapture
document.body.addEventListener(
  "click",
  () => {
    console.log("click 2 !");
  },
  true
);
/*
// https://gomakethings.com/what-is-that-third-argument-on-the-vanilla-js-addeventlistener-method-and-when-do-you-need-it/

//-------------------------------------------------
// Stop propagation
// questionContainer.addEventListener("click", (e) => {
//   alert("Test !");
//   e.stopPropagation();
// });

// removeEventListener

//-------------------------------------------------
// BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);
// window.open("http://google.com", "cours js", "height=600, width=800");
// window.close()

// Evénements adossés à Window
// alert("hello");

// confirm
btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment vous tromper ?");
});

// prompt
btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom !");

  questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
});

// Timer, compte à rebours
setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);

// let interval = setInterval(() => {
//   document.body.innerHTML += `
//       <div class='box'>
//         <h2>Nouvelle Boite !</h2>
//       </div>
//     `;
// }, 4000);

document.body.addEventListener("click", (e) => {
  e.target.remove();
  clearInterval(interval);
});

// Location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://lequipe.fr");

// window.onload = () => {
//   location.href = "http://twitter.fr";
// };

// Navigator
// console.log(navigator.userAgent);

// https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition

// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos) {
//   var crd = pos.coords;

//   console.log("Votre position actuelle est :");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude : ${crd.longitude}`);
//   console.log(`La précision est de ${crd.accuracy} mètres.`);
// }

// function error(err) {
//   console.warn(`ERREUR (${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);

// History
// console.log(history);
// window.history.back();
// history.go(-2)

//------------------------------------------------
// SetProperty
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});