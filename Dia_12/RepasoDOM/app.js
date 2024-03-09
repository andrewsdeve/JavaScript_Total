const wrapper = document.body.children[0];
const div = wrapper.children[1];
const h1 = div.previousElementSibling;
const anchor = div.children[1];
anchor.addEventListener('click', function(){
    h1.textContent = "Estoy siendo Modificado"
})