async function startDiscovery() {
    const url = "https://api.github.com/";
    try {
        const response = await fetch(url);
        const userData = await response.json();
        console.log(userData);
    } catch (error) {
        console.log(`Conection error: ${error}`);
    }
}

console.log("");
startDiscovery();
