const header=document.querySelector('.header');
const headerroffsetTop=header.offsetTop;

window.addEventListener('scroll', ()=>{
     
    if(window.scrollY >= headerroffsetTop){
        header.style.position='fixed';
        header.style.top=0;
        header.style.width='100%';
        
    }else{
        header.style.position='static';
    }
});

// Media query

const burger=document.querySelector('.img_burger');
const navbar=document.querySelector('.navbar');
const div_menu=document.querySelector('.div_menu');
const btnclose=document.querySelector('.img_close');
const Liscroll=document.querySelectorAll('.lien1');
const div_submenu=document.querySelector('.div_submenu');


burger.addEventListener("click", ()=>{
    div_menu.style.display='block';
    div_menu.style.width='100%';
    btnclose.style.display='block';
});

btnclose.addEventListener("click", ()=>{
    div_menu.style.display='none';
    btnclose.style.display='none';
});

// Liscroll.addEventListener("click", ()=>{
//     div_submenu.style.display='block';
// });




