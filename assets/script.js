const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{

    if("btn.innerText === 'START'"){
        btn.innerText = "NEXT";
    }
});

