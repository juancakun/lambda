//import { fromJson } from "../entities/product";
import { listProductsRepository } from "../repositories/list_products.mjs";

export const listProductsUC = async (stage, token) => {
    
    let response = {};

    const products = listProductsRepository(stage);
    
    /*let Products = [];
    for(let product of products){
        Products.push(fromJson(product));
    }
    response = Products.toString();*/

    response = products;
    return response;
}