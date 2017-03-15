var btnAdd = document.querySelector('.myAdd');
var txtReg = document.querySelector('.myText');

function getRegistration () {
if (txtReg.value.length > 0) {
  var node = document.createElement('li');
  var textNode = document.createTextNode(txtReg.value);
  node.appendChild(textNode);
  document.getElementById('list').appendChild(node);
  txtReg.value = "";
  }
}

btnAdd.addEventListener('click', getRegistration);
