let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
    ]

    //questao1
 for (let i = 0; i < products.length; i+= 1) {
        products[i].id = i + 1
      }
console.log(products);     
console.log(`-------------------------`);
      
// questao 2
products.map(({ name } = element ) => {
console.log( name)});

console.log(`-------------------------`);

const questao3 = products.find(element => element.id == 3)
console.log(questao3);

console.log(`-------------------------`);


const questao4 = products.filter(element => (element.colors.includes('black')))
console.log(questao4);  

console.log(`-------------------------`);
 const questao5 = products.filter((product) => product.colors.length === 0);
 console.log(questao5);
console.log(`-------------------------`);
