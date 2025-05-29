const couleurs = ["rouge", "vert", "bleu", "jaune"];
let sequence = [];
let saisie = [];
let score = 0;

const boutons = document.querySelectorAll(".couleur");
const instructions = document.getElementById("instructions");
const scoreAffiche = document.getElementById("score");
const boutonCommencer = document.getElementById("commencer");

function ajouterCouleur() {
	const couleurAleatoire = couleurs[Math.floor(Math.random() * couleurs.length)];
	sequence.push(couleurAleatoire);
}

function afficherSequence() {
	instructions.textContent = "Regarde bien la séquence...";
	let i = 0;

	const interval = setInterval(() => {
		const couleur = sequence[i];
		const bouton = document.getElementById(couleur);
		
		bouton.style.opacity = "0.5";
		setTimeout(() => bouton.style.opacity = "1", 300);
		
	i=i+1;
	if (i >= sequence.length) {
		clearInterval(interval);
		instructions.textContent = "À toi de jouer ! Clique dans le bon ordre.";
		}
	}, 600);
}

function verifierChoix(couleur) {
	saisie.push(couleur);
	const index = saisie.length - 1;
	
	if (saisie[index] !== sequence[index]) {
		instructions.textContent = "Erreur ! Tu recommences à zéro.";
		score = 0;
		sequence = [];
		saisie = [];
		scoreAffiche.textContent = "Score : " + score;
		return;}
	
	if (saisie.length === sequence.length) {
		instructions.textContent = "Bien joué ! Prépare-toi pour la suite...";
		score=score+1;
		scoreAffiche.textContent = "Score : " + score;
		saisie = [];
	
	setTimeout(() => {
		jouerTour();
		}, 1000);
	}
}

function jouerTour() {
	ajouterCouleur();
	afficherSequence();
}

boutonCommencer.addEventListener("click", () => {
	score = 0;
	sequence = [];
	saisie = [];
	scoreAffiche.textContent = "Score : " + score;
	jouerTour();
});
	
boutons.forEach(bouton => {
	bouton.addEventListener("click", () => {
		if (sequence.length > 0) {
			verifierChoix(bouton.id);
			}
	});
});
