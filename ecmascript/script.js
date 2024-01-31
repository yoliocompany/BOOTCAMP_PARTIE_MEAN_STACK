

// function affiche() {

//     for (var i = 0; i < 5; i++) {
//         console.log(i);
//         let x = 10;
//         console.log(x);
//     }

//     console.log(i);

// }

// affiche()


// default parameter value
// const callUser = (name = 'Guest')=>{
//     console.log( 'Hello ', name);
// }


// callUser('Amine');


// rest parameter

// const somme = ( ...tab )=>{

//     console.log(tab);
// }


// somme( 'aaa', 'bbb', 'ccc' );


// parameter spread

// let users = [ 'Amine', 'Amira', 'Salim', 'Salma' ];

// const display = ( a ,b ,c ,d )=>{
    
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);

// }

// display(  ...users  );

// let oldCars = [ '205', '404', '106' ];

// let cars = [ ...oldCars ];


// cars.push('105');


// console.log(oldCars);
// console.log(cars);


// For of loop

// let oldCars = [ '205', '404', '106' ];

// for( let car of oldCars ){

//     console.log(car);

// }


// let oldCars = [ '205', '404', '106','404' ];

// // let c1 = oldCars[0];
// // let c2 = oldCars[1];
// // let c3 = oldCars[2];

// let [ c1 , c2 , , c3 ] = oldCars;

// console.log(c1);


// object

// let product = {

//     name: 'sqdqsd',
//     description:'qsdqsdqsdqsd',
//     price: 90

// }


// // let description = product.description;
// // let name = product.name;
// // let price = product.price;

// let  { description : desc , name  , price } = product;


// console.log(desc);





// modules


import { long, maj , min, space } from './lib/string.js';

let phrase = 'LKSQDJQS DSQLKQJSDQS DQSLKDJQSD QSLDKJQSD';


long(phrase);

