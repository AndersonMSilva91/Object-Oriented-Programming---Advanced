class ContaBancaria {
    private nome: string;
    private senha: string;
    private quantia: number;

constructor(nome: string, senha: string, quantia: number){
this.nome = nome;
this.senha = senha;
this.quantia = quantia;
}
public acesso(senha: string){
   this.acesso = this.acesso
   if (senha === 'abcde'){
      console.log('acesso concedido!');
      console.log(`Nome: ${this.nome}; senha: ${this.senha}; Quantia: ${this.quantia}`);
   }
}
}
const contaBancaria = new ContaBancaria('Anderson', 'abcde', 5000);


console.log(contaBancaria);