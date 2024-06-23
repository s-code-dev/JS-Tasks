//26

// Заполните массив случайными числами из промежутка от 1 до 100.




// console.log( );


// function randomNam(){

//       let nunRundom = Math.random()

//       return Math.round(nunRundom * (100 - 1)+1)

// }

// let i = 1

// let arr = [];

// while(i <= 100){

//       arr.push(randomNam());


//       i++;

// }

// console.log(arr);

//27
// Дано некоторое число:
// let num = 12345;
// let strNum = num.toString();

// let arrNum = strNum.split('');

// console.log(+arrNum.reverse().join(''));

// Выведите в консоль все его символы с конца.

//28
// Дан некоторый массив, например, вот такой:
// let arr = [1, 2, 3, 4, 5, 6];

// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
// [1, 2]
// [3, 4]
// [5, 6]

// for(let i = 0; i < arr.length; i++){

//     let num = [];
//     num.push(arr[i]);
//     num.push(arr[i+1]);
//     i++;
//     console.log(num);
// }

//29
// Даны два массива:
// let arr2 = [4, 5, 6];
// let arr1 = [1, 2, 3];


// Слейте эти массивы в новый массив:
// [1, 2, 3, 4, 5, 6]

// console.log([...arr1, ...arr2]);

// console.log(arr1.concat(arr2));


//30

// Дана некоторая строка. Найдите позицию первого нуля в строке.

// let str = 'sdsdv 0 0';

// console.log(str.length);

// for(let i = 0; i < str.length; i++){

//     if(str[i] == '0'){
//         console.log(i);
//         break;
//     }

// }

//31

// Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
// let i = 1;

// while(i <= 1000){

//     if(+i.toString()[0] + +i.toString()[1] == 5 && i > 10){

//         console.log(i);

//     }
//     i++;
// }

//32

// Дан массив. Удалите из него элементы с заданным значением.

// let arr = [
//     'name',
//     'age',
//     'elem'
// ]

// let deleteElem = 'name';




// function getNewArray(arr, deleteElem){

//     let newArr = [];

//     for(element of arr){

//         if(element === deleteElem){
//             continue;

//         }else{
//             newArr.push(element);
//         }
        
//     }

//     return newArr;

// }

// let result = getNewArray(arr, deleteElem);

// console.log(result);

//33

// Дан некоторый массив, например, вот такой:
// let arr = [1, 2, 3, 4, 5, 6]

// Найдите сумму первой половины элементов этого массива. 

// let res = arr.slice(0, Math.floor(arr.length/2));

// console.log(res.reduce((acc, elem)=>acc+elem, 0));

//34
// Дан массив с числами. Подсчитайте количество 
// отрицательных чисел в этом массиве.

// let arr = [
//     12, 12, -21, -65, -87, -78
// ]



// let new1 = arr.filter((elem)=>{ 
    

//         return elem < 0;

// });

// console.log(new1.length);

//35

// Дан массив с числами. Оставьте в нем только положительные числа.

// let arr = [
//     12, 12, -21, -65, -87, -78
// ]

// let new1 = arr.filter((elem)=> elem > 0 );

// console.log(new1);

//36

// Дана строка. Удалите предпоследний символ из этой строки.

// let str = 'Привет46';

// let arr = str.split('');

// console.log(arr.splice(-2, 1));
// console.log(arr.join(''));

//37

// Дан некоторый массив, например, вот такой:
// let arr = [1, 2, 3, 4, 5, 6]

// Поделите сумму первой половины элементов этого 
// массива на сумму второй половины элементов.

// let leftArr = arr.slice(0, Math.floor(arr.length/2));
// let rightArr = arr.slice(-Math.floor(arr.length/2));

// let sum1 = leftArr.reduce((acc, elem)=>acc+elem, 0);

// let sum2 = rightArr.reduce((acc, elem)=>acc+elem, 0);

// console.log(sum1/sum2);