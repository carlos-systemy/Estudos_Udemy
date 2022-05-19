const prod1 = {};
prod1.nome ='Celular Ultra Mega';
prod1.preco = 4998.90;
prod1 ['Desconto Legal']= 0.4;// Evitar atributos com espaço

console.log(prod1);
// É diferente de JSON
// JSON(JavaScript Object Notation) : '{ "nome": "Galaxy", "preco" : 79.90}' 
// Formato textual que permite a interoperabilidade entre sistemas
const prod2 = {
    nome: "Galaxy",
    preco: 2500.00,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
};

console.log(prod2);