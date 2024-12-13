"use strict";

let i = 0;

document.getElementById("annuler").addEventListener("click", function () {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
});

document.getElementById("valider").addEventListener("click", function () {
    validateInputs();
});

document.getElementById("supprimer").addEventListener("click", function () {
    document.getElementById("post-it").innerHTML = "";
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        validerInput();
    }
});

function validerInput() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;

    if (title !== "" && description !== "") {
        document.getElementById("post-it").innerHTML += `
            <div class="card col-lg-2 carte" id="card${i}">
                <div class="card-body">
                    <button type="button" onclick="supprimerPostit(${i})" class="btn-close position-absolute top-0 end-0 p-2" aria-label="close"></button>
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}</p>
                </div>
            </div>`;
        i++;
    } else {
        alert("Veuillez remplir tous les champs.");
    }

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
}

function supprimerPostit(n) {
    let postit = document.getElementById(`card${n}`);
        document.getElementById("post-it").removeChild(postit);
        console.warn(`Le post-it avec l'ID card${n} n'existe pas.`);
}
