function validarFormulario() {
    let nome = document.getElementById("nome").value;

    let quantidadeErros = 0;

    if(nome.trim().length == 0){
        formError("nome");
        quantidadeErros++;
    alert("O campo nome é obrigatório");
    }

    else{
        reiniciaBorda("nome");
    }


if(quantidadedeErros > 0){
        alert("Existem" + quantidadedeErros + " erros no formulario!");   
        quantidadedeErros = 0;  
    } 
    else{
        alert("Formulario enviado com sucesso!");
        reiniciarTodasAsBordas();
    }
}

function formError(idCampo){
    document.getElementById(idCampo).style.border = "2px solid red";
}



function formError(idCampo){
    document.getElementById(idCampo).style.border = "transparent";
}