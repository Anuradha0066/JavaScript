//     const arr= [
//   'https://images.unsplash.com/file-1715652217532-464736461acbimage?w=416&dpr=2&auto=format&fit=crop&q=60',
//   'https://images.unsplash.com/photo-1744265385437-8b591b626a8b?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   'https://plus.unsplash.com/premium_photo-1750065466444-7568230896b9?q=80&w=3135&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

// ]
// const image=document.querySelector('img');

// let num=0;
// setInterval(()=>{
//     image.setAttribute('src',arr[num]);
//     num= (num+1)%arr.length
// },2000);

// function fun1(){
//     console.log("hello");
    
// }
// let btn=document.querySelector("#one")
// btn.onclick=function(){
//     console.log("bye");
    
// }

let btn= document.querySelector("#one")
let body=document.querySelector("body")
   // body.style.backgroundColor="yellow"

   let isbool=true;
   
// btn.addEventListener("click",function(){

//     console.log("helloooo");
//     body.style.backgroundColor="red"
// })

 btn.addEventListener("click",function(){
if(isbool){
    body.style.backgroundColor="red"
}
else{
    body.style.backgroundColor="green"
}
 isbool=!isbool

 })
