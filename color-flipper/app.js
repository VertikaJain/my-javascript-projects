const hex = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener('click',()=>{
    const randomNumber=getRandomNumber();
    document.body.style.backgroundColor=hex[randomNumber];
    color.textContent=hex[randomNumber];
})

getRandomNumber=()=>{
    return Math.floor(Math.random()*hex.length);
}