function urnaEletronica() {

    let opcao; contadorTotalDeVotos = 0;

    do {

        console.log('Repetição', contadorTotalDeVotos);

        opcao = parseInt(prompt("digite a opcao: "));

        contadorTotalDeVotos++;

    } while (opcao !== 0);

    contadorTotalDeVotos--;

    console.log("contagem:" , contadorTotalDeVotos);
        
    }
        
