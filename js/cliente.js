
let container = window.document.getElementById('container1');
container.style.display = "none"
function login(){
    let login = window.document.getElementById('name');
    let res = window.document.getElementById('res');
    let password = window.document.getElementById('password');
    let button = window.document.getElementById('action-btn1');
    let cliente = window.document.getElementById('cliente')
    if (login.value.length == 0 && password.value.length == 0){
        window.alert('[ERRO] Digite o login fornecido !');
        res.innerHTML = "Erro ao logar!"
    }if (login.value == 'cliente' && password.value == '123'){
        window.alert('Logado com sucesso');
        res.innerHTML = "Logado..!"
        container.style.display ="block"
        cliente.style.display = "none"
    }else{
        window.alert('[Erro] Tente novamente! ');
        res.innerHTML = "Login invalido..!"
    }
};




