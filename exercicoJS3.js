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

    products.push({name: 'Play5', price: 5000, quantity:50, colors: ['white']})

    console.log(products);
    console.log('--------------------');


    const newList = products.filter(element => element.quantity > 0 );

    console.log(newList);

    console.log('--------------------');

    const total = products.reduce((counter, product) => {
        counter +=product.quantity
        return counter
    },0)

    console.log(total);

    console.log('--------------------');


    const majorPrice = (initialPrice) => products.filter(element => element.price > initialPrice );

    console.log(majorPrice(300));

    console.log('--------------------');


    const nameInclude = products.filter(element => element.name.includes('o'))

    console.log(nameInclude);



