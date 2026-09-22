function validarLogin(){
     
   const usuario = document.getElementById("usuario").value
   const senha = Number(document.getElementById("senha").value)
 
     let situacao
      if(usuario === "login" && senha === 1234){
        situacao = "aprovado"
      } else {
        situacao = "negado"
      
      } 

   const resultado = document. getElementById("resultado");

    document.getElementById("resultado").textContent =
    "| usuario:" + usuario +
    "| senha: " + senha +
    " | situacao: " + situacao;

 



}