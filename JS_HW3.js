//Написать функцию, которая принимает товары (массив объектов) и возвращает 
//строку Самый дорогой товар <НАЗВАНИЕ> стоит  USD

let products = [
	{title: 'Product 1', category: 'tv', supplier: 'usa', price_usd: 1000},
	{title: 'Product 2', category: 'tv', supplier: 'germany', price_usd: 880},
	{title: 'Product 3', category: 'tv', supplier: 'china', price_usd: 500}
];

function most_expensive_product(products) {
    let big_price = products[0].price_usd;
    let exp_product = '';
	for (let n = 1; n < products.length; n++) {
		if (products[n].price_usd > big_price) {
            big_price = products[n].price_usd;
            exp_product = products[n].title;
        }
	}
    return console.log(`Самый дорогой товар ${exp_product} стоит ${big_price} USD`);
}

most_expensive_product(products);

//---------------------------------------------------------------------------------------
//Напишите функцию, которая выводит все числа от 1 до 100, кратные трем.

function divided_into_three() {
    for ( let num = 1; num <= 100 ; num++) {
    if(num % 3 == 0) {
       console.log(num); 
    }
    }
    }
divided_into_three();

//----------------------------------------------------------------------------------------
//Напишите функцию, которая находит сумму всех чисел от 1 до 100 и выводит ее в консоль.

function sum_all() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i; 
    }
    console.log(sum);
}
sum_all();