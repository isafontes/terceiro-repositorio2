const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho() {
    if (tamanhoSenha < 20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinuscula = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@%*?';

geraSenha();

function geraSenha() {
    let alfabeto = '';
    if (checkbox[0].cheked){
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].cheked){
        alfabeto = alfabeto + letrasMinuscula;
    }
    if (checkbox[2].cheked){
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].cheked){
        alfabeto = alfabeto + simbolos;
    }

    let senha = '' ;
    for(let i=0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random()*alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha; 
}