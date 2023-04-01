const parrafo1 = "Las orquídeas u orquidáceas son una familia de plantas monocotiledóneas que se distinguen por la complejidad de sus flores y por sus interacciones ecológicas con los agentes polinizadores y con los hongos con los que forman micorrizas"
const parrafo2 = "Los girasoles u mirasoles familia de las asterácea con sus petalos amarillos y semillas cafes caractesidas por moverse en dirección al sol para recibir su luz y cultivada por ser alimenticia, oleaginosa y ornamental en todo el mundo"
const parrafo3 = "Las rosas son la flor de un grupo de arbustos generalmente espinosos y floridos representantes principales de las rosáceas. Se cultivan como ornamentales por la belleza y fragancia de su flor; pero también para la extracción de aceite esencial, utilizado en perfumería y cosmética, usos medicinales y gastronómicos"
const parrafo4 = "Las margaritas es una planta herbácea de la familia de las asteráceas. sus hojas son verdes y sus flores, muy conocidas: pétalos alargados y blancos, en torno a un botón circular amarillo. muy utilizada a efectos decorativos mezclada con el césped, por sus colores y su resistencia a la siega"
const parrafo5 = "La palma de cera es una palma nativa de los bosques Colombianos. Sus hojas son verde oscuras y grisáceas. El tronco es cilíndrico, liso, cubierto de cera y puede crecer hasta los 70M. su cera se usa para fabricar velas, su tronco como buena madera y su fruto para el ganado"


const titulo = document.getElementById('title');
const Pantalla = document.getElementById('image');
const boton = document.getElementById('buttons');
const parra = document.getElementById('paragraph');

boton.addEventListener('click', function (e) {
    console.log(e);
})

boton.addEventListener('click', function (e) {
    console.log(e.target.attributes[0].value)

    if (e.target.attributes[0].value  == "ORQUÍDEA" ) {
        Pantalla.src = "./imagenes/foto1.png";
        titulo.innerText = e.target.attributes[0].value ;
        parra.innerText = parrafo1
    } else if (e.target.attributes[0].value  == "GIRASOL") {
        Pantalla.src = "./imagenes/foto2.png";
        titulo.innerText = e.target.attributes[0].value ;
        parra.innerText = parrafo2
    } else if (e.target.attributes[0].value  == "ROSA") {
        Pantalla.src = "./imagenes/foto3.png";
        titulo.innerText = e.target.attributes[0].value ;
        parra.innerText = parrafo3
    } else if (e.target.attributes[0].value  == "MARGARITA") {
        Pantalla.src = "./imagenes/foto4.png";
        titulo.innerText = e.target.attributes[0].value ;
        parra.innerText = parrafo4
    } else if (e.target.attributes[0].value  == "PALMA CERA") {
        Pantalla.src = "./imagenes/foto5.png";
        titulo.innerText = e.target.attributes[0].value ;
        parra.innerText = parrafo5
    }
    
})