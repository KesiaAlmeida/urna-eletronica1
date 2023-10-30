function dataHoraAual() {
    const dataHora = new Date();


    return `${dataHora.getDate()}/${getMonth() + 1}/${getFullYear}/${getHours}:${getMinutes}:${getSeconds} ${getMilliseconds}`;
}

function verificarIntegridadeUrna( {

    fetch('teste.js')
    .then(conteudo => {conteudo.text()})
    .then(conteudo => {CryptoJS.SHA256(conteudo).ToString()})
    .then(hashUrnaAtual => {
        fetch(hashVerificado => {console.log(hashVerificado)})
    });
})


function urnaEletronica() {

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
    let primeiraConfiguração = true;

}

    
    

    console.log('iniciando o programa');

    console.clear();
    console.log('**CONFIGURAÇÃO DA URNA**');

    senhaMesario = parseInt(prompt('Digite sua senha de mesário'));

    do {
        nomeCandidato1 = prompt('Digite o nome do candidato 1:');
        nomeCandidato2 = prompt('Digite o nome do candidato 2:');
        nomeCandidato3 = prompt('Digite o nome do candidato 3:');
        
        console.log('** NOME DOS CANDIDADTOS **');
        console.log('Candidato 1: ' + nome1);
        console.log('Candidato 2: 2' + nome2);
        console.log('Candidato 3: 3' + nome3);
        
    } while (!confirm('Se os nomes dos candidadtos estão corretos, clique em OK para confirmar ou CANCELAR para voltar e digitar novamente'));

    do {

    console.clear();
    console.log('opcoes de voto');
    console.log('[1] Candidato 1: ' + nomeCandidato1);
    console.log('[2] Candidato 2: ' + nomeCandidato2);
    console.log('[3] Candidato 3: ' + nomeCandidato3);
    console.log('[5] Voto em branco');

    voto = parseInt(prompt('Digite sua opção de voto'));

    totalVotos++;

    if (voto === 1) {
        votosCandidatos1++;
    } else if (voto === 2) {
        votosCandidatos2++;
    } else if (voto ===3) {
        votosCandidatos3++;
    } else if (voto === 5) {
        votosBranco++;
    } else if (votosNulos=== 0) {
        return;
    } else if (voto === senhaMesario) {

        //segundo passo de confirmação para encerrar

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

    
    } while (encerrarVotacao !== 'S');

    // Saída para o usuário: boletim de urna
    console.clear();
    console.log('** BOLETIM DE URNA **');
    console.log('Total de votos: ' + totalVotos);

    // se houver votação
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
        votosGanhador = votosCandidatos1 + votosBrancos;
    } else if (votosCandidatos2 > votosCandidatos1 && votosCandidatos2 > votosCandidatos3) {
        nomeGanhador = 'Candidato 2' ;
        votosGanhador = votosCandidatos2 + votosBranco;
    } else if ( votosCandidatos3 > votosCandidatos1 && votosCandidatos3 > votosCandidatos2) {
        nomeGanhador = 'Candidato 3' ;
        votosGanhador = votosCandidatos3 + votosBranco;
    } else {
        ganhador = false;


        //exibição de ganhador
    console.log('');
    if (ganhador) {
        console.log('O ganhador dessa urna foi ' + nomeGanhador + ' com' + votosGanhador + ' votos (votosGanhador / totalVotos * 100).toFixed(2) + %);
    } else {
        console.log('Não houve ganhador nesta urna (empate entre  2 ou mais candidatos');
    }

    } else {
        console.log('Não houve votação nessa urna');
    }

    console.log('Fim do programa');
    
