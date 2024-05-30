import { CognitoJwtVerifier } from "aws-jws-verify"

const verfier = CognitoJwtVerifier.create(
    {
        userPoolId: "us-east-1_",
        tokenUse: "id",
        clientId: "",
    }
);

export const validateToken = async (xMytoken) => {
    let response = "Token invalido";
    try{
        const response = await verfier.verify(
            xMytoken
        );
        console.log("Token es valido. Response:", response)
    }   catch(e){
        console.log("Token no valido:", e);
    }
    return response;
}