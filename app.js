

 let ws=new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
 let ws1=new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
 let ws2=new WebSocket('wss://stream.binance.com:9443/ws/shibusdt@trade');
 let ws3=new WebSocket('wss://stream.binance.com:9443/ws/sandusdt@trade');
 let ws4=new WebSocket('wss://stream.binance.com:9443/ws/dogeusdt@trade');
 let ws5=new WebSocket('wss://stream.binance.com:9443/ws/manausdt@trade');
let ws6=new WebSocket('wss://stream.binance.com:9443/ws/lunausdt@trade');
let ws7=new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@trade');
let ws8=new WebSocket('wss://stream.binance.com:9443/ws/ltcusdt@trade');

 


let stockprice=document.getElementById('stockprice');
let stockprice1=document.getElementById('stockprice1');
let stockprice2=document.getElementById('stockprice2');
let stockprice3=document.getElementById('stockprice3');
let stockprice4=document.getElementById('stockprice4');
let stockprice5=document.getElementById('stockprice5');
let stockprice6=document.getElementById('stockprice6');
let stockprice7=document.getElementById('stockprice7');
let stockpric8=document.getElementById('stockprice8');

let bitprice=0;
let ethprice=0;
let shibprice=0;
let dogprice=0;
let lunprice=0;
let bnbprice=0;
let sanprice=0;
let ltcprice=0;
let manprice=0;



ws.onmessage=(event)=>{
   
    let stockobj=JSON.parse(event.data);
    let stockp=stockobj.p;
    if(bitprice<stockp){
        stockprice.style.color='green'
        bitprice=stockp;
    }
    else{
        stockprice.style.color='red'
        bitprice=stockp;
    }
   
    stockprice.innerText='$'+parseFloat(stockobj.p);
}
ws1.onmessage=(event)=>{
    let stockobj=JSON.parse(event.data);
    let stockp=stockobj.p;
    if(ethprice<stockp){
        stockprice1.style.color='green'
        ethprice=stockp;
    }
    else{
        stockprice1.style.color='red'
        ethprice=stockp;
    }

   
    stockprice1.innerText='$'+parseFloat(stockobj.p);
}
ws2.onmessage=(event)=>{
    let stockobj=JSON.parse(event.data);
    let stockp=stockobj.p;
    if(shibprice<stockp){
        stockprice2.style.color='green'
        shibprice=stockp;
    }
    else{
        stockprice2.style.color='red'
        shibprice=stockp;
    }
    stockprice2.innerText='$'+parseFloat(stockobj.p);
}
ws3.onmessage=(event)=>{
    let stockobj=JSON.parse(event.data);
    let stockp=stockobj.p;
    if(sanprice<stockp){
        stockprice3.style.color='green'
        sanprice=stockp;
    }
    else{
        stockprice3.style.color='red'
        sanprice=stockp;
    }
  
    stockprice3.innerText='$'+parseFloat(stockobj.p);
}
ws4.onmessage=(event)=>{
    let stockobj=JSON.parse(event.data);
    let stockp=stockobj.p;
    if(dogprice<stockp){
        stockprice4.style.color='green'
        dogprice=stockp;
    }
    else{
        stockprice4.style.color='red'
        dogprice=stockp;
    }
   
    stockprice4.innerText='$'+parseFloat(stockobj.p);
}
ws5.onmessage=(event)=>{
    let stockobj=JSON.parse(event.data);
    let stockp=stockobj.p;
    if(manprice<stockp){
        stockprice5.style.color='green'
        manprice=stockp;
    }
    else{
        stockprice5.style.color='red'
        manprice=stockp;
    }
    
    stockprice5.innerText='$'+parseFloat(stockobj.p);
}
ws6.onmessage=(event)=>{
    let stockobj=JSON.parse(event.data);
    let stockp=stockobj.p;
    if(lunprice<stockp){
        stockprice6.style.color='green'
        lunprice=stockp;
    }
    else{
        stockprice6.style.color='red'
        lunprice=stockp;
    }
   stockprice6.innerText='$'+parseFloat(stockobj.p);


}
ws7.onmessage=(event)=>{
    let stockobj=JSON.parse(event.data);
    let stockp=stockobj.p;
    if(bnbprice<stockp){
        stockprice7.style.color='green'
        bnbprice=stockp;
    }
    else{
        stockprice7.style.color='red'
        bnbprice=stockp;
    }
   stockprice7.innerText='$'+parseFloat(stockobj.p);
   

}
ws8.onmessage=(event)=>{

    let stockobj=JSON.parse(event.data);
    let stockp=stockobj.p;
    if(ltcprice<stockp){
        stockprice8.style.color='green'
        ltcprice=stockp;
    }

    
    else{
        stockprice8.style.color='red'
        ltcprice=stockp;
    }
   stockprice8.innerText='$'+parseFloat(stockobj.p);
   

}