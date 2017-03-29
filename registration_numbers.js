var btnAdd = document.querySelector('.myAdd');
var txtReg = document.querySelector('.myText');
var myDwn = document.getElementById("dropdown");
//var ul = document.getElementById("list");
//var li = document.getElementsByTagName("li");

function getRegistration () {
if (txtReg.value.length > 0) {
  var node = document.createElement('li');
  var textNode = document.createTextNode(txtReg.value.substr(0,2).toUpperCase() + " " + txtReg.value.substr(2).toLowerCase());
  node.appendChild(textNode);
  document.getElementById('list').appendChild(node);
  txtReg.value = "";
  }
}

function checkTown (e)
{
    var myList = document.querySelectorAll('li');

    for (i=0; i< myList.length; i++)
    {
      //display all the towns
      if (e.target.value === "all")
      {
        myList[i].style.display = "block";
  //      console.log(myList[i]);
      }
      else if (myList[i].innerHTML.startsWith(e.target.value))
      {
        myList[i].style.display = 'block';
      }
      else {
        myList[i].style.display = 'none';
      }
    }
}

btnAdd.addEventListener('click', getRegistration);
myDwn.addEventListener('change', checkTown);
