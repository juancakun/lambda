import { listProductsMock } from "../../adapters/secondary/mock.mjs";

export const listProductsRepository = (stage) => {
    let response = {};

    response = listProductsMock(stage);

    return response;
}