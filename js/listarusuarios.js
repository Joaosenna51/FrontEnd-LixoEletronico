  
window.addEventListener("load",()=>{
    const container = document.getElementById("container");

    var estrutura = "";

    fetch("http://localhost:5500/usuarios")
    .then ((response)=>response.json())
    .then ((rs)=>{
     rs.output.map((item)=>{
    estrutura+="<div id='linha'>";
    estrutura+="<div id='nome'>"+item.nome+"</div>";
    estrutura+="<div id='email'>"+item.email+"</div>";
    estrutura+="<div id='telefone'>"+item.telefone+"</div>";
    estrutura+="<div id='assunto'>"+item.assunto+"</div>";
    estrutura+="<div id='mensagem'>"+item.mensagem+"</div>";
    estrutura +="<div id='apagar'><a href=apagarusuario.html?"+item._id+">Apagar</a></div>";
    estrutura+="</div>";
    });
      container.innerHTML = estrutura;
   })
   .catch((erro)=>console.error("Erro ao tentar listar usuários e mensagens -> "+erro));
});