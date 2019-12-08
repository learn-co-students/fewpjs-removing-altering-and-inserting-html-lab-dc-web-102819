// Write your code here!
let main = document.getElementById('main');
main.remove();

let newHeader = document.createElement('h1');
newHeader.innerHTML = "YOUR-NAME is the champion";
newHeader.id = "victory"
document.body.appendChild(newHeader);
// newHeader.innerHTML("")

