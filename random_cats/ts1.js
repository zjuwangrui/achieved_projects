"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// enum Color{
//     a,b,c
// }
// console.log(Color.a)
const url = "";
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
const tableBody = document.getElementsByTagName("tbody");
class WebDisplay {
    static creatCatFromAPIData(data) {
        const cat = new Cat(data.id, data.height, data.width, data.url);
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `
            <td>id${cat.id}</td>
            <td><img src="" alt=""></td>
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
function getJSON(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const json = yield response.json();
        return json;
    });
}
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const json = yield getJSON(url);
            const data = json[0];
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
    });
}
console.log(getJSON('https://api.thecatapi.com/v1/images/search'));
button === null || button === void 0 ? void 0 : button.addEventListener("click", getData);
tableBody === null || tableBody === void 0 ? void 0 : tableBody.addEventListener("click", (event) => {
    WebDisplay.deleteData(event.target);
});
