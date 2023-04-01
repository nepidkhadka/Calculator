const result = document.querySelector(".upper-part label");
const cleartbn = document.querySelector("#c");
const btn = document.querySelector(".btn");

console.log(result);
console.log(btn);

cleartbn.addEventListener("click", ()=>{
    result.innerText = "";
});

btn.addEventListener("click", ()=>{
   
    if(btn.value === 1 ){
    result.innerText = 1;
    }
})

