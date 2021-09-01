const btnCadastrar = document.getElementById("btnCadastrar");

btnCadastrar.onclick = ()=>{
    const titulonoticia = document.getElementById("titulonoticia");
    const autornoticia = document.getElementById("autornoticia");
    const datapublicacao = document.getElementById("datapublicacao");
    const texto = document.getElementById("texto");
    const foto = document.getElementById("foto");
    

    fetch("http://localhost:5500/noticia/cadastro",{
        method:"POST", 
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
    alert("Notícia cadastrada com sucesso!");
    titulonoticia.value = "";
    autornoticia.value = "";
    datapublicacao.value = "";
    texto.value = "";
    foto.value = ""
    })
    .catch((erro)=>console.error("Erro ao tentar cadastrar a notícia -> "+erro));
    }