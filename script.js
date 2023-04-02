const result = document.querySelector(".upper-part label");
const cleartbn = document.querySelector("#c");
const btn = document.querySelectorAll(".btn");

console.log(result);
console.log(btn);

// cleartbn.addEventListener("click", ()=>{
//     result.innerText = "";
// });



btn.forEach((items)=>{
    items.onclick = () =>{
        if(items.id == "c"){
            result.innerText ="";
        }else if(items.id == "backspace"){
            let string = result.innerText.toString();
            result.innerText = string.substr(0, string.length - 1);
        }else if(result.innerText != '' && items.id == "equalto"){
            result.innerText = eval(result.innerText);
        }else if(result.innerText == '' && items.id == "equalto"){
            result.innerText = 'Empty!';
            setTimeout(()=>(result.innerText = ''), 2000);
        }else{
            result.innerText+=items.id;
        }
    }
})