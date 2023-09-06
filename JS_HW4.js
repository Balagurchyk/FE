Описать три произвольных товара (название, цена) и написать функцию,
 которая принимает массив товаров и возвращает их среднюю стоимость


let products = [
  { title: "Product 1", price_usd: 500 },
  { title: "Product 2", price_usd: 600 },
  { title: "Product 3", price_usd: 700 },
];
function average_price(products) {
  let sum = 0;
  let average_cost;
  for (let n = 0; n < products.length; n++) {
    sum += products[n].price_usd;
    average_cost = sum / products.length;
  }
  return console.log(`Средняя стоимость равна ${average_cost} USD`);
}
average_price(products);


--------------------------------------------------------------------------------------

 Написать функцию, которая принимает стоимость (заказа), применяет к
 ней произвольную скидку от 5 до 10% и возвращает стоимость со скидкой

1-й вариант:

let order_cost = +prompt("Введите стоимость заказа: ");
let discount = Math.random() * 0.06 + 0.05;
function apply_discount(order_cost, discount) {
  let discount_price = order_cost * (1 - discount);
  console.log(discount);
  return console.log(`К оплате со скидкой: ${Math.floor(discount_price)} USD`);
}
apply_discount(order_cost, discount);


---------------------------------------------------------------------------------------

2-й вариант(более красивый):

let order_cost = +prompt("Введите стоимость заказа: ");
let discount = Math.floor(Math.random()) * 6 + 90;
function apply_discount(order_cost, discount) {
  let discount_price = (order_cost * discount) / 100;
  console.log(discount);
  return console.log(
    `К оплате со скидкой ${100 - discount}% будет ${discount_price} USD`
  );
}
apply_discount(order_cost, discount);
