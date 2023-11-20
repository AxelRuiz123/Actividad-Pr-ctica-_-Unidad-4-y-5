

console.log(document.getElementsByTagName("h3"))//a. Mostrar el Número de Artículos que existen en el Documento.
console.log(document.getElementsByTagName("hr"))//b. Identificar líneas divisorias dentro del Documento y número de líneas.
console.log(document.getElementsByTagName("li")) //c. Identificar los elementos de lista dentro del Documento y número de elementos en total.
console.log(document.querySelectorAll("#elemen li"))//d. Identificar elementos de la “Lista Elementos”, número de elementos y código del enlace dentro de dicha lista.
console.log(document.querySelectorAll("#menu a"))//e. Identificar elementos de la lista “Menú”, identificar enlaces y númerode enlaces en dicha lista.
console.log(document.getElementsByTagName("img"))//f. Identificar imágenes dentro del Documento y número de imágenes entotal.
console.log(document.getElementsByClassName("imgAr2")) //g. Identificar imágenes del bloque referente al “Artículo 2”, identificar primera imagen y número total de imágenes dentro de este bloque.
console.log(document.getElementsByClassName("imgAr2")[0])//Referencia a primera imagen articulo 2
console.log(document.getElementsByClassName("imgAr3"))//h. Identificar imágenes del bloque referente al “Artículo 3”, número de imágenes y código referente a la segunda y cuarta imagen del presente bloque.
console.log(document.getElementsByClassName("imgAr3")[1])//Referencia a segunda imagen
console.log(document.getElementsByClassName("imgAr3")[3])//Referencia a cuarta imagen
document.querySelectorAll("a").forEach((el)=>console.log(el)) //i. Identificar enlaces del Documento y número de enlaces en total.
console.log(document.querySelectorAll("a").length) //Numero de enlaces
console.log(document.querySelectorAll("#identificador a"))//j. Identificar enlaces distribuidos dentro del párrafo referente al “Artículo 1” y número de enlaces.


