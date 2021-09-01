const btnCadastrar = document.getElementById("btnCadastrar");

btnCadastrar.onclick = ()=>{
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const login = document.getElementById("login");
    const senha = document.getElementById("senha");
   
    fetch("http://localhost:5500/colaborador",{
        method:"POST", 
        headers:{
            accept:"application/json",
        "content-type":"application/json"
        }, 
        body:JSON.stringify({
            nome:nome.value,
            email:email.value,
            telefone: telefone.value,
            login:login.value,
            senha:senha.value
            
        })
    })
    .then((response)=>response.json())
    .then((rs)=>{
    alert("Colaborador cadastrado com sucesso!");
    nome.value = "";
    email.value = "";
    telefone.value = "";
    login.value = "";
    senha.value = ""
    })
    .catch((erro)=>console.error("Erro ao tentar cadastrar o colaborador -> "+erro));
    }