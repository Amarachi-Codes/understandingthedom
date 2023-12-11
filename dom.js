// console.log({document,window});
const body = document.querySelector('body')
// console.log({body});
console.log(body.innerHTML);
// body.innerHTML = `<h1 class="heading">Hello my name is DOM</h1>`
const container= document.querySelector(".container")
console.log({container});
console.log(container.childElementCount);
console.log(container.nextElementSibling);
console.log(container.parentElement);

container.addEventListener("click",function(event){
console.log(event);
console.log("you clicked me just now");
})