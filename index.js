const inputValue = document.querySelector("#initialPrice")
const quantityStk = document.querySelector("#quantity")
const currentPrice = document.querySelector("#currentPrice")
const btnCheck = document.querySelector("#btn")
const output = document.querySelector("#output")


const calculateProfitOrLoss=(initial,qty,current)=>{
    if(initial>current){
        const loss = (initial-current)*qty;
        const lossPercent = ((loss/(initial*qty))*100).toPrecision(4)
        output.innerText = `Ohh no! The loss is ${loss} and the percent is ${lossPercent}%`; 
        output.style.color = 'red';
    }else if(current>initial){
        const profit = (current-initial)*qty;
        const profitPercent = ((profit/(initial*qty))*100).toPrecision(4);
        output.innerText = `Wohh!! The profit is ${profit} and the percent is ${profitPercent}%`;
        output.style.color = 'green';
    }else{
        output.innerText ="No Pain No Gain , No Gain No Pain"
        output.style.color = 'black'
    }
    
}
const clickHandler=()=>{
    const initialPrice = Number(inputValue.value);
    const quantity = Number(quantityStk.value);
    const currentVal = Number(currentPrice.value);
    calculateProfitOrLoss(initialPrice,quantity,currentVal)
}

btnCheck.addEventListener('click',clickHandler)