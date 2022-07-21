const shippingPrice = (price) => {
  let shipping = 0;
  const grup1 = 300;
  const grup2 = 450;
  const grup3 = 700;
  {
    if (price > 0 && price <= 2000) {
      shipping = grup1;
    } else if (price > 2000 && price <= 4000) {
      shipping = grup2;
    } else {
      shipping = grup3;
    }
  }
  return shipping;
};

const calcularPreco = (laptop, price) => {
  return `O produto ${laptop} custa ${price}. Seu custo de envio é ${shippingPrice(
    price
  )}. Portanto, o preço final é ${price + shippingPrice(price)}`;
};

console.log(calcularPreco(`Macbook`, 2500));
