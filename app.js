// criando listas e mexendo com indices


//no console do navegador: 
let linguagem ['javascript','java','python']
linguagem[0]
'javascript'

// ou seja, sempre que eu quiser pegar o primeiro elemento da lista, eu preciso chama-lo de "0".

// para solicitar que te mostre, o ultimo elemento da lista, deve-se fazer da seguinte forma:

linguagem [ linguagem.length - 1]
'python'

//DESAFIO SOBRE LISTAS: 
//1)crie uma lista, com o nome listaGenerica.

let listaGenerica []

//2) Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com o s seguintes elementos:'JavaScript','C','C++', 'Kotlin' e 'Python'.

let linguagensDeProgramacao ['JavaScript','C','C++', 'Kotlin','Python']

//3)Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

let linguagensDeProgramacao ['JavaScript','C','C++', 'Kotlin','Python']
linguagensDeProgramacao.push ('Java','Ruby','Golang');

//4)Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

let nome ['Dani','Alvaro','Ben']
    console.log(nome [0]);

//5)Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

    let nome ['Dani','Alvaro','Ben']
    console.log(nome [1]);

//Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
nomes = ['JavaScript', 'Python', 'Go'];
console.log(nomes[2]);