const check = document.getElementById('check');
const carre = document.getElementById('color');
let n = 0;
check.addEventListener('click',()=>{
    n=(n+1)%2;
    if(n%2==0){
        carre.style.visibility='hidden';
    }else{
        carre.style.visibility='visible';
    }
    
});