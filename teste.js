function teste() {

    //declaracao de variaveis
    let votosCandidatos1 = 0;
    let votosCandidatos2 = 0;
    let votosCandidatos3 = 0;
    let votosBranco = 0;
    let votosNulos = 0;
    let totalVotos = 0;
    let voto;
    let nomeGanhador= 0;
    let ganhador= true;
    let nomeCandidato1;
    let nomeCandidato2;
    let nomeCandidato3;
    let encerrarVotacao;
    let senhaMesario;

    
    

    console.log('iniciando o programa');

    console.clear();
    console.log('**CONFIGURAÇÃO DA URNA**');

    senhaMesario = parseInt(prompt('Digite sua senha de mesário'));

    senha = parseInt(prompt('Digite sua senha de mesário:'));
    nome1 = prompt('Digite o nome do Candidato 1');
    nome2 = prompt('Digite o nome do Candidato 2');
    nome3 = prompt('Digite o nome do Candidato 3');

    console.log('** nome dos candidatos **');
    console.log('Candidato 1: ' + nome1);
    console.log('Candidato 2: 2' + nome2);
    console.log('Candidato 3: 3' + nome3);


    do {
    console.clear();
    console.log('opcoes de voto');
    console.log('(1) Candidato1');
    console.log('(2) Candidato2');
    console.log('(3) Candidato3');
    console.log('(5) votosBranco');
    console.log('(8) votosNulos');
    console.log('(0) encerrar votacao');

    voto = parseInt(prompt('Digite sua opção de voto'));

    if (voto === 1) {
        votosCandidatos1++;
    } else if (voto === 2) {
        votosCandidatos2++;
    } else if (voto ===3) {
        votosCandidatos3++;
    } else if (voto === 5) {
        votosBranco++;
    } else if (votosNulos=== 8) {
        votosNulos++
    } else if (voto === 0) {


//toUpperCase() O método toUpperCase() retorna o valor da string original convertido em letras maiúsculas//

        encerrarVotacao = prompt('Deseja REALMENTE encerrar a votação? Digite [S] para Sim ou [N] para Não'); toUpperCase();

        if (encerrarVotacao === 'S' && encerrarVotacao !== 'N') {
            alert('Opção Inválida')
            
        }
        totalVotos--;

    } else {

        if (confirm('ATENÇÃO: Seu voto será anulado.Deseja prosseguir?')) {
            votosNulos++;
        } else {
            totalVotos--;
        }
    }

    
    }while (encerrarVotacao !== 'S');

    //se houver votação

    if (totalVotos > 0) {

    }

    console.log("** BOLETIM DE URNA**");
    console.log("Total de votos: " + totalVotos )
    console.log("Total de votos do candidato 1: " + votosCandidatos1 + ' votos (' + votosCandidatos1/totalVotos * 100 + '%');
    console.log("Total de votos do candidato 2: " + votosCandidatos2 + ' votos (' + votosCandidatos2/totalVotos * 100 + '%');
    console.log("Total de votos do candidato 3: " + votosCandidatos3 + ' votos (' + votosCandidatos3/totalVotos * 100 + '%');
    console.log("Total de  votos Brancos: " + votosBranco + ' votos (' + votosBranco/totalVotos * 100 + '%');
    console.log("Total de votos nulos: " + votosNulos + ' votos (' + votosNulos/totalVotos * 100 + '%');

    //determinar ganhador
    if (votosCandidatos1 > votosCandidatos2 && votosCandidatos1 > votosCandidatos3) {
        nomeGanhador = 'Candidato 1';
        votosGanhador = votosCandidatos1 + votosBranco;
        ganahdor = true;
    } else if (votosCandidatos2 > votosCandidatos1 && votosCandidatos2 > votosCandidatos3) {
        nomeGanhador = 'Candidato 2' ;
        votosGanhador = votosCandidatos2 + votosBranco;
        ganahdor =
    } else if ( votosCandidatos3 > votosCandidatos1 && votosCandidatos3 > votosCandidatos2) {
        nomeGanhador = 'Candidato 3' ;
        votosGanhador = votosCandidatos3 + votosBranco;
    } else {
        ganhador = false;


        //exibição de ganhador
        console.log('')
        if (ganhador) {
            console.log('O ganhador dessa urna foi ' + nomeGanhador + ' com' + votosGanhador + ' votos (' + ());
        } else {
            console.log('Não houve ganhador nesta urna (empate entre  2 ou mais candidatos');
        }
    }
    
}