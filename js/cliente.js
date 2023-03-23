function login(){
    let login = window.document.getElementById('name')
    let res = window.document.getElementById('res')
    let password = window.document.getElementById('password')
    if (login.value.length == 0 && password.value.length == 0){
        window.alert('[ERRO] Digite o login fornecido !')
        res.innerHTML = "Erro ao logar!"
    }if (login.value == 'admin' && password.value == '123'){
        window.alert('Logado com sucesso')
        res.innerHTML = "Logando..!"
    }else{
        window.alert('[Erro] Tente novamente! ')
        res.innerHTML = "Login invalido..!"
    }
    } 
   

