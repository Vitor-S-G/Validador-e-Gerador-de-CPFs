import GeraCPF from './modules/GeraCPF';
import ValidaCPF from './modules/ValidaCPF';

import './assets/css/style.css'

(function(){
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})();

document.querySelector('.validar').addEventListener('click', ()=> {
    const cpf = document.querySelector('.valida-cpf').value;
    const result = document.querySelector('.result');
    const validando = new ValidaCPF(cpf);
    const saida = validando.valida()? 'CPF Válido' : 'CPF Inválido'
    if(saida === 'CPF Válido'){
        result.classList.add('valido');
        result.classList.remove('invalido');
    }else{
        result.classList.add("invalido");
        result.classList.remove('valido');
    }
    result.innerHTML = saida;
});

