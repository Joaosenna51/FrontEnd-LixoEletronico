const btnCadastrar = document.getElementById("btnCadastrar");

btnCadastrar.onclick = ()=>{
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const assunto = document.getElementById("assunto");
    const mensagem = document.getElementById("mensagem");
   
    fetch("http://localhost:5500/usuario",{
        method:"POST", 
        headers:{
            accept:"application/json",
        "content-type":"application/json"
        }, 
        body:JSON.stringify({
            nome:nome.value,
            email:email.value,
            telefone: telefone.value,
            assunto:assunto.value,
            mensagem:mensagem.value
            
        })
    })
    .then((response)=>response.json())
    .then((rs)=>{
    alert("Mensagem enviada com sucesso!");
    nome.value = "";
    email.value = "";
    telefone.value = "";
    assunto.value = "";
    mensagem.value = ""
    })
    .catch((erro)=>console.error("Erro ao tentar enviar sua mensagem -> "+erro));
    }