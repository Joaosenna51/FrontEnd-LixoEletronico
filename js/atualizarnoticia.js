const btnAtualizar = document.getElementById("btnAtualizar");

window.addEventListener("load",()=>{
var id = window.location.search;
 
id = id.substring(1,id.length);

fetch("http://localhost:5500/noticias/"+id)
.then ((response)=>response.json())
.then((rs)=>{
    document.getElementById("titulonoticia").value=rs.output.titulonoticia;
    document.getElementById("autornoticia").value=rs.output.autornoticia;
    document.getElementById("datapublicacao").value=rs.output.datapublicacao;
    document.getElementById("texto").value=rs.output.texto;
    document.getElementById("foto").value=rs.output.foto;
  })
  .catch((erro)=>console.error("Erro ao tentar carregar os dados da notícia -> "+erro));
});

btnAtualizar.onclick = ()=>{
    var id = window.location.search;
    id = id.substring(1,id.length);

    const titulonoticia = document.getElementById("titulonoticia");
    const autornoticia = document.getElementById("autornoticia");
    const datapublicacao = document.getElementById("datapublicacao");
    const texto = document.getElementById("texto");
    const foto = document.getElementById("foto");

    fetch("http://localhost:5500/atualizar/"+id,{
        method:"PUT",
            headers:{
                accept:"application/json",
                "content-type":"application/json"
            },
            body:JSON.stringify({
                titulonoticia:titulonoticia.value, 
                autornoticia:autornoticia.value, 
                datapublicacao:datapublicacao.value,
                texto:texto.value,
                foto:foto.value
            })
    })

    .then((response)=>response.json())
    .then((rs)=>{
        alert(rs.output);
        titulonoticia.value = "";
        autornoticia.value = "";
        datapublicacao.value = "";
        texto.value = "";
        foto.value = ""
    })
    .catch((erro)=>console.log("Erro ao tentar atualizar a notícia -> "+erro))
}