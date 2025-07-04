// let h2=document.querySelector("h2")
// h2.innerText

// $("h2").css({
//     color:"red",
//     border:"1px solid green",
// })
// console.log($("h2").text("hiii"));

$("button").click(()=>{
 console.log("hehehe");
 $("h2").fadeOut()
})

$("#in").click(()=>{
    $("h2").fadeIn()
})