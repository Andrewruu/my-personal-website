const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

let button1 = document.createElement("button");
button1.innerText = "Click me!";
button1.id = "button";
button1.name = "button";
document.body.appendChild(button1);


// button 
function buttonClick() {
   
    const b1 = document.getElementById('button');

    function clickAlert() {
      alert('I was clicked!');
    }
    
    b1.addEventListener('click', clickAlert);
    

}

window.onload = buttonClick();