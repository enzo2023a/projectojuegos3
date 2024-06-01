

function iniciar(){
    var correo="enzoaguirre2018@outlook.com";
    var password="makalle";
    var email=document.getElementById("email").value;
    var contraseña=document.getElementById("contraseña").value
    if(correo==email && password==contraseña){
        location.href="index.html"
    }else{
        document.getElementById("error").innerHTML="el correo o la contraseña son incorrectas";
    }
}

document.getElementById("cerrar").onchange = function() {
    var selectedOption = this.value;
    if (selectedOption !== "") {
      location.href = selectedOption;
    }
  };

  let contenedordeJuegos=document.getElementById("juego");

  fetch("https://rickandmortyapi.com/api/character")
  .then((response)=>response.json())
  .then((datos)=>{
    console.log(datos)
    console.log(datos.result)
    datos.results.forEach((elementos) => {
       const contenedorCreado=document.createElement("div");
       contenedorCreado.classList.add("personaje");

       contenedorCreado.innerHTML=`
       <h3>${elementos.name}</h3>
       <img src="${elementos.image}">
       

        `;
        contenedordeJuegos.append(contenedorCreado)
       
    });


  })

  function inicio(){
    window.location.assign("login.html");
  }