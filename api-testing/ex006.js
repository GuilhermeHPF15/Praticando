/* Implemente o tratamento de exceções manuais para requisições com status de falha. A função deve validar a
integridade da resposta e interromper o fluxo do bloco principal caso o recurso não seja localizado, garantindo
que o erro seja tratado exclusivamente pelo bloco de captura. */

const url = "https://jsonplaceholder.typicode.com/todos/0"

async function callAPI() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("não encontrado.");
            console.log("Essa linha nunca ssrá lida.");
        }
    } catch (error) {
        console.log(`Erro: ${error.message}`);
    }
}

callAPI();
