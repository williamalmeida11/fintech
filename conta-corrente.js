export class ContaCorrente {
    //atributos ou propriedades
    numero
    nomeCliente
    saldo

    constructor(numero, nome, saldo = 0) {
        this.numero = numero;
        this.nomeCliente = nome;
        this.saldo = saldo;
    }

    //Ações da classe - Métodos
    consultarSaldo() {
        console.log("Saldo de " + this.nomeCliente + " - R$ " + this.saldo);
    }

    depositar(valorDeposito) {
        if (valorDeposito > 0) {
            this.saldo += valorDeposito;
        } else {
            console.log("Valor Inválido")
        }
    }

    sacar(valorSaque) {
        this.saldo -= valorSaque;
    }

}