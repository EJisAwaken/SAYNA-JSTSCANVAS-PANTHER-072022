let submit = document.querySelector("#submit");
let msg = document.querySelector("#msg");
let eMail = document.querySelector("#email");
let ligneg = document.querySelector(".ligneg");
let ligned = document.querySelector(".ligned");
let rps1 = document.querySelector("#rps1");
submit.addEventListener("click", send);

// LE SCROLL BAR

window.addEventListener("load", scroll );




 function scroll(){
       ligneg.style.height ="20px";
       ligned.style.height ="20px";
       setInterval(function (){
           let val = 0;
           let lng = ligneg.clientHeight;
           let lnd = ligned.clientHeight;
           while (val<=400){
               ligneg.style.height = `${lng + 2}px`;
               ligned.style.height = `${lnd + 2}px`;
               val++
           }
       }, 1);
   };


function send() { // Le formulaire
    if (msg.value.trim() !== '') {
        alert("Operation effectuée!!")
    }
    else {
        alert("Rempli le formulaire")
    }
}
;

const pictur = document.getElementsByClassName("pictur");
const titre = document.getElementsByClassName("titre");
const para = document.getElementsByClassName("para");

const text = document.getElementsByClassName("txt");
const suivant = document.querySelector(".suivant");


                // js du slide


let data = [
    {
        "titre": "KILLMONGER",
        "texte": "La sauvagerie de N'Jadaka alors qu'il servait dans une unité d'opérations noires de l'armée américaine lui a valu le surnom de Killmonger. D’origine Wakandaise, et se sentant abandoné par sa nation, il cherche à détroner T’Challa dans une quête vers le pourvoir.",
    },
    {
        "titre": "OKOYE",
        "texte": "Okoye est le général des Dora Milaje (groupe d’élite de femmes guerrières) et le chef des forces armées et des renseignements wakandais. Témoin du couronnement de T'Challa, elle se joint à lui dans de nombreuses aventures."
    },
    {
        "titre": "SHURI",
        "texte": "Shuri est la Princesse du Wakanda, la fille de T'Chaka et de Ramonda, la sœur de T'Challa et la leader du Groupe de Design du Wakanda. Innovatrice, elle est chargée de créer une grande partie de la technologie moderne du Wakanda ainsi que les Habits de la Panthère."
    },
    {
        "titre": "NAKIA",
        "texte": "Nakia est une membre des Chiens de Guerre et l'amoureuse de T'Challa. Elle est souvent en mission à travers le monde, assistant aux grandes détresses de nombreux peuples et commence à croire avec force que le Wakanda pourrait activement les aider."
    },
    {
        "titre": "RAMONDA",
        "texte": "Ramonda est la Reine Mère du Wakanda, épouse de T'Chaka et mère de T'Challa et Shuri. Elle se tenait aux côtés de son fils quand il devint le Roi du Wakanda, mais fut forcée de partir en exil lorsque Erik Killmonger vainquit T'Challa et prit le contrôle du trône."
    },
    {
        "titre": "W’kabi",
        "texte": "W'Kabi est l'ancien chef de la sécurité pour la Tribu de la Porte du Wakanda ainsi que l'ancien meilleur ami de T'Challa. Ayant perdu la foi en son roi pour avoir échouer à capturer Ulysses Klaue, l'homme responsable de la mort de ses parents, W'Kabi apporta son soutien à Erik Killmonger et lui permit de prendre le trône du Wakanda"
    },
    {
        "titre": "m’baku",
        "texte": "M'Baku est le chef de la Tribu Jabari, un groupe de Wakandais qui s'étaient écartés de la société principale du Wakanda et un fervant opposant du pouvoir de T'Challa, mais échoua à le vaincre lors de l'affrontement rituel pour le trône, avant de l'aider à défendre le Wakanda face à Erik Killmonger."
    },
    {
        "titre": "ZURI",
        "texte": "Zuri était un ancien membre des Chiens de Guerre et un shaman Wakandais, loyal conseiller de son Roi. Après avoir gardé les secrets de T'Chaka à propos de sa gestion de la mort de N'Jobu dans le passé, Zuri continua à soutenir le Roi du Wakanda alors que T'Challa reprenait le trône."
    },
    {
        "titre": "EVERETT KENNETH ROSS",
        "texte": "L'Agent Everett Ross est un agent de la CIA et un ancien Commissaire Exécutif à l'Antiterrorisme pour la Force Conjointe AntiTerroriste. Après avoir quitté la Force Conjointe AntiTerroriste, Ross fut chargé de traquer et neutraliser Ulysses Klaue, ce qui plaça Ross sur le chemin de Black Panther, qui cherchait à capturer de nouveau Klaue pour ses crimes passés."
    },
    {
        "titre": "ULYSSE KLAUE",
        "texte": "Ulysses Klaue est un criminel international, gangster et vendeur d'armes sur le marché noir. En 1992, il collabora avec N'Jobu afin de voler une quantité importante de vibranium au Wakanda. Bien qu'il soit parvenu à voler et à s'échapper avec un stock important, il reçut une marque sur le cou de la part des Wakandais."
    },

];

let i = 0;
function animation() {
    for (let element of text) {
        element.classList.add("fade");
        setTimeout(function () {
            element.classList.remove("fade");
        }, 500);
    }

    for (let element of pictur) {
        element.classList.add("fade");
        setTimeout(function () {
            element.classList.remove("fade");
        }, 500);
    }
}

function afficheDescription(data) {
    for (let j = 0; j < titre.length; j++) {
        titre[j].textContent = data[j + i].titre;
        para[j].textContent = data[j + i].texte;
    }
}

function affichePhoto() {
    for (let j = 0; j < pictur.length; j++) {
        const index = (j + i) % data.length; // Utilisez l'opérateur % pour calculer l'index correct
        pictur[j].src = `./Pictures/1_Landing_page/Pantherhome_slider_${index + 1}.png`;
    }
}

function chargementCarrousel(data) {
    affichePhoto();
    afficheDescription(data);
    i++;
}

chargementCarrousel(data);

suivant.addEventListener("click", function () {
    if (i < data.length - 2) {
        animation();
        chargementCarrousel(data);
    }
    // gestion des cas particuliers
    else if (i <= data.length - 2) {
        const long = data.length;
        afficheDescription(data);
        pictur[0].src = `./P_${i + 1}.png`;
        pictur[1].src = `./Pictures/1_Landing_page/Pantherhome_slider_${long}.png`;
        pictur[2].src = `./Pictures/1_Landing_page/Pantherhome_slider_1.png`;
        i++;
        animation();
    } else if (i <= data.length - 1) {
        const long = data.length;
        pictur[0].src = `./Pictures/1_Landing_page/Pantherhome_slider_${long}.png`;
        titre[0].textContent = data[i].titre;
        para[0].textContent = data[i].texte;
        pictur[1].src = `./Pictures/1_Landing_page/Pantherhome_slider_1.png`;
        titre[1].textContent = data[0].titre;
        para[1].textContent = data[0].texte;
        pictur[2].src = `./Pictures/1_Landing_page/Pantherhome_slider_2.png`;
        i++;
        animation();
    } else {
        i = 0;
        chargementCarrousel(data);
        animation();
    }
});
