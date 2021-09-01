window.addEventListener("load",()=>{
    const container = document.getElementById("container");

    var estrutura = "";

    fetch("http://localhost:5500/administradores")
    .then ((response)=>response.json())
    .then ((rs)=>{
rs.output.map((item)=>{
    estrutura+="<div id='linha'>";
    estrutura+="<div id='nome'>"+item.nome+"</div>";
    estrutura+="<div id='email'>"+item.email+"</div>";
    estrutura+="<div id='telefone'>"+item.telefone+"</div>";
    estrutura+="<div id='login'>"+item.login+"</div>";
    estrutura+="<div id='senha'>"+item.senha+"</div>";
    estrutura+="<div id='atualizar'><a href=atualizaradministrador.html?"+item._id+">Atualizar</a></div>";
    estrutura+="<div id='apagar'><a href=apagaradministrador.html?"+item._id+">Apagar</a></div>";
    estrutura+="</div>";
      });
      container.innerHTML = estrutura;
   })
   .catch((erro)=>console.error("Erro ao tentar listar os produtos -> "+erro));
});