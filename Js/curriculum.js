
document.getElementById('quienSoy').onclick = function() {
    document.getElementById('miSeccion').style.visibility='visible';
    document.getElementById('infoBotones').innerHTML=' <img id="foto_perfil" src="/imagenes/foto_perfil.jpeg" alt="foto perfil"> <ul id="lista_datos"> <li> nombre : Dwight </li> <li> apellido: Barnett</li> <li> fecha de nacimiento: 5/3/1948</li> <li> mail: dwight.barnett@example.com</li> <li> telefono: (390) 743-2908</li> </ul>';
};

document.getElementById('queMeInteresa').onclick = function() {
    document.getElementById('miSeccion').style.visibility='visible';
    document.getElementById('infoBotones').innerHTML="Hola, me llamo Dwight Barnett, estuve mucho tiempo em distintos tipos de trabajos. En el 2020 gracias a la cuarentena me interese en aprender programacion, y ahora estoy armando mi primer curriculum. me gusta la musica clasica, y practicar deportes";
}

document.getElementById('queMeGusta').onclick = function() {
    document.getElementById('miSeccion').style.visibility='visible';
    document.getElementById('infoBotones').innerHTML=' <iframe id="video" " width="45%" height="75%" src="https://www.youtube.com/embed/jERzLseoAOM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> </iframe>'
}

document.getElementById('contactame').onclick = function() {
    document.getElementById('miSeccion').style.visibility='visible';
    document.getElementById('formulario').style.visibility='visible';
}

  
document.getElementById('dondeEncontrarme').onclick = function (){
    document.getElementById('miSeccion').style.visibility='visible';
    document.getElementById('infoBotones').innerHTML=' Baker Street 221B <img id="foto" src="/imagenes/BakerStreet221b.jpeg" alt="baker street 221b"> ';
}



