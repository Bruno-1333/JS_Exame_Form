function valider() {
    let mdp = document.getElementById("mdp").value;
    let nom = document.getElementById("username").value;
    let msgErreur = document.getElementById("erreur_mdp")
    if (nom === mdp) {
        msgErreur.classList.remove("invisible")
        return false;
    } else {
        msgErreur.classList.add("invisible")
        return true;
    }
}

/* Este é o código JavaScript para validar o formulário. A função "valider" recupera o valor do campo "mdp" e "nom" através de "document.forms [0] ['mdp'].value" e "document.forms [0] ['nom'].value".
 Em seguida, ele recupera o elemento com ID "erreur_mdp" e armazena-o na variável "msgErreur".

 Se "nom" for igual a "mdp", a classe "invisible" é removida da variável "msgErreur" e a função retorna falso.
 Caso contrário, a classe "invisible" é adicionada à variável "msgErreur" e a função retorna verdadeiro.

 Este código é responsável por verificar se o nome e a senha são iguais e, se sim, exibir uma mensagem de erro.*/