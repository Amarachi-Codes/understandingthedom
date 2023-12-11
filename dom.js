// console.log({document,window});
const body = document.querySelector('body')
// console.log({body});
console.log(body.innerHTML);
// body.innerHTML = `<h1 class="heading">Hello my name is DOM</h1>`
const container= document.querySelector(".container")
// console.log({container});
// console.log(container.childElementCount);
// console.log(container.nextElementSibling);
// console.log(container.parentElement);

container.addEventListener("click",function(event){
// console.log(event);
// console.log("you clicked me just now");
})

container.addEventListener("mouseover", function(event){
    // console.log(event);
    
})

const containerP = document.createElement("p")
containerP.setAttribute('id','para')
containerP.textContent='Welcome Home'
container.prepend(containerP)

const containerDiv = document.createElement('div')
container.append(containerDiv)
containerDiv.innerHTML=`<span>Dom is beautiful</span>`