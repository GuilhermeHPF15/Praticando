/* "Efetue uma requisição a um endpoint de uma API passando um parâmetro de ID inexistente. De seguida, 
valide as propriedades status e ok do objeto de resposta (Response) para analisar o comportamento do fluxo 
assíncrono." */

const url = "https://jsonplaceholder.typicode.com/todos/0";

async function callAPI() {
    const response = await fetch(url);
    console.log(response.status);
    console.log(response.ok);
}

console.log("");
callAPI();

/* Conclusão: apesar do recurso não ter sido encontrado (código de status 404), a função não executou o bloco catch,
pois entende esse código como válido. O fetch só dispara um erro por conta própria se ocorrer algum erro de 
rede/conexão. Agora precisaremos criar um "erro personalizado" pra lançar um erro quando o recurso não for 
encontrado. */
