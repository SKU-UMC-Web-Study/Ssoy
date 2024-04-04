let num= 0;
const numberElement = document.getElementById('number');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');

increaseButton.addEventListener('click',() =>{
   num+=1;
   numberElement.innerText=num;
});
decreaseButton.addEventListener('click',() =>{ 
    num-=1;
    numberElement.innerText=num;
});

console.log(numberElement);
console.log(increaseButton);
console.log(decreaseButton);