//var myHeading = document.querySelector('h3');
//myHeading.textContent = 'Hello World!!';
/*
document.querySelector('html').onclick = function() {
	alert('you just poked me !!');
}*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/nz.jpg') {
      myImage.setAttribute ('src','images/nz2.jpg');
    } else {
      myImage.setAttribute ('src','images/nz.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'New Zealand is Awesome, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'New Zealand is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}