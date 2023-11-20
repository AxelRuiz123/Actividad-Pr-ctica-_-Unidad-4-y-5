

// variables
var imaCI, imagCF, miBody,imagCF2,imagCF3,imagCF4;

imaCI = document.getElementById("imaC");
imagCF = document.getElementById("imag"); // onmouseup - onmousedown
miBody=document.getElementsByTagName("body"); // onmouseup - onmousedown - onselect
imagCF2 = document.getElementById("imag2"); // onmouseup - onmousedown
imagCF3 = document.getElementById("imag3"); // onmouseup - onmousedown
imagCF4 = document.getElementById("imag4"); // onmouseup - onmousedown


// EVENTO onmouseup y onmousedown
	imagCF.onmousedown = function(){
    miBody[0].setAttribute("class","fnaranja");
	imaCI.src = "bobto.png";
}



imagCF.onmouseup = function(){
miBody[0].setAttribute("class","fblanco");
//imaCI.src = "unam.jpg";
imaCI.setAttribute("src","pina.png"); //otra forma de aplicar la línea anterior
}


// EVENTO onmouseup y onmousedown
	imagCF2.onmousedown = function(){
    //miBody[0].setAttribute("class","fnaranja");
	imaCI.src = "calamardo.png";
}


imagCF2.onmouseup = function(){
//miBody[0].setAttribute("class","fblanco");
imaCI.src = "pina.png";
//imaCI.setAttribute("src","pina.png"); //otra forma de aplicar la línea anterior
}


// EVENTO onmouseup y onmousedown
	imagCF3.onmousedown = function(){
    //miBody[0].setAttribute("class","fnaranja");
	imaCI.src = "patricio.png";
}


imagCF3.onmouseup = function(){
//miBody[0].setAttribute("class","fblanco");
imaCI.src = "pina.png";
//imaCI.setAttribute("src","pina.png"); //otra forma de aplicar la línea anterior
}


// EVENTO onmouseup y onmousedown
	imagCF4.onmousedown = function(){
    //miBody[0].setAttribute("class","fnaranja");
	imaCI.src = "arenita.png";
}


imagCF4.onmouseup = function(){
//miBody[0].setAttribute("class","fblanco");
imaCI.src = "pina.png";
//imaCI.setAttribute("src","pina.png"); //otra forma de aplicar la línea anterior
}


//EVENTO onselect
var cajas;
cajas=document.getElementsByName("cajaC"); //onselect

cajas[0].onselect = function(){
	miBody[0].setAttribute("class","crojo");
}

cajas[1].onselect = function(){
	miBody[0].setAttribute("class","cverde");
}

cajas[2].onselect = function(){
	miBody[0].setAttribute("class","cblanco");
}

