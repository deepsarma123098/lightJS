//1.
// function fruit() { 

//    name = "Deep";
//   price = 40;
//   console.log(name);
//   console.log(price);

//   var name;

//   let price ;
// }
// fruit();


//2.


// for (var i = 0; i<2; i++) { 


//     setTimeout(()=>console.log(i), 1)
// }

//o/p: 3,3,3



// console.log([] == ![]);

// ( function (name, timeOfDay) { 
 
//   console.log('Good ' + timeOfDay + ' ' + name+'.Welcome Back!');
  

// } ) ('Jhon' , 'evening');



// var city = 'London';

// console.log(city);


//3.


// for (let i = 0; i<2; i++) { 


//     setTimeout(()=>console.log(i), 1)
// }

// o/p: 0,1,2


//4.

// console.log(+"true");
// console.log(typeof +true);

//If we put a + infront of a string or a boolean value then it is ocnveted to a numeric value.

//o/p: 1
//     number

//5.
// console.log(+"true");
// console.log(typeof +true);

//  But if we use "+true" then it becomes a String.

//o/p: NaN
//     number

//6.

// console.warn(!"anil");
// console.warn(typeof("anil"));

//o/p: false
//        string

//7.

let data = "size";

const bird = {

  size:"small",

};

console.warn(bird[data]);
console.warn(bird['size']);
console.warn(bird.size);
console.warn(bird.data);