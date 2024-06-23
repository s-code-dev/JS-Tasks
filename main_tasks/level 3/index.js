
//38
// Даны два слова. Проверьте, что 
// последняя буква первого слова совпадает с первой буквой второго слова.

// let a = 'привет';
// let b = 'тривет';

// console.log(a[a.length - 1] === b[0] ? 'совпадает': 'несовпадает');

//39

// Дана некоторая строка. Найдите позицию третьего нуля в строке.

// let str = 'fdvc000';

// let zero  = 0;

// for(let i = 0; i < str.length; i++){

//     if(str[i] == '0'){
//         zero++
//         if(zero === 3){
//             console.log(i);
//             break;
//         }
//     }

// }

//40

// Даны числа, разделенные запятыми:
// let num = '12,34,56'

// Найдите сумму этих чисел.

// let res = num.split(',').reduce((acc, elem)=> acc+ +elem,0);

// console.log(res);

//41

// Дана дата в следующем формате: 
// let d = new Date('2025-11-31');

// console.log(d);

// let ob = {
//     year: d.getFullYear(),
//     month: d.getMonth() + 1,
//     day: d.getDate(),
// }

// console.log(ob);


// Преобразуйте эту дату в следующий объект:
// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }

//42

// Дана некоторая строка с буквами и цифрами. 
// Получите позицию первой цифры в этой строке.

let str = 'fsdv90';
for(let i = 0; i < str.length; i++){

    if(Number.isInteger(+str[i])){
        console.log(i);
        break;
    }

}


//43

// Дан объект с ключами и значениями. 
// Запишите в первый массив ключи объекта, а во второй - значения.

// let ob = {
//     'i': 'hj',
//     'j': 'ld'
// }

// let key = [];
// let val = [];

// for(str in ob){
//     key.push(str);
//     val.push(ob[str]);
// }

// console.log(key);
// console.log(val);

//44

// Дано число. Выведите в консоль количество четных цифр в этом числе.

// let num = 65654;

// let arr = num.toString().split('');
// let sum = 0;
// arr.forEach((elem) => {
//      if(elem % 2 === 0){
//         sum ++;

//      }
// })
// console.log(sum);

//45

// Дана некоторая строка:
// let a = 'abcde';

// Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:
// 'AbCdE'

// let b = [];

// let num = 0;

// a.split('').forEach((elem) => {

//     num++;

//     if(num % 2 != 0){

//         b.push(elem.toUpperCase());

//     }else{

//         b.push(elem)

//     }

   

// })


// console.log(b.join(''));

//46

// Дана некоторая строка со словами:
// let a = 'aaa bbb ccc'

// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:
// 'Aaa Bbb Ccc'

// let arr = a.split(' ');

// let arr2 = [];

// console.log(arr);

// for(let i = 0; i < arr.length; i ++){

//     let word = arr[i].split('');
//     let ar = [];

//     for(let j = 0; j < word.length; j ++){

//         if(j === 0){

//             ar.push(word[j].toUpperCase());

//         }else{

//             ar.push(word[j]);

//         }
//     }

//     arr2.push(ar);


// }

// let str2 = '';

// for(elem in arr2){
//     console.log(arr2[elem]);

//     str2 += `${arr2[elem].join('')} `;
// }

// console.log(str2);