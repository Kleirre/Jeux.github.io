 let commencer = document.getElementById('commencer');
 let para1 = document.getElementById('1');
 let para2 = document.getElementById('2');
 let para3 = document.getElementById('3');

 let debut_temps = null;
 commencer.addEventListener("click", chrono);
 function chrono(){
     para2.innerHTML = "Appuyez sur le bouton lorsqu'il devient rouge ! "
     debut_temps = null;
     para3.innerHTML = '';

    let submitButton = document.createElement('button');
    submitButton.innerHTML = "Tenez vous prêt...";
    submitButton.disabled = true;
    para3.innerHTML =''
    para3.appendChild(submitButton);

    let delais = Math.random() * 3000 + 2000;
    setTimeout(() => {
        submitButton.innerHTML = "CLIQUEZ !";
        submitButton.style.backgroundColor = 'red';
        submitButton.disabled = false;
        debut_temps = Date.now();
    }, delais);

    submitButton.addEventListener("click", () => {
    if (debut_temps) {
    let temps_reaction = Date.now() - debut_temps;

    para2.innerHTML = `Temps de réaction : ${temps_reaction} ms`;
    }
    submitButton.disabled = true;
  });

 }
