"use strict";
async function getJSO(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}
async function getDat() {
    try {
        const json = await getJSO('https://api.thecatapi.com/v1/images/search');
        const data = json[0];
        console.log(data);
    }
    catch (error) {
        let message;
        if (error instanceof Error) {
            message = error.message;
        }
        else {
            message = String(error);
        }
        console.log(message);
    }
}
getDat().then();
