
let box = document.querySelector("#light")

let button1 = document.querySelector("#btnOn") 
let button2 = document.querySelector("#btnOff") 


// meeshan uu ka dhacaayo actions ka 

button1.addEventListener("click",function() {
    box.style.backgroundColor ="yellow" 

} )


button2.addEventListener("click",function() {
    box.style.backgroundColor ="transparent" 

} )
