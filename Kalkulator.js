let tombol = document.querySelector(".kalkulatorBtn");
let kalkulator = document.querySelector("#kalkulator");

tombol.addEventListener("click", function(a){
   let tombolClick = a.target;
   let nilaiTombol = tombolClick.innerText;

   if(nilaiTombol === "C"){
    kalkulator.value = "";
   }else if(nilaiTombol === "<"){
    kalkulator.value = kalkulator.value.slice(0,-1);
   }else if(nilaiTombol === "="){
    kalkulator.value = eval(kalkulator.value);
   }else{
    kalkulator.value = kalkulator.value + nilaiTombol
   }
}) 