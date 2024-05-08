import { listProductsUC } from "../../domain/use_cases/uc_list_products.mjs";

export const apigtwAdapter =async (apigtwEvent, stage) => {
    //imprimir token
    const xMytoken = headers["x-mytoken"];
    console.log("handleApigtwEvent::x-mytoken", xMytoken);

    const httpMethod = apigtwEvent("httpMethod");
    switch(httpMethod){
        case "GET":
            const resource = apigtwEvent["resource"];
            if(resource == '/producto'){
                response = await listProductsUC (stage, xMytoken);
            }else if(resource == '/producto/{id_producto}'){
                const pathParams = apigtwEvent["pathParameters"];
                console.log("handleApigtwEvent::pathParams", pathParams);
                const idProduct = pathParams["id_producto"];
                console.log("handleApigtwEvent::idProduct", idProduct);
                if(idProduct != "" || idProduct != undefined){
                    response = await getProductUC(idProduct, stage, xMytoken);
                }
            }
    }
}