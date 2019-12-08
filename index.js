// // Write your code here!let ul = document.createElement('ul')
// let element = document.createElement('div')

// document.body.appendChild(element)

// let ul = document.createElement('ul')

// for (let i = 0; i < 3; i++) {
//   let li = document.createElement('li')
//   li.innerHTML = (i + 1).toString()
//   ul.appendChild(li)
// }

// element.appendChild(ul)

let main = document.getElementById("main");
main.remove();

let newHeader = document.createElement('h1');
newHeader.setAttribute('id','victory');
newHeader.innerHTML = "cakehole is the champion"
document.body.appendChild(newHeader)