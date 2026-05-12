/* Crie uma rotina para persistir um novo recurso na API. A requisição deve ser configurada utilizando o 
método POST, incluindo os cabeçalhos de conteúdo apropriados e o corpo da mensagem devidamente serializado
em JSON. Após o envio, valide o status da resposta e exiba o objeto retornado pelo servidor para confirmar
a criação. */

async function callAPI() {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const object = {
        userId: 1,
        id: 1,
        title: "Branca de Neve",
        completed: false
    }; 
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(object),
            headers: {"Content-Type": "application/json; charset=UTF-8"}
        });
        if (!response.ok) {
            throw new Error("Recurso não encontrado!");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`Erro: ${error.message}`);
    }
}

console.log("");
callAPI();
