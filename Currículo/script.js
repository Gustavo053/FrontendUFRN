function validar(form){
    if(form.nome.value == ""){
        alert("Por favor, preencha o campo nome");
        form.nome.focus();
        return false;
    }else if(form.email.value == ""){
        alert("Por favor, preencha o campo e-mail");
        form.email.focus();
        return false;
    }else if(form.numero.value == ""){
        alert("Por favor, preencha o campo número");
        form.numero.focus();
        return false;
    }else if(form.mensagem.value == ""){
        alert("Por favor, preencha o campo mensagem");
        form.mensagem.focus();
        return false;
    }else{
        return true; 
    }
}