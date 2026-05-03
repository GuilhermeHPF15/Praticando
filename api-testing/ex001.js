async function startDiscovery() {
    const url = "https://api.github.com/";
    try {
        const response = await fetch(url);
        console.log(`Status: ${response.status}`);
        console.log(`Is it ok? ${response.ok}`);
        console.log("");
        console.log(response);
    } catch (error) {
        console.log(`Conection error: ${error}`);
    }
}

console.log("");
startDiscovery();
