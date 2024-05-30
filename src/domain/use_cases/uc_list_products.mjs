//import { fromJson } from "../entities/product";
import { listProductsRepository } from "../repositories/list_products.mjs";
import { getProductsRepository } from "../../domain/repositories/get_product.mjs";


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

//Funcion para obtener el producto desde el caso de uso
export const getProductUC = async(idProduct, stage, token) => {

    let response = {};

    const products = getProductsRepository(idProduct, stage);

    response= products;
    return response;

}
