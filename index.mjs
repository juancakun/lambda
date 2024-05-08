import {apigtwAdapter} from './src/adapters/primary/apigtwAdapter.mjs';

export const handler = async (event, context) => {

    let responseEvent = {};

    const stage = getStage(context);

    //Imprimir el evento
    console.log("validateEvent::event", event);
    if(event["httpMethod"]){
        responseEvent = await apigtwAdapter(event, stage);
    }
    else{
        responseEvent= "Evento no reconocido";
    }
    
    //Devolver el primer producto de la lista
    const response = {
        statusCode: 200,
        body: JSON.stringify(responseEvent),
    };
    return response;
};