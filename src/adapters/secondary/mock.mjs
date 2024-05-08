const products = [{
        id: "p01",
        name: "Producto 1",
        price: 100.00,
        amount: 100,
        category: "c01"
    },
    {
        id: "p02",
        name: "Producto 2",
        price: 125.00,
        amount: 400,
        category: "c01"
    },
    {
        id: "p03",
        name: "Producto 3",
        price: 58.00,
        amount: 90,
        category: "c01"
    }];

    export const listProductsMock = (stage) => {
        return products;
    }

    export const getProductMock = (idProduct, stage) => {
        for(let product of products){
            if(product.id == idProduct){
                return product;
            }
        }
        return "No se encontró el producto";
    }