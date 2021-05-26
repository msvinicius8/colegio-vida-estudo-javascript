var alunos = document.querySelectorAll(".aluno");

for(var i = 0; i < alunos.length; i++){
    var aluno = alunos[i];

    var primeiro = aluno.querySelector(".info-1b").textContent;

    var segundo = aluno.querySelector(".info-2b").textContent;

    var terceiro = aluno.querySelector(".info-3b").textContent;

    var quarto = aluno.querySelector(".info-4b").textContent;

    var media = calculaMedia(primeiro, segundo, terceiro, quarto);

    tdMedia = aluno.querySelector(".info-media");

    tdMedia.textContent = media;

}

function calculaMedia(primeiro, segundo, terceiro, quarto){
    var media = 0;
    a = parseFloat(primeiro);
    b = parseFloat(segundo);
    c = parseFloat(terceiro);
    d = parseFloat(quarto);

    media = (a + b + c + d) /4;

    return media.toFixed(1);
}