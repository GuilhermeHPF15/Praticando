const URL = "https://dummyjson.com/products";

async function callAPI() {
    const request = await fetch(URL); 
    if (request.status == 200) {
        const obj = await request.json();
        console.log(obj);
    }
}

callAPI();
