import { listProductsMock } from "../../adapters/secondary/mock.mjs";
import { getProductsMock } from "../../adapters/secondary/mock.mjs";


export const listProductsRepository = (stage) => {
    let response = {};

    response = listProductsMock(stage);

    return response;
}


//Funcion para obtener el producto desde el repositorio
export const getProductsRepository = async(idProducto, stage) => {

    let response = {};
    response = getProductsMock(idProducto, stage);

    return response;
}
