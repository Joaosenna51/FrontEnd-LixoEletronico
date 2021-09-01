const btnAtualizar = document.getElementById("btnAtualizar");

window.addEventListener("load",()=>{
var id = window.location.search;
id = id.substring(1,id.length);

fetch("http://localhost:5500/administradores/"+id)
.then ((response)=>response.json())
.then((rs)=>{
    document.getElementById("nome").value=rs.output.nome;
    document.getElementById("email").value=rs.output.email;
    document.getElementById("telefone").value=rs.output.telefone;
    document.getElementById("login").value=rs.output.login;
    document.getElementById("senha").value=rs.output.senha;
  })
  .catch((erro)=>console.error("Erro ao tentar carregar os dados do administrador ->"+erro))
});

btnAtualizar.onclick = ()=>{
    var id = window.location.search;
    id = id.substring(1,id.length);

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const login = document.getElementById("login");
    const senha = document.getElementById("senha");

    fetch("http://localhost:3350/atualizar/"+id,{
        method:"PUT",
            headers:{
                accept:"application/json",
                "content-type":"application/json"
            },
            body:JSON.stringify({
                nome:nome.value, 
                email:email.value, 
                telefone:telefone.value,
                login:login.value,
                senha:senha.value
            })
    })

    .then((response)=>response.json())
    .then((rs)=>{
        alert(rs.output);
        nome.value = "";
        email.value = "";
        telefone.value = "";
        login.value = "";
        senha.value = ""
    })
    .catch((erro)=>console.log("Erro ao tentar atualizar os dados do administrador -> "+erro))
}
