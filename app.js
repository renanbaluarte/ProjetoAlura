// Função responsável por realizar a pesquisa com base no input do usuário
function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa e converte para minúsculas
    let PesquiInput = document.getElementById("PesquiInput").value.toLowerCase(); // Converte para minúsculas

    // Variável para armazenar os resultados encontrados
    let resultados = "";

    // Percorre o array de dubladores
    for (let dado of dubladores) {
        // Converte o nome e o personagem para minúsculas para fazer comparações case-insensitive
        let nomeMinusculo = dado.nome.toLowerCase();
        let personagemMinusculo = dado.personagem.toLowerCase();

        // Verifica se o valor do input está contido no nome ou no personagem
        if (nomeMinusculo.includes(PesquiInput) || personagemMinusculo.includes(PesquiInput)) {
            // Se encontrar uma correspondência, adiciona o HTML formatado à variável 'resultados'
            resultados += `
             <div class="item-resultado">
                <h2>
                    ${dado.nome} <!-- Exibe o nome do dublador -->
                </h2>
                <p class="descricao">${dado.descricao}</p> <!-- Exibe a descrição do dublador -->
                <p class="descricao">${dado.personagem}</p> <!-- Exibe o personagem dublado -->
                <a href=${dado.link} target="_blank">Mais informações</a> <br> <!-- Link para mais detalhes -->
            </div>
            `;
        }
    }

    // Atualiza o conteúdo da seção de resultados com os itens encontrados
    section.innerHTML = resultados;
}
