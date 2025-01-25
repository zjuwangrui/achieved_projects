
//设置更新按钮
const button: HTMLButtonElement | null = document.querySelector('button');


//创建猫接口与类，接受API传入的数据生成猫实例
interface ICat {
    id: string,
    height: number,
    width: number,
    url: string;
};
class Cat implements ICat {
    id: string;
    height: number;
    width: number;
    url: string;

    constructor(id: string, height: number, width: number, url: string) {
        this.id = id;
        this.height = height;
        this.width = width;
        this.url = url;
    };


}



//接收数据生成猫，并添加相应的标签的类
const tableBody  = (document.getElementsByTagName("tbody"))[0];
class WebDisplay {
    public static creatCatFromAPIData(data: ICat): void {
        const cat = new Cat(data.id, data.height, data.width, data.url);
        const tableRow :HTMLTableRowElement= document.createElement("tr");
        tableRow.innerHTML = `
            <td>id${cat.id}</td>
            <td><img src=${cat.url} alt=""></td>
            <td>高度${cat.height.toString()}</td>
            <td>宽度${cat.width.toString()}</td>
            <td>地址${cat.url}</td>
            <td><a href="#">X</a></td>
            `;
        tableBody?.appendChild(tableRow);
    }
    public static deleteData(deleteButton:HTMLAnchorElement):void{
        const td:HTMLElement|null=deleteButton?.parentElement;
        const tr:HTMLElement|null |undefined=td?.parentElement;
        tr?.remove();
    }
}

//发送请求数据
async function getJSON<T>(url:string):Promise<T> {
    const response:Response= await fetch(url);
    const json:Promise<T>=await response.json();
    return json;
}

async function getData():Promise<string|ICat> {
    try{
    const json:ICat[]=await getJSON('https://api.thecatapi.com/v1/images/search');
    const data:ICat=json[0];
    return data;
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
        return message;
    }
    
}

function handleClick():void{
    
    getData().then((cat:ICat|string)=>
    {
        if(typeof(cat)==="string"){
        return;
        }
        else{
            WebDisplay.creatCatFromAPIData(cat);
            return ;
        }
    }
    )

}
console.log(getJSON('https://api.thecatapi.com/v1/images/search'));
button?.addEventListener<'click'>("click",handleClick);
tableBody?.addEventListener<'click'>("click",(event:MouseEvent)=>{
    WebDisplay.deleteData(<HTMLAnchorElement>event.target);
});