const color = document.getElementById('color');

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

let n = 0;

setInterval(()=>{
     n = Math.random()*13;
    n=Math.round(n);
     color.style.backgroundColor= couleurs[n];
    },1000);