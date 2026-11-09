const color = document.getElementById('color');
const compteur=document.getElementById('compteur');

const couleurs = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "black",
    "white",
    "gray",
    "brown",
    "cyan",
    "magenta"
];


color.style.backgroundColor= couleurs[0];
let n = 0;
let count = 0;
color.addEventListener('click',()=>{
    n = Math.floor(Math.random() * couleurs.length)
    count+=1;
    compteur.textContent = 'compteur :'+count;
    color.style.backgroundColor= couleurs[n];
});