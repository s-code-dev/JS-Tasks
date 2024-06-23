//56

// Дана некоторая строка:
// let str = 'a bc def ghij';
// let newArr = [];

// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:
// 'A BC DEF ghij'

// let arr = str.split(' ');

// for(let i = 0; i < arr.length; i++){

//     let elem = arr[i].split('');

//     if(elem.length <= 3){

//         newArr.push(arr[i].toUpperCase());



//     }else{

//         newArr.push(arr[i]);

//     }
// }


// console.log(newArr);

//57

// Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.

// let sym = 't';


// if(sym === sym.toUpperCase()){

//     console.log('В верхнем регистре');

// }else if (sym != sym.toUpperCase()){

//     console.log('В нижнем регистре');

// }

//58

// Дано некоторое число, например, такое:
// let num = 123789;
// let newArr = [];

// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:
// 28

// let elem = num.toString().split('');

// let reult = elem.filter((elem)=>elem%2 == 0);

// console.log(+reult.join(''));

//59

// Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.


// let str = 'FFFf';

// let elem = str.split('');

// let result = elem.filter((elem)=>elem == elem.toUpperCase()).length <= 2 ? 'заглавных букв не более двух' : 'заглавных букв более двух';

// console.log(result);

//60

// Дана некоторая строка:
// let num = '1 22 333 4444 22 5555 1';

// Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее:
// '1 22 333 22 1'

// let elem = num.split(' ');

// let result = elem.filter((elem)=> elem.length <= 3);

// console.log(result.join(' '));

//61

// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];

// Слейте эти массивы в новый массив следующим образом:
// [1, 2, 'a', 'b', 'c', 3]
// arr1.splice(2, 0, ...arr2)
// console.log(arr1);


//62

// Дано некоторое число:
// let num = 123456;
// let newArr = [];

// Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:
// 12 + 34 + 56

// let elem = num.toString().split('');

// for(let i = 0; i < elem.length; i++){

//     newArr.push(elem[i]+elem[i+1]); 
//     i++;

// }

// console.log(newArr.reduce((acc, elem)=> acc+ +elem ,0));

//63

// Дан массив с числами:
// let arr = [1, 2, 3, 4, 5];

// Выведите в консоль элементы этого массива в обратном порядке. 
//  console.log(arr.reverse().join(' '));
//64

// Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.

// let str = 'dsvr5656';
// let result = str.split('');
// let solve = result.filter((elem) => elem != +elem).length <= 3 ? 'в этой строке не более трех букв' : 'в этой строке более трех букв';


// console.log(solve);

//65

// Дано число. Получите первую четную цифру с конца этого числа.

// let num = 486;

// let arr = num.toString().split('');
// let count = 0;

// for(let i = arr.length - 1; i >= 0; i--){
//     count++;

    // console.log(arr[i]);

//     if( count === 1 && arr[i] % 2 == 0 ){

//         console.log(arr[i]);
//         break;

//     }else if( count === 2 && arr[i] % 2 == 0 ){

//         console.log(arr[i]);
//         break;

//     }




// }

//66

// Дана некоторая строка:
// let str = 'abcde abcde abcde'

// Замените в ней первый символ каждого слова на '!':
// '!bcde !bcde !bcde'

//  let res = str.replace( /a/g, '!');

//  console.log(res);

//67

// Дан массив с числами:
// let arr = [1, 2, 2, 10, 4, 5]

// Проверьте, что в этом массиве есть два одинаковых элемента подряд.

// for(let i = 0; i < arr.length; i++){

//     if(arr[i] === arr[i+1]){

//         console.log('Есть два элемента подряд');
//         break;

//     }

// }
//68

// Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.

// let num = 145;

// let elem = +num.toString().split('').sort().join('');

// console.log(num === elem ? 'По возрастанию' : 'Не по возрастанию');



//69

// Дан массив:
// let arr = [1, '', 2, 3, '', 5];

// console.log(arr.join('').split('').map((elem)=>{
//     return +elem;
// }));

// Удалите из массива все пустые строки.

//70

// Дан массив:
// let num = [
// 	[2, 1, 4, 3, 5],
// 	[3, 5, 2, 4, 1],
// 	[4, 3, 1, 5, 2],
// ];

// let newArr = [];

// for(let i = 0 ; i < num.length; i++){

//     newArr.push(num[i].sort());


// }

// console.log(newArr);

// Отсортируйте элементы в каждом подмассиве.

//71

// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];
// arr2.splice(3, 2)
// console.log(arr2);

// Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми. 

//72

// Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.

// let i = 10;

// console.log(+i.toString()[i.toString().length - 2] % 2 == 0  && +i.toString()[i.toString().length - 2] != 0);
// while(i < 1000){

//     if(+i.toString()[i.toString().length - 2] % 2 == 0  && +i.toString()[i.toString().length - 2] != 0){

//         console.log(i);

//     }

//     i++;
// }

//73

// Дан массив. Удалите из него каждый пятый элемент.

// let arr = [1, 2, 5, 6, 7, 8];

// let res = arr.filter((el, i)=>{

    // if(i % 5 != 0){

        // return i % 2 !== 0;

        

    // }

    // console.log(i);

// })

// console.log( res );

//74

// Дана некоторая переменная с числом:
// let num = 5;
// let str = '';

// Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка:
// '00000'

// for(let i = 0; i < num; i++){

//     str += '0';

// }

// console.log(str);

//75

// Дана некоторая строка со словами:
// let str = 'aaa bbb ccc eee fff';
// let st = [];

// Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:
// 'aaa ccc fff'

// let res = str.split(' ');

// for(let i = 0; i < res.length; i = i+2){

//     st.push(res[i]);

   

// }

//  console.log(st.join(' '));

//76

// Дан массив:
// let str = [
//             [1, 2, 3],
//             [4, 5, 6],
//             [7, 8, 9],
//           ];

// let num = 0;


// for(let i = 0; i < str.length; i++){

//     for(let j = 0; j < str[i].length; j++){

//         num += str[i][j];

//     }

// }


// console.log( num );

// Найдите сумму элементов этого массива. 