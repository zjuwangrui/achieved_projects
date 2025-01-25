"use strict";
//设置更新按钮
const button = document.querySelector('button');
;
class Cat {
    constructor(id, height, width, url) {
        this.id = id;
        this.height = height;
        this.width = width;
        this.url = url;
    }
    ;
}
//接收数据生成猫，并添加相应的标签的类
const tableBody = (document.getElementsByTagName("tbody"))[0];
class WebDisplay {
    static creatCatFromAPIData(data) {
        const cat = new Cat(data.id, data.height, data.width, data.url);
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `
            <td>id${cat.id}</td>
            <td><img src=${cat.url} alt=""></td>
            <td>高度${cat.height.toString()}</td>
            <td>宽度${cat.width.toString()}</td>
            <td>地址${cat.url}</td>
            <td><a href="#">X</a></td>
            `;
        tableBody === null || tableBody === void 0 ? void 0 : tableBody.appendChild(tableRow);
    }
    static deleteData(deleteButton) {
        const td = deleteButton === null || deleteButton === void 0 ? void 0 : deleteButton.parentElement;
        const tr = td === null || td === void 0 ? void 0 : td.parentElement;
        tr === null || tr === void 0 ? void 0 : tr.remove();
    }
}
//发送请求数据
async function getJSON(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}
async function getData() {
    try {
        const json = await getJSON('https://api.thecatapi.com/v1/images/search');
        const data = json[0];
        return data;
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
        return message;
    }
}
function handleClick() {
    getData().then((cat) => {
        if (typeof (cat) === "string") {
            return;
        }
        else {
            WebDisplay.creatCatFromAPIData(cat);
            return;
        }
    });
}
console.log(getJSON('https://api.thecatapi.com/v1/images/search'));
button === null || button === void 0 ? void 0 : button.addEventListener("click", handleClick);
tableBody === null || tableBody === void 0 ? void 0 : tableBody.addEventListener("click", (event) => {
    WebDisplay.deleteData(event.target);
});
