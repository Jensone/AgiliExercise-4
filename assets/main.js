// Liste des artistes
const artistes = {
  artistes: [
    {
      nom: "Jean-Michel Jarre",
      pays: "France",
    },
    {
      nom: "David Guetta",
      pays: "France",
    },
    {
      nom: "Mika",
      pays: "France",
    },
    {
      nom: "Céline Dion",
      pays: "Canada",
    },
    {
      nom: "Justin Bieber",
      pays: "Canada",
    },
    {
      nom: "Shakira",
      pays: "Colombie",
    },
    {
      nom: "Rihanna",
      pays: "Barbade",
    },
    {
      nom: "Adele",
      pays: "Royaume-Uni",
    },
    {
      nom: "Ed Sheeran",
      pays: "Royaume-Uni",
    },
    {
      nom: "Coldplay",
      pays: "Royaume-Uni",
    },
    {
      nom: "The Beatles",
      pays: "Royaume-Uni",
    },
    {
      nom: "Michael Jackson",
      pays: "États-Unis",
    },
    {
      nom: "Elvis Presley",
      pays: "États-Unis",
    },
    {
      nom: "Madonna",
      pays: "États-Unis",
    },
    {
      nom: "Britney Spears",
      pays: "États-Unis",
    },
    {
      nom: "Beyoncé",
      pays: "États-Unis",
    },
    {
      nom: "Taylor Swift",
      pays: "États-Unis",
    },
    {
      nom: "Ariana Grande",
      pays: "États-Unis",
    },
    {
      nom: "Lady Gaga",
      pays: "États-Unis",
    },
    {
      nom: "Katy Perry",
      pays: "États-Unis",
    },
    {
      nom: "Bruno Mars",
      pays: "États-Unis",
    },
  ],
}

// Stock les éléments html suivants dans des variables
const nom = document.querySelector(".nom h2"),
      pays = document.querySelector(".pays h3"),
      bg = document.querySelector("body")

// Vérifie Si localStorage est prêt
if (localStorage.getItem("artiste-0") && localStorage.getItem("Mika")) {
  console.log("Tout est prêt")
} else {
  // Affiche tous les noms des artistes dans la console
  for (let i = 0; i <= artistes.artistes.length; i++) {
    console.log(artistes.artistes[i].nom)
    // Stock les informations suivantes dans localStorage
    localStorage.setItem("artiste-" + i, artistes.artistes[i].nom)
    localStorage.setItem(artistes.artistes[i].nom, artistes.artistes[i].pays)
  }
}

// Sélectionne un nom aléatoire entre 0 et 20
const randomNumber = Math.floor(Math.random() * 21)
console.log(randomNumber)

// Récupère le nom de l'artiste
const nomArtiste = localStorage.getItem("artiste-" + randomNumber)

// Injecte le nom et le pays de l'artiste dans l'interface HTML
nom.innerHTML = nomArtiste
pays.innerHTML = localStorage.getItem(nomArtiste)
bg.style.backgroundImage = `url('./assets/images/artiste-${randomNumber}.png')`