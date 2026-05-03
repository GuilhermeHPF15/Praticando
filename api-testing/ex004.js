/* "Efetue uma requisição a um endpoint de uma API passando um parâmetro de ID inexistente. De seguida, 
valide as propriedades status e ok do objeto de resposta (Response) para analisar o comportamento do fluxo 
assíncrono." */

const url = "https://jsonplaceholder.typicode.com/todos";

async function callAPI() {
    try {
        const response = await fetch(url);
        const object = await response.json();
        console.log(object);
        console.log("");
        console.log(object[1]["title"]);
        console.log("");
        console.log(object[6].title);
    } catch (error) {
        console.log(`Conection error: ${error}`);
    }
}

console.log("");
callAPI();
