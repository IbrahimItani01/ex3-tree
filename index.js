const treeContainer = document.createElement("div");
treeContainer.classList.add("tree");
document.addEventListener("DOMContentLoaded",function(){
    // O(x), x being the input by user
    function drawTree(x){
        treeContainer.innerHTML = `<div class=" branch gold">*</div>`
        for(var i=1;i<x;i++){
            var content = ``;
            
            content+= "*"+" | ".repeat((2*i)-1)+"*"
            if(i%2===0){
                treeContainer.innerHTML+=`
                    <div class="green">${content}</div>
                    `
            }
            else if(i%2!==0){
                treeContainer.innerHTML+=`
                    <div class="red">${content}</div>
                    `
            }
            }
        document.body.appendChild(treeContainer)
    }

    const headline = document.createElement("div");
    headline.innerHTML = `
        <h1 class="gold">*</h1>
        <h1>It is this time of the year</h1>
        <h1 class="gold">*</h1>
    `
    headline.classList.add("headline");
    document.body.appendChild(headline);
    const input = document.createElement("div");
    input.innerHTML = `
        <label for="size">What is the size of your tree?</label>
        <input type="text" name="size" id="size">
        <button id="send">Draw Tree</button>
    `
    input.classList.add("input");
    document.body.appendChild(input);
    const userInput = document.getElementById("size");
    const sendBtn = document.getElementById("send");
    

    sendBtn.addEventListener("click",function(){
        const x = userInput.value;
        console.log(x)
        drawTree(x);
    })


})
