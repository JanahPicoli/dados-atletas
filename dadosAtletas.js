
class Atleta {
    constructor(nome, idade, peso, altura, notas) {
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.altura = altura;
      this.notas = notas; 
    }
    obtemNome() {
        return "Nome: " + this.nome
    };
    obtemIdade(){
        return "Idade: " + this.idade
    };
    obtemPeso() {
        return "Peso: " + this.peso
    };
    obtemAltura() {
        return "Altura: " + this.altura
    };
    obtemNotas() {
        return "Notas: " + this.notas
    };
    obtemCategoria() {
       if (this.idade >=16 && this.idade <=30) {
        return 'Categoria: Adulto';
    } else if (this.idade >= 14 && this.idade <=15) {
        return 'Categoria: Intermediário';
    } else if (this.idade >= 12 && this.idade <= 13) {
        return 'Categoria: Juvenil';
    } else if (this.idade >= 9 && this.idade <= 11) {
        return 'Categoria: Infantil';
        } else return 'Categoria: Sem categoria';
};
 obtemIMC() {
     return 'IMC: ' + this.peso / (this.altura * this.altura)
 };


 obtemMediaValida() {
   this.notas.sort(function(a, b) {
            return a - b;
        })
        return "Média Válida: " + this.notas.slice(1,4).reduce((a, b) => a + b, 0) / 3
 }

 };

const atleta = new Atleta("César Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
const atleta1 = new Atleta("Fernando Puntel", 15, 83, 1.76, [8, 10, 10, 7, 9.33]);
const atleta2 = new Atleta("Daiane Jelinsky", 12, 60, 1.60, [7, 10, 9.5, 9.5, 8]);
const atleta3= new Atleta("Bruno Castro", 09, 50, 1.50, [10, 10, 10, 9, 9.5]);

console.log(atleta.obtemNome())
console.log(atleta.obtemIdade())
console.log(atleta.obtemPeso())
console.log(atleta.obtemAltura())
console.log(atleta.obtemNotas())
console.log(atleta.obtemCategoria())
console.log(atleta.obtemIMC())
console.log(atleta.obtemMediaValida())
console.log()
console.log(atleta1.obtemNome())
console.log(atleta1.obtemIdade())
console.log(atleta1.obtemPeso())
console.log(atleta1.obtemAltura())
console.log(atleta1.obtemNotas())
console.log(atleta1.obtemCategoria())
console.log(atleta1.obtemIMC())
console.log(atleta1.obtemMediaValida())
console.log()
console.log(atleta2.obtemNome())
console.log(atleta2.obtemIdade())
console.log(atleta2.obtemPeso())
console.log(atleta2.obtemAltura())
console.log(atleta2.obtemNotas())
console.log(atleta2.obtemCategoria())
console.log(atleta2.obtemIMC())
console.log(atleta2.obtemMediaValida())
console.log()
console.log(atleta3.obtemNome())
console.log(atleta3.obtemIdade())
console.log(atleta3.obtemPeso())
console.log(atleta3.obtemAltura())
console.log(atleta3.obtemNotas())
console.log(atleta3.obtemCategoria())
console.log(atleta3.obtemIMC())
console.log(atleta3.obtemMediaValida())
