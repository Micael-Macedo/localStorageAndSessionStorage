// 1 - Inserir Dado 
localStorage.setItem("name", "Micael");

// 2 - reestart sem perder dados

// 3 - resgatar item
const nome = localStorage.getItem("name")

// 4 - resgatar item que não existe
const lastName = localStorage.getItem("lastName")
if(!lastName){
    console.log("sobrenome não existe")
}else{
    console.log(lastName);
}

// 5 - remover item
localStorage.removeItem("name") 

// 6 - limpar todos os itens
//obs- por mais que o valor seja do tipo numerico,  ele retorna do tipo string
localStorage.setItem("a", 1) 
localStorage.setItem("b", 2)

localStorage.clear()

// 7 - session storage
sessionStorage.setItem("atuacao", "fullstack");

// 8 - reestart sem perder dados

// 9 - resgatar item
const atuacao = sessionStorage.getItem("atuacao")

// 10 - resgatar item que não existe
const idade = sessionStorage.getItem("idade")
if(!idade){
    console.log("sobrenome não existe")
}else{
    console.log(idade);
}

// 10 - remover item
sessionStorage.removeItem("atuacao") 

// 11 - limpar todos os itens
//obs- por mais que o valor seja do tipo numerico,  ele retorna do tipo string
sessionStorage.setItem("a", 1) 
sessionStorage.setItem("b", 2)

sessionStorage.clear()

// 12 - criando objetos
pessoa = {
    "nome": "Micael Macedo",
    "idade": 20,
    "altura": 1.85,
    "profissao": "DEV"
}
localStorage.setItem("pessoa", JSON.stringify(pessoa));
let storagePessoa = JSON.parse(localStorage.getItem("pessoa"));
console.log(storagePessoa)
