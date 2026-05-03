async function debugRequest() {
    const url = "https://github.com";
    try {
        const response = await fetch(url);
        const rawData = await response.text();
        console.log(`Status: ${response.status}`);
        console.log("Início do conteúdo recebido:");
        console.log(rawData.substring(0, 100));
    } catch (error) {
        console.log(`Conection error: ${error}`);
    }
}

console.log("");
debugRequest();
