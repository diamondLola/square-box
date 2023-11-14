
const myColor = document.getElementById('mycolor')
const mySize= document.getElementById('mysize')
let myDiv = document.querySelector('div');

myColor.addEventListener('input', (e)=>{


    myDiv.style.background = myColor.value;
     myDiv.style.background = e.target.value;
    
})


mySize.addEventListener('input', (e)=>{
    
    myDiv.style.borderRadius = mySize.value + 'px';
    myDiv.style.backgroundRadius = e.target.value + '%';
})

