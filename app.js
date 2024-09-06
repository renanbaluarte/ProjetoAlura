

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let PesquiInput = document.getElementById("PesquiInput").value.toLowerCase(); // Converte para minúsculas

    let resultados = "";

    for (let dado of dubladores) {
        // Converte nome e personagem para minúsculas para fazer a comparação
        let nomeMinusculo = dado.nome.toLowerCase();
        let personagemMinusculo = dado.personagem.toLowerCase();

        // Verifica se o input está incluído no nome ou personagem
        if (nomeMinusculo.includes(PesquiInput) || personagemMinusculo.includes(PesquiInput)) {
            resultados += `
             <div class="item-resultado">
                <h2>
                    ${dado.nome}
                </h2>
                <p class="descricao">${dado.descricao}</p>
                <p class="descricao">${dado.personagem}</p>
                <a href=${dado.link} target="_blank">Mais informações</a> <br>
            </div>
            `;
        }
    }

    section.innerHTML = resultados;
}
