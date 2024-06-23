
//47
// Дана некоторая строка, например, вот такая:
// let a = '023m0df0dfg0';

// Получите массив позиций всех нулей в этой в строке.

// for(let i = 0; i < a.length; i++ ){

//     if(a[i] == '0'){

//         console.log(i);

//     }

// }


//48
// Дана некоторая строка:
// let a = 'abcdefg';
// let newA = [];

// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:
// 'abdeg'

// let count = 0
// for(let i = 0; i < a.length; i++){
//     count++;
//     if(count%3 != 0){

//         newA.push(a[i]);

//     }

// }


// console.log(newA.join(''));




//49
// Дан некоторый массив, например, вот такой:
// let a = [1, 2, 3, 4, 5, 6];

// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях. 


// let b = a.filter((elem) => elem % 2 === 0).reduce((acc, elem) => acc+elem , 0);
// let c = a.filter((elem) => elem % 2 != 0).reduce((acc, elem) => acc+elem ,0)

// console.log(Math.round(b/c));
// console.log(c);

//50

// Дана некоторая строка с буквами и цифрами. 
// Получите массив позиций всех цифр из этой строки.

// let str = 'dvd456dv4456vd';

// let arr = str.split('');

// for(let i = 0; i < arr.length; i++){

    // console.log(arr[i]);
//     if(Number.isInteger(+arr[i])){

//         console.log(i);

//     }
// }

//51

// Дан массив с некоторыми числами, например, вот такой:
// let a = [123, 456, 789];

// Напишите код, который перевернет числа в этом массиве по следующему принципу:
// [321, 654, 987]

// let newArr = [];

// a.forEach((elem)=>{

//     newArr.push(+(elem.toString().split('').reverse().join('')))


// })

// console.log(newArr);

//52

// Дана некоторая строка с числом:
// let str = '1234567345355';
// let newStr = '';

// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:
// '1 234 567'

// let arr = str.split('');

// for(let i = 0; i < arr.length; i++){

//     if(i === 0){

//         newStr += `${arr[i]}`;

//     }else if( i == 1){

//         newStr += ` ${arr[i]}`;

//     }else if( i % 3 == 0){

//         newStr += `${arr[i]} `;

//     }else{

//           newStr += `${arr[i]}`;

//     }
// }


// console.log(newStr);

//53

// Дана некоторая строка:
// let a = 'AbCdE';

// Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее:
// 'aBcDe'

// let arr = a.split('');
// let newArr = [];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] === arr[i].toUpperCase()){

//         newArr.push(arr[i].toLowerCase());

//     }else{

//         newArr.push(arr[i].toUpperCase());
    
//     }
// }


// console.log(newArr.join(''));

//54

// Дан некоторый массив с числами, например, вот такой:
// let arr = [1, 2, 3, 4, 5, 6];
// let newArr = [];

// // Слейте пары элементов вместе:
// // [12, 34, 56]


// for(let i = 0; i < arr.length; i++){


//     num = arr[i].toString() + arr[i+1].toString() ;

//     newArr.push(num);

//     // newArr
//     i++;

   

// }

//  console.log(newArr);

//55

// Дана некоторая строка со словами:
// let a = 'aaa bbb ccc eee fff';

// let newArr = [];
// let strNew = '';

// Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее:
// 'aaa Bbb ccc Eee fff'

// let elem  = a.split(' ');

// for(let i = 0; i < elem.length; i++){

//     if( i != 0 && i%2 != 0){

//         let elemWord = elem[i].split('');
//         let strWord = '';

//         for(let j = 0; j < elemWord.length; j++){

//             if(j === 0){

//                 strWord +=  elemWord[j].toUpperCase();

//             }else{

//                 strWord += elemWord[j];

//             }

//         }

//         newArr.push(strWord);



//     }else{

//         newArr.push(elem[i]);

//     }

    
// }


// console.log(newArr);


