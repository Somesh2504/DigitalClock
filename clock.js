const sec=document.querySelector(".sec");
const hrs=document.querySelector(".hrs");
const min=document.querySelector(".min");

setInterval(()=>{
    const currentTime = new Date();
    sec.innerHTML=(currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();
    hrs.innerHTML=(currentTime.getHours()<10?"0":"")+currentTime.getHours();
    min.innerHTML=(currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
    
},1000);


