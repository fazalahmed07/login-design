const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnlogin = document.querySelector('.btn-login');
const xclose = document.querySelector('.close');

registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
btnlogin.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

xclose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});
