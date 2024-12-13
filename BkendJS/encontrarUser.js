const listaDeUser = ['Maria','Ycaro', 'Lucas', 'João', 'Paulo', 'Pedro', 'Joana']

let encontrarUser =  false

let i = 0
let nome = ''

while(!encontrarUser){ 
    if (listaDeUser[i][0] !== 'Y') {
        i++
    } else{
        encontrarUser = true
        nome = listaDeUser[i]
    }
}
    console.log (nome)