let body = document.querySelector("body");
let piece = body.querySelector("button");
let para1 = body.querySelector("p");
let image = document.getElementById("piece-image");

piece.addEventListener("click", lancer)

function lancer() {
    let pile_ou_face = Math.floor(Math.random() * 2);
    if (pile_ou_face === 1) {
    para1.innerHTML =  "Face!";
    image.src = "face.jpg";
} else {
    para1.innerHTML =  "Pile !";
    image.src = "pile.jpg";
}

}