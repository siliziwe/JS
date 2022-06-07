'use strict';
const container = document.querySelector('.container');
const textarea = document.querySelector('.text');
const alphabet = document.querySelectorAll('.alpha');
const key = document.querySelectorAll('.key');
let checkCaps = false;
let checkLights = false;
//CAPSLOCK
const caps = function () {
  if (checkCaps == false) {
    for (let i = 0; i < alphabet.length; i++) {
      let getAlpha = alphabet[i].textContent;
      const up = getAlpha.toUpperCase();
      alphabet[i].textContent = up;
    }
    checkCaps = true;
  } else {
    for (let i = 0; i < alphabet.length; i++) {
      let getAlpha = alphabet[i].textContent;
      const low = getAlpha.toLowerCase();
      alphabet[i].textContent = low;
    }
    checkCaps = false;
  }
};
//Lights
const blink = function () {
  if (checkLights == false) {
    key.forEach((key) => key.classList.add('lightOn'));
    checkLights = true;
  } else {
    key.forEach((key) => key.classList.remove('lightOn'));
    checkLights = false;
  }
};
//Event listener
container.addEventListener('click', function (e) {
  if (e.target.classList.contains('key')) {
    if (e.target.classList.contains('spaceBar')) {
      textarea.textContent += ' ';
    }
    if (e.target.classList.contains('caps')) {
      caps();
    }
    if (e.target.classList.contains('content')) {
      const getContent = e.target.textContent;
      textarea.textContent += getContent;
    }
    if (e.target.classList.contains('backSpace')) {
      textarea.textContent = textarea.textContent.substring(
        0,
        textarea.textContent.length - 1
      );
    }
    if (e.target.classList.contains('light')) {
      blink();
    }
  } else {
    return;
  }
});

























/*let items = ['Asemahle Queenie', 'Philani Mxathule', 'Luvuyo Mbaqa', 'Sibongile Rwayi', 'Inganathi Neti', 'Lunako Mqolo', 'Simphiwe Vuntu',
'Athenkosi Biko', 'Odwa Shumane', 'Yamkela Barnes'];
let ul = document.getElementById('items');
items.forEach( (item) => {
    ul.innerHTML += `
    <li class='bgDarkCyan'>${item}</li>
    `;
    ul
})*/

// const person = ['Asemahle Queenie', 'Philani Mxathule', 'Luvuyo Mbaqa', 'Sibongile Rwayi', 'Inganathi Neti', 'Lunako Mqolo', 'Simphiwe Vuntu',
// 'Athenkosi Biko', 'Odwa Shumane', 'Yamkela Barnes'];
// document.getElementById("demo").innerHTML = person[4];
// console.log(person)

// let names = ['peter', 'John', 'Sarah', 'Grace', 'Joel', 'Rachel', 'Naomi', 'Divine', 'Becky', 'Ruth']
// console.log(names.length),
// index/position
// console.log(names[0]),
// let middle


// switch(marks) {
//     case 100:
//         console.log("A+")
//     break;
//     case 98:
//     case 97:
//     case 85:
// }


























// var array = [1,2,8,4,5];
// function middle(i) {
//   if (array[i] !== undefined) {
//     return middle(i+1);
//   } else {...