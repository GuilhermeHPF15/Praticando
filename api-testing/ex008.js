/* Realize uma requisição assíncrona utilizando exclusivamente a sintaxe de encadeamento de Promises 
(.then). A rotina deve processar a resposta inicial, converter o fluxo de dados para JSON em um novo 
estágio de encadeamento e exibir o resultado final no console. Implemente também o tratamento de 
exceções global utilizando o método .catch. */

const url = "https://jsonplaceholder.typicode.com/todos/1";
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("Recurso não encontrado!");
        }
        return response;
    })
    .then (response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error.message));
