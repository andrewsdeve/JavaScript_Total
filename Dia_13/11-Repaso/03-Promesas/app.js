/* PROMESAS: Son objetos que representan un valor y que aun no esta diposnible, una promesa puede tener 3 estados:
1. Pendiente
2. Cumplida
3. Fallida
*/

// PRIMER EJEMPLO => OK

/* let miPromesa = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(error){
            reject('La promesa ha fallado')

        }else{
            resolve('La Promesa se ha cumplido');
        }
        
    },2000)

})

miPromesa.then(function(resultado){
    console.log(resultado);
}).catch(function(error){
    console.log(error);
}); */

// SEGUNDO EJEMPLO => OK

/* let promesa1 = new Promise(function(resolve, reject){
    setTimeout(resolve, 2000 , 'Hola');
});

let promesa2 = new Promise(function(resolve,reject){
    setTimeout(resolve, 4000, 'Mundo..');
});

Promise.all([promesa1,promesa2]).then(function(valores){
    console.log(valores);
});

console.log('El codigo sigue su camino'); */

function obtenerUsuarios(){
    return new Promise(function(resolve,reject){
        let xhr = new  XMLHttpRequest();
        xhr.open('GET','https://jsonplaceholder.typicode.com/users');
        xhr.onload = function(){
            if(xhr.status === 200){
                resolve(JSON.parse(xhr.responseText));
            }else{
                reject(xhr.statusText);
            }
        }
        xhr.send();
    });
}
obtenerUsuarios()
.then(function(usuarios){
    console.log(usuarios);
})
