const shop = document.getElementById("grid");

async function getProduct(page){
    const skip = page * 12;
    const limit = skip + 12;
    const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    try{
        const products = await fetch(url).then(res=>res.json());
    }catch(error){
        console.error();
    }
}