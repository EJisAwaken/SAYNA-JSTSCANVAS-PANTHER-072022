let questionT = [
    "Prouve ton talent d’espion et déchiffre cette réplique d’Okoyé écrite en Wakandais, et apprend par la même occasion la première valeur d’une Dora Milaje! ",
  "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de chiffrement par décalage . L’alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase :",
  "Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film "
]

let resultat = [
  "SI JE SUIS FIDELE C'EST CE TRONE PEU IMPORTE QUI MONTE DESSUS",
  "LE FILM DEBUTE A OACKLAND EN CALIFORNIE. IL SAGIT DE LA VILLE DONT EST ORIGINAIRE RYAN COOGLER ET EGALEMENT LA VILLE QUI A VU NAITRE LE MOUVEMENT POLITIQUE DES BLACK PANTHERS",
  "LE ROILION",
];

let probleme = [
  " SI   JE   SUIS   FIDELE   C'EST   A   CE   TRONE   PEU   IMPORTE   QUI   MONTE   DESSUS ",
    "Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt aioqb lm ti dqttm lwvb mab wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmz",
    "01001100 01000101 00100000 01010010 01001111 01001001 00100000 01001100 01001001 01001111 01001110 00001101 00001010"
]

let indices = [
    "a",
    "Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans une phrase. Et si tu regardais quel symbole revient le plus souvent pour en déduire son décalage dans l’alphabet ? ",
    "Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. C'est en quelque sorte l'ancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchainement précis de ces deux lettres, tandis que le système binaire informatique utilise 0 et 1"

]


let reponse = document.querySelector("#reponse");
let btn2 = document.querySelector("#btn2");
let titre = document.querySelector("#enigme-titre");
let numero = document.querySelector("#numero");
let prb = document.querySelector("#rps1");
let sujet = document.querySelector("#sujet");
let droite = document.querySelector("#titledroite");
let contenuDroite = document.querySelector("#lettre");
let i = 1;
let score = 0;

function send() {
  // Le formulaire
  if (reponse.value.trim() !== "") {
    alert("Operation effectuée!!");
  } else {
    alert("Rempli le formulaire");
  }
}




function check() {
  if ((i <= resultat.length)) {
        if ((reponse.value === resultat[i - 1] )) {
          alert("C'est la bonne reponse");
          score++;
          alert(score);
          numero.innerHTML = `${i + 1}`;
        } else {
          numero.innerHTML = `${i + 1}`;
            alert("Votre reponse est fausse");

        }

    if ((i === 1)) {
        sujet.innerText=questionT[i-1];
        prb.innerText = probleme[i];
        prb.style.fontFamily="Arial Black";
        prb.style.color="white";
        droite.innerText = "Le savais-tu";
        contenuDroite.innerText=indices[i];
    }
    else if ((i === 2)) {
        sujet.innerText=questionT[i-1]
        prb.innerText = probleme[i];
      prb.style.fontFamily="Arial Black";
      prb.style.color="white";
      contenuDroite.innerText=indices[i];
    }

    else if (i===3){
        numero.innerText="3";
        btn2.innerText = "Voir mon resultat"
    }
    i++;
    
  }
  else {
    alert("Votre score est : " + score + "/3");
  }
}

btn2.addEventListener("click", check);
// btn2.addEventListener("click", send);
