/* Solicitudes adicionales que pueden servir para hacer conexion con el servidor

1. GET => bUSCAR INFORMACION
2. POST => Grabar Informacion
3. PUT => Reemplazar o Actualizar
4. DELETE => Cortar y elminar recursos en el servidor
5. PATCH => Actualiza parcialmente un recurso en el servidor
*/


/* 
fetch('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Nuevo titulo',
        body: 'Nueva descripcion'
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

*/


/* 
fetch('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'DELETE',
    })
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
*/


fetch('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Nuevo titulo'
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));