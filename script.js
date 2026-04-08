function verificarVol1(){
  let clave = document.getElementById("clave1").value.toUpperCase();
  if(clave === "INICIO"){ window.location.href = "vol2.html"; }
  else{ alert("Clave incorrecta"); }
}

function verificarVol2(){
  let clave = document.getElementById("clave2").value.toUpperCase();
  if(clave === "LA VERDAD ESTA OCULTA"){ window.location.href = "vol3.html"; }
  else{ alert("Sigue intentando..."); }
}
