var alunos = document.querySelectorAll(".aluno");

for(var i = 0; i < alunos.length; i++){
    var aluno = alunos[i];

    media = aluno.querySelector(".info-media").textContent;
    var tdStatus = aluno.querySelector(".info-status");
    console.log(tdStatus);
    

    if(media >= 7.0){
        tdStatus.textContent = "Aprovado(a)";
        tdStatus.classList.add("aprovado");
    }else{
        tdStatus.textContent = "Reprovado(a)";
        tdStatus.classList.add("reprovado");
    }

}