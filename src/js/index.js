/*
Objetivo 1 - quando passar o mouse  em cima do personagem temos que: 
    - colocar a classe selecionado no personagem em questão  pra colocar a animação nele 
    - retirar a classe selecionada do personagem que estava previamente selecionada.

Objetivo 2 - trocar a imagem e o nome do personagem grande quando passarmos o mouse em cima
    - alterar a imagem do jogador 1
    - alterar o nome do jogador 1
*/

/*
Objetivo 1 - quando passar o mouse  em cima do personagem temos que: 
    - colocar a classe selecionado no personagem em questão  pra colocar a animação nele 
    - retirar a classe selecionada do personagem que estava previamente selecionada.
*/

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'ultron') return;

        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')


        /*
            Objetivo 2 - trocar a imagem e o nome do personagem da listagem quando passarmos o mouse em cima
                - alterar a imagem do jogador 1
                - alterar o nome do jogador 1
        */        
        const imagemJogador1 = document.getElementById('personagem-jogador-1')
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`

        const nomeJogador1 = document.getElementById('nome-jogador-1')
        const nomeSelecionado = personagem.getAttribute('data-name')
        nomeJogador1.innerHTML = nomeSelecionado;
    })
})



