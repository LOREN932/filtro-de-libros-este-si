const libros = [{
    titulo: "Cien años de soledad",
    autor:"Gabriel Garcia Marquez",
    precio:1000,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/100-a%C3%B1os-de-soledad-150x150lifederimagen.jpg"
},{
    titulo: "El señor de las moscas",
    autor:"William Golding",
    precio:800,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/El-se%C3%B1or-de-las-moscaslifederimagen.jpg"
},{
    titulo: "Viaje al centro de la tierra",
    autor:"Julio Verne",
    precio:600,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/Viaje-al-centro-de-la-tierra-150x150lifederimagen.jpg"
},
{
    titulo: "Don Quijote de la Mancha",
    autor:"Miguel de Cervantes",
    precio:1000,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/Don-Quijote-de-la-Mancha-150x150lifederimagen.jpg"
},
{
    titulo: "Moby Dick",
    autor:"Herman Melville",
    precio:400,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/Moby-Dick-150x150lifederimagen.jpg"
},
{
    titulo: "El viejo y el mar",
    autor:"Ernest Hemingway",
    precio:800,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/El-viejo-y-el-mar-150x150lifederimagen.jpg"
},
{
    titulo: "Veinte mil leguas de viaje submarino",
    autor:"Julio Verne",
    precio:400,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/veinte-mil-leguaslifederimagen.jpg"
}];


//Tu codigo JS va acá

//obtener elementos 
let obtener_autor= document.getElementById("autor");
let obtener_libro= document.getElementById("libros");


function filtrar_autor(libros,autor){ //funcion filtrar_autor
    let libro_filtrado= libros.filter(libro => libro.autor===autor);
return libro_filtrado;


}//fin de la funcion filtrar_autor


function mostrar_filtrados(){ //funcion mostrar_filtrados
    let array=filtrar_autor(libros,obtener_autor.value); 
    obtener_libro.innerHTML=""; //reestablecer 
    array.forEach(elemento => {
        obtener_libro.innerHTML += 
        `<div class="card border-2 border-primary" style="width: 30%;">
        <img  src="${elemento.url}"  style="margin-top:5px;"   alt="">
          <h6 style="margin: 3%">Titulo: ${elemento.titulo}</h6>
          <p  style="margin: 3%" >Autor: ${elemento.autor}</p>
          <p style="margin: 3%" >Precio: ${elemento.precio}</p>
      </div>`
    });
} //fin de la funcion mostrar_filtrados