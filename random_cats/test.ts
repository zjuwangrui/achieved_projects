async function getJSO<T>(url:string):Promise<T> {
    const response:Response= await fetch(url);
    const json:Promise<T>=await response.json();
    return json;
}

async function getDat():Promise<void> {
    try{
    const json:ICat[]=await getJSO('https://api.thecatapi.com/v1/images/search');
    const data:ICat=json[0];
    console.log(data);
    }
    catch(error:Error|unknown){
        let message:string;
        if( error instanceof Error){
            message=error.message;
        }
        else{
            message=String(error);
        }
        console.log(message);
    }
}
getDat().then();