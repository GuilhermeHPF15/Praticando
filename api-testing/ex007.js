/* Desenvolva uma rotina assíncrona que consulte um recurso específico da API. Após validar a resposta, 
extraia o conteúdo JSON e formate uma mensagem de saída no console que combine múltiplas propriedades 
do objeto (ex: ID e Título), garantindo que a execução seja interrompida e tratada adequadamente em 
caso de falha no endpoint. */

const url = "https://jsonplaceholder.typicode.com/todos/1";

async function callAPI() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Recurso não encontrado.");
        }
        const object = await response.json();
        console.log(`O ID do objeto é ${object.id} e seu título é ${object.title}`);
    } catch (error) {
        console.log(`Erro: ${error.message}`);
    }
}

console.log("");
callAPI();
