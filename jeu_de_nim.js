let allumettes = 21;
let mode = "";
let joueurActuel = 1;

const choixDiv = document.getElementById("choix-mode");
const jeuDiv = document.getElementById("jeu");
const message = document.getElementById("message");
const allumettesDiv = document.getElementById("allumettes");
const resultat = document.getElementById("resultat");

document.getElementById("btn-joueur").addEventListener("click", () => choisirMode("joueur"));
document.getElementById("btn-ordi").addEventListener("click", () => choisirMode("ordi"));

document.querySelectorAll(".boutons button").forEach(btn => {
	btn.addEventListener("click", () => {
		const coup = parseInt(btn.getAttribute("data-coup"));
		jouer(coup);
	});
});

function choisirMode(selection) {
	mode = selection;
	choixDiv.style.display = "none";  
	jeuDiv.style.display = "block"; 
	afficherAllumettes();
	updateMessage();
}

function afficherAllumettes() {
	allumettesDiv.textContent = '| '.repeat(allumettes);
}
function updateMessage() {
	 if (mode === "joueur") {
		message.textContent = `Joueur ${joueurActuel}, à toi de jouer. Il reste ${allumettes} allumettes.`;
		} else {
			message.textContent = `Il reste ${allumettes} allumettes. À toi de jouer.`;
		}
	}
	
function jouer(coup) {
	if (allumettes <= 1) return;
	if (coup < 1 || coup > 3 || coup >= allumettes) {
		alert("Coup invalide !");
		return;
	}
	allumettes = allumettes - coup;
	afficherAllumettes();
	
	if (allumettes === 1) {
		if (mode === "joueur") {
			resultat.textContent = `Il reste 1 allumette ! Joueur ${joueurActuel} doit jouer et perd. Joueur ${joueurActuel === 1 ? 2 : 1} a gagné !`;} 
		else {
			resultat.textContent = "Tu as gagné ! L'ordinateur doit prendre la dernière allumette.";
		}
		return;
	}
	
	if (mode === "joueur") {
		joueurActuel = joueurActuel === 1 ? 2 : 1;
		updateMessage();
	} else {
		message.textContent = `Tu as enlevé ${coup} allumette(s). Il en reste ${allumettes}.`;
		setTimeout(() => tourOrdinateur(), 1000);
	}
}
function tourOrdinateur() {
	let coup;
	if (allumettes <= 3) {
		coup = allumettes - 1;
	} else {
		let reste = allumettes % 4;coup = reste === 0 ? Math.floor(Math.random() * 3) + 1 : reste;
	}
	
	allumettes -= coup;
	afficherAllumettes();
	
	if (allumettes === 1) {
		resultat.textContent = "L'ordinateur a gagné ! Tu dois prendre la dernière allumette.";
	} else {
		message.textContent = `L'ordinateur enlève ${coup} allumette(s). Il en reste ${allumettes}. À toi de jouer.`;
	}
}
