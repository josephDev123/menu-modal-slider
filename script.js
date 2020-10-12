// DOM
const bars = document.querySelector('.bars');
const times = document.querySelector('.times_btn');
const sign_up = document.querySelector('.signUp_btn');
const modal = document.querySelector('.container');

// showing nav bar
bars.addEventListener('click', ()=>{
    document.body.classList.toggle('showNav')
})


// displaying modal
sign_up.addEventListener('click', ()=>{
    modal.classList.add('display_modal')
})


// removing modal
times.addEventListener('click', ()=>{
    modal.classList.remove('display_modal')
})


// removing modal by clicking anywhere in the window
window.addEventListener('click', (e)=>{
    e.target===modal? modal.classList.remove('display_modal'):false;


})