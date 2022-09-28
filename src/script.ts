class Patinete {
private marca: string;
private modelo: string;
private nome: string;
private preco: number;
private rodando: boolean;

constructor(marca: string, modelo: string, nome: string, preco: number){
this.marca = marca;
this.modelo = modelo;
this.nome = nome;
this.preco = preco;
}
public IsRodando(rodando: boolean) {
this.IsRodando = this.IsRodando;
 }
}
const patinete = new Patinete('Samsung', 'Bk-723', 'roberval', 1600);
patinete.IsRodando(true);

console.table(patinete);