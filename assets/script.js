const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{

    if(btn.innerText === "Start"){
        btn.innerText = "Next";
    }
});

