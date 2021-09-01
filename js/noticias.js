window.addEventListener("load",()=>{

    const container = document.getElementById("container");
    var estrutura = "<div id='listarNoticias'>";
    
    fetch("http://localhost:5500/noticias")
    .then((response)=>response.json())
    .then((dados)=>{
    
        dados.output.map((item)=>{
        estrutura += "<div id='noticia'>";
        estrutura += "<div id= 'foto'><img src="+item.foto+"></div>";
        estrutura += "<div id='conteudo'>";
        estrutura += "<h2>"+item.titulonoticia+"</h2>";
        estrutura += "<p>"+item.autornoticia+"</p>";    
        estrutura += "<p>"+item.datapublicacao+"</p>";
        estrutura += "<p><a>Leia mais... </a></p>";
        estrutura += "<p id='materia'>"+item.texto+"</p>";
        // fecha a DIV do conteúdo
        estrutura += "</div>";
        // fecha a DIV da notícia
        estrutura += "</div>";
        
    });
    
    // finaliza a lista de notícias 
        estrutura += "</div>"
        container.innerHTML = estrutura;
    })
    
    .catch((erro)=>console.error("Erro ao carregar notícias -> "+erro));
    
    });