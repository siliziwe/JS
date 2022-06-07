let items = ['Asemahle Queenie', 'Philani Mxathule', 'Luvuyo Mbaqa', 'Sibongile Rwayi', 'Inganathi Neti', 'Lunako Mqolo', 'Simphiwe Vuntu',
'Athenkosi Biko', 'Odwa Shumane', 'Yamkela Barnes'];
let ul = document.getElementById('items');
items.forEach( (item) => {
    ul.innerHTML += `
    <li class='bgDarkCyan'>${item}</li>
    `;
    ul
})
