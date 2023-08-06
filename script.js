// Récupération des éléments ayant la classe box
const boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
  // Ecoute de l'événement mouseover (dès que le curseur se trouve sur une div contenant une image)
  boxes[i].addEventListener("mouseover", (e) => {
    // Création de la constante src et index
    const src = e.target.getAttribute("src");
    const index = e.target.getAttribute("index");

    for (let j = 0; j < boxes.length; j++) {
      if (j == index) continue;
      boxes[j].style.opacity = "0";
    }
    document.body.style.background = "url(" + src + ") center no-repeat";
    document.body.style.backgroundSize = "cover";
  });
  //Ecoute de l'événement mouseleave (dès que le curseur n'est plus sur la div contenant une image
  boxes[i].addEventListener("mouseleave", () => {
    for (let j = 0; j < boxes.length; j++) {
      boxes[j].style.opacity = "1";
    }
    document.body.style.background = "#0a0a0a";
  });
}
