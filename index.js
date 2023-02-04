// Write your code here!
const main = document.getElementById('main');
main.remove();

const newHeader = document.createElement('h1');
const text = document.createTextNode("Chris is the champion");
newHeader.setAttribute('id','victory');
newHeader.appendChild(text);
document.body.appendChild(newHeader);