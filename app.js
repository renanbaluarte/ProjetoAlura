function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let PesquiInput = document.getElementById("PesquiInput").value;

    let resultados = "";


    for (let dado of dubladores) {
        if (dado.nome.includes(PesquiInput)){
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
        }else if (dado.personagem.includes(PesquiInput)){
            resultados += `
            <div class="item-resultado">
           <h2>
               ${dado.nome}
           </h2>
           
           <p class="descricao">${dado.descricao}</p>
           <p class="descricao">${dado.personagem}</p>
           <a href=${dado.link} target="_blank">Mais informações</a> <br>
           
       </div>
       `   

        }
         
        
    }

    section.innerHTML = resultados;
}