/* PROMESAS:
    1. Una promesa puede tener 3 estados
        1.1 Pendiente
        1.2 Cumplida
        1.3 Fallida
*/


let miPromesa = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(error){
            reject('La promesa ha fallado')
        }else{
            resolve('La promesa se ha cumplido');
        }
        
    })
})

miPromesa.then(function(resultado){
    console.log(resultado);
}).catch(function(error){
    console.log(error);
});

