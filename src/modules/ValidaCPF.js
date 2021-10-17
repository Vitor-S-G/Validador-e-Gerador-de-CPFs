// Validando CPF -- utilizando class
/*
7x  0x  5x  4x  8x  4x   4x  5x  0x
10  9   8   7   6   5    4   3   2
70  0   40  28  48  20   16  15  0

11 - (237 % 11)
 */
// 705.484.450-52 070.987.720-03

export default class ValidaCPF {
    constructor(cpfEnviado){
        this.cpf = cpfEnviado
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            value: cpfEnviado.replace(/\D+/g, '') // obtendo apenas os caracteres númericos
            
        });
    }

    isSequencia() {
        return this.cpfLimpo[0].repeat(11) === this.cpfLimpo;
    }

    gerarNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos); //para utilizar o método estatico usar o nome da class ao invéz da palavra this
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCpf = cpfSemDigitos + digito1 + digito2;
    }

    static geraDigito(cpfSemDigitos) { // Método estático, sempre que não tiver a palavra this pode ser estático
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let i of cpfSemDigitos) {
            total += reverso * Number(i);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;
        this.gerarNovoCpf()
        return this.novoCpf === this.cpfLimpo;

    }
}

