const wrapper = document.querySelector('[data-id="wrapper"]');
const input = document.querySelector('[type="text"]');
const changeUser = document.querySelector('[data-id="name"]');

const section = document.querySelector('.section');
const buttonShow = document.querySelector('[data-id="button-show"]');
const buttonHide = document.querySelector('[data-id="button-hide"]');

input.addEventListener('change',function(){
    changeUser.textContent = event.target.value;
})

function showSection(event){
    console.log(event.type);
    console.log(event.target);
    wrapper.className = "show";
}

function hideSection(){
    wrapper.className = "hide";
}

buttonShow.addEventListener('click',showSection);
buttonHide.addEventListener('click',hideSection );