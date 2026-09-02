export class Cliente {
    nome : string
    email : string
    idade : number

    constructor (pNome:string, pEmail:string, pIdade:number){

    this.nome=pNome;
    this.email=pEmail;
    this.idade=this.idade;
    }

    verificarIdade(){
        if(this.idade >=18) {
            console.log("Pode abrir conta!");
        } else {
            console.log("Idade não permitida!");
        }
    }





}



