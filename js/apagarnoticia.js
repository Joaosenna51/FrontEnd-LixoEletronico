window.addEventListener("load",()=>{
    var id = window.location.search;
    id = id.substring(1,id.length);

    if(confirm("Você deseja realmente deseja apagar essa notícia?")==true){
        fetch("http://localhost:5500/apagar/"+id,{
             method:"DELETE",
             headers:{
                 accept:"application/json",
                 "content-type":"application/json"
             }
        })
        .then(()=>{
            alert("Notícia apagada com sucesso!");
            window.history.back();
            
        })
        .catch((erro)=>console.error("Erro ao tentar apagar a notícia ->"+erro));
    }
    else{ 
        window.history.back();
    }
})