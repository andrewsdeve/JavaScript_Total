/* axios.get('https://jsonplaceholder.typecode.com/posts')
.then(respuesta => console.log(respuesta.data))
.catch(error => console.log(error)); */

let datos = {
    title:'Nuevo Post',
    body: "Mi Contenido"
}

axios.post('https://jsonplaceholder.typecode.com/posts', datos)
.then(respuesta => console.log( "El post Fue creado con Exito" + respuesta.data))
.catch(error => console.log("Error al publicar" + error));