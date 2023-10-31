 function dataHoraAtual() {
    const dataHora = new Date();


    return `${dataHora.getDate()}/${dataHora.getMonth() + 1}/${dataHora.getFullYear()} ${dataHora.getHours()}:${dataHora.getMinutes()}:${dataHora.getSeconds()} ${dataHora.getMilliseconds()}ms`;
}

function verificarIntegridadeUrna() {

    // Biblioteca CryptoJS: https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js

    fetch('./urnaEletronica.js')
    .then(conteudo => conteudo.text())
    .then(conteudo => CryptoJS.SHA256(conteudo).toString())
    .then(hashUrnaAtual => {
        fetch('./hashVerificado')
            .then(conteudo => conteudo.text())
            .then(hashVerificado => {
                if (hashUrnaAtual === hashVerificado) {
                    console.log('Hash verificado, urna íntegra.')
                } else {
                    console.log('HASHES DIFERENTES, URNA ADULTERADA!');
                    console.log(`Hash esperado: ${hashVerificado}`);
                    console.log(`Hash da urna: ${hashUrnaAtual}`);
                }
            })
    }); 

}

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
    let votosGanhador;
    let ganhador = true;

    let nomeCandidato1;
    let nomeCandidato2;
    let nomeCandidato3;

    let encerrarVotacao;
    let senhaMesario;
    let primeiraConfiguração = true;
    let dataHoraInicial;
    let dataHoraFinal;

    console.log(`Inicio do programa`);
    dataHoraInicial = dataHoraAtual();

    console.clear();
    console.log(`** CONFIGURAÇÃO DA URNA **`);

    senhaMesario = parseInt(prompt('Digite sua senha de mesário'));

    do {
        if (primeiraConfiguração) {
            nomeCandidato1 = prompt('Digite o nome do candidato 1:');
            nomeCandidato2 = prompt('Digite o nome do candidato 2:');
            nomeCandidato3 = prompt('Digite o nome do candidato 3:');
            primeiraConfiguração = false;
        } else {
            opcaoNome = parseInt(prompt(`
            Qual nome deseja alterar?\n\n 
            [1] ${nomeCandidato1} \n
            [2] ${nomeCandidato2} \n
            [3] ${nomeCandidato3} \n
        `));

        if (opcaoNome === 1) {
            nomeCandidato1 = prompt(`Digite o nome do candidato 1:`);
        } else if (opcaoNome === 2) {
            nomeCandidato2 = prompt(`Digite o nome do candidato 2:`);
        } else if (opcaoNome === 3) {
            nomeCandidato3 = prompt(`Digite o nome do candidato 3:`);
        } else {
            alert(`Opção inválida!`);
        }
    }

    console.clear();
    console.log(`** NOMES DOS CANDIDATOS **`);
        console.log(`Candidato 1: ${nomeCandidato1}`);
        console.log(`Candidato 2: ${nomeCandidato2}`);
        console.log(`Candidato 3: ${nomeCandidato3}`);

} while (!confirm(`Se os nomes dos candidatos estão corretos, clique OK para continuar ou CANCELAR para voltar e digitar novamente`));

do {

    console.clear();
    console.log(`Opções de voto:`);
    console.log(`[1] Candidato 1: ${nomeCandidato1}`);
    console.log(`[2] Candidato 2: ${nomeCandidato2}`);
    console.log(`[3] Candidato 3: ${nomeCandidato3}`);
    console.log(`[5] Voto em branco`);

}

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
    //fim do laço votação

    dataHoraFinal = dataHoraAtual();

    // Saída para o usuário: boletim de urna
    console.clear();
    console.log('** BOLETIM DE URNA **');
    console.log(`Total de votos: ${totalVotos}`);

    // se houver votação
    if (totalVotos > 0) {

        console.log(`Total de votos do(a) candidato(a) ${nomeCandidato1}: ${votosCandidato1} votos (${(votosCandidato1 / totalVotos * 100).toFixed(2)}%)`);

        console.log(`Total de votos do(a) candidato(a) ${nomeCandidato2}: ${votosCandidato2} votos (${(votosCandidato2 / totalVotos * 100).toFixed(2)}%)`);
        
        console.log(`Total de votos do(a) candidato(a) ${nomeCandidato3}: ${votosCandidato3} votos (${(votosCandidato3 / totalVotos * 100).toFixed(2)}%)`);

        console.log(`Total de votos brancos: ${votosBrancos} votos (${(votosBrancos / totalVotos * 100).toFixed(2)}%)`);

        console.log(`Total de votos nulos: ${votosNulos} votos (${(votosNulos / totalVotos * 100).toFixed(2)}%)`); 
    }


    //determinar ganhador
    if (votosCandidatos1 > votosCandidatos2 && votosCandidatos1 > votosCandidatos3) {
        nomeGanhador = 'Candidato 1';
        votosGanhador = votosCandidatos1 + votosBrancos;
    } else if (votosCandidatos2 > votosCandidatos1 && votosCandidatos2 > votosCandidatos3) {
        nomeGanhador = 'Candidato 2' ;
        votosGanhador = votosCandidatos2 + votosBranco;
    } else if ( votosCandidatos3 > votosCandidatos1 && votosCandidatos3 > votosCandidatos2) {
        nomeGanhador = 'Candidato 3' ;
        votosGanhador = votosCandidatos3 + votosBrancos;
    } else {
        ganhador = false;


        //exibição de ganhador
    console.log('');
    if (ganhador) {
        console.log(`O ganhador dessa urna foi ' + nomeGanhador + ' com' + votosGanhador + ' votos (votosGanhador / totalVotos * 100).toFixed(2)}%)`);
    } else {
        console.log(`Não houve ganhador nesta urna (empate entre  2 ou mais candidatos`);
    }

    } else {
        console.log(`Não houve votação nessa urna`);
    }

    console.log(`Data e hora do início da votação: ${dataHoraInicial}`);
    console.log(`Data e hora do fim da votação: ${dataHoraFinal}`);

    verificarIntegridadeUrna();

    console.log(`Fim do programa`);

}
    
