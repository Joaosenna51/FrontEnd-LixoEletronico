window.addEventListener("load",()=>{
    var id = window.location.search;
    id = id.substring(1,id.length);

    if(confirm("Você deseja realmente deseja apagar todos os dados desse usuário?")==true){
        fetch("http://localhost:5500/apagar/"+id,{
             method:"DELETE",
             headers:{
                 accept:"application/json",
                 "content-type":"application/json"
             }
        })
        .then(()=>{
            alert("Todos os dados do usuário foram apagados com sucesso!");
            window.history.back();
            
        })
        .catch((erro)=>console.error("Erro ao tentar apagar os dados do usuário -> "+erro));
    }
    else{ 
        window.history.back();
    }
})