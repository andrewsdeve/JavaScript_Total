$(document).ready(function(){
    $('button').clic(function(){
        let valorInput = $('input').val();
        alert('El input dice: ' + valorInput);
    })
})