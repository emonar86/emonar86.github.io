document.getElementById('quienSoy').onclick = function() {
    document.getElementById('perfil').style.visibility='visible';
};


document.getElementById('queMeInteresa').onclick = function() {
    document.getElementById('recuadro').style.visibility='visible'; 
    document.getElementById('Info').innerHTML="Hola, me llamo Dwight Barnett, estuve mucho tiempo em distintos tipos de trabajos. En el 2020 gracias a la cuarentena me interese en aprender programacion, y ahora estoy armando mi primer curriculum. me gusta la musica clasica, y practicar deportes";
}

document.getElementById('queMeGusta').onclick = function() {
    document.getElementById('video').style.visibility='visible';
}

document.getElementById('contactame').onclick = function() {
    document.getElementById('formulario').style.visibility='visible';
}

  
document.getElementById('dondeEncontrarme').onclick = function (){
    document.getElementById('recuadro').style.visibility='visible'; 
    document.getElementById('Info').innerHTML=" Baker Street 221b ";
}



