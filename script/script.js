// ---------обратный цикл------------------------
// let out = " "
// for (i = 11; i >= 1; i--) {
//     out = i - 1;
//     document.querySelector('.out').innerHTML += out + " ";
// }
// ----------------------------------------------------------------




// ------------разобраться------задача 7 урока 5 циклы---------
// document.querySelector("button").onclick = function () {
//     let inp = document.querySelector("input").value;
//     for (i = inp.length; i >= 1; i--) {
//         inp = i - 1;
//         document.querySelector('.out').innerHTML += inp + " ";
//     }
// }




// -----------------------------Вывод oт 10 до 0 с шагом 2--------

// let out = " "
// for (i = 0; i < 11; i = i + 2) {
//     out += i + " ";
//     document.querySelector('.out').innerHTML = out;
// }

// -------------------вывод чисел от 21 до 0 с шагом 3 --------------

// for (i = 21; i >= 0; i = i - 3) {
//     let out = i + " ";
//     document.querySelector(".out").innerHTML += out;
// }

// -----Функция выводит в консоль содержимое всех div.one------
// 
// let sun = document.querySelectorAll(".one");
// document.querySelector("button").onclick = () => {
//     for (i = 0; i < sun.length; i++) {
//         document.querySelector(".out").innerHTML = i;
//     }
// }

// ------------выводит в консоль содержимое всех div.one-------
// document.querySelector("button").onclick = () => {
//     let sun = document.querySelectorAll('input[type = "text"]');
//     for (i = 0; i < sun.length; i++) {
//         // let sun2 = sun.value;
//         console.log(sun[i].value);
//     }
// }
// ---------------------------------------------------------------





// -------------разобраться Task 17.
// Добавьте кнопку.При нажатии кнопки делайте
// первый из созданных radiobutton в примере выше - checked.
// document.querySelector("button").onclick = () => {
//     let first = document.querySelector("#first");
//     let radio = document.querySelectorAll('input[type="radio"]');
//     for (i = 0; i < radio.length; i++) {
//         if (radio.value) {
//             console.log("yra");
//             first.innerHTML = 'checked';
//         }




// ------------------------------ урок 6 --С помощью вложенных циклов, нарисуйте строку:
// let out = document.querySelector(".out");
// for (i = 1; i < 4; i++) {
//     out.innerHTML += `<br>${i}<br>`;
//     for (k = 0; k < 5; k++) {
//         out.innerHTML += '*_';
//     }
// }
// ---------------таблица умножения-------------------------
// 
// for (i = 1; i <= 9; i++) {
//     for (k = 1; k <= 9; k++) {
//         document.querySelector(".out").innerHTML += `${i}*${k}=${i * k}<br>`;
//     }
//     document.querySelector(".out").innerHTML += '<hr>';
// }

// ---РАЗОБРАТЬСЯ------С помощью вложенных циклов, нарисуйте строку----
// ------0_10_1_9_2_8_3_7_4_6_5_5_6_4_7_3_8_2_9_1_10_0_ 

// for (i = 0; i <= 10; i++) {
//     document.querySelector(".out").innerHTML += i + "_";
//     for (k = 10; k >= 0; k--) {
//         document.querySelector(".out").innerHTML += `${k}_`;

//     }
// }
// --------------------С помощью вложенных циклов, нарисуйте строку:
// 101010
// 101010
// 101010
// for (k = 0; k <= 2; k++) {
//     document.querySelector(".out").innerHTML += '<br>';
//     for (i = 0; i <= 6; i++) {
//         if (i % 2) {
//             document.querySelector(".out").innerHTML += "1";
//         }
//         if (i == 1 || i == 3 || i == 5) {
//             document.querySelector(".out").innerHTML += "0";
//         }
//     }
// }
// -----------------------------Рисуем пирамидку---------
// *
// **
// ***
// ****
// for (i = 0; i <= 4; i++) {
//     for (k = 0; k <= i; k++) {
//         document.querySelector(".out").innerHTML += `*`
//     }
//     document.querySelector(".out").innerHTML += '<br>'

// }
// ----------------Рисуем пирамидку вниз-----------------
// *****
// ****
// ***
// **
// *
// for (i = 5; i >= 0; i = i - 1) {
//     for (k = 0; k <= i; k++) {
//         document.querySelector('.out').innerHTML += '*';
//     }
//     document.querySelector('.out').innerHTML += '<br>';

// }

// -----------------Рисуем пирамидку из цифр-------------
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// for (i = 1; i <= 5; i++) {
//     for (k = 1; k <= i; k++) {
//         document.querySelector('.out').innerHTML += `${k} `;
//     }
//     document.querySelector('.out').innerHTML += `<br>`;
// }

// ----------------------Рисуем --------------------
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// for (i = 1; i <= 50; i++) {
//     if (i < 10) {
//         document.querySelector(".out").innerHTML += `0`;
//     }
//     if (i == 11 || i == 21 || i == 31 || i == 41) {
//         document.querySelector(".out").innerHTML += '<br>';
//     }
//     document.querySelector(".out").innerHTML += i + " ";
// }


// ----------------------Рисуем ----Разобраться---------------
//      *****
//     *****
//    *****
// for (i = 0; i <= 2; i++) {
//     if (i == 0) {
//         document.querySelector(".out").innerHTML += "_" + "_";
//     }
//     else if (i == 1) {
//         document.querySelector(".out").innerHTML += "_";
//     }
//     for (k = 0; k <= 7; k++) {
//         document.querySelector(".out").innerHTML += "*";
//     }
//     document.querySelector(".out").innerHTML += "<br>";
// }

// Task 7.
// С помощью вложенных циклов и символа * нарисуйте:
//    *
//    **
//    ***
//    **
//    *
// for (i = 0; i < 3; i++) {
//     for (k = 0; k < i; k++) {
//         document.querySelector(".out").innerHTML += "*";
//     }
//     document.querySelector(".out").innerHTML += `<br>`;
// }
// for (i = 3; i >= 0; i = i - 1) {
//     for (k = 0; k < i; k++) {
//         document.querySelector(".out").innerHTML += "*";
//     }
//     document.querySelector(".out").innerHTML += `<br>`;
// }
// 
// --------------Task 8------------Разобраться ------.
// С помощью вложенных циклов и символа * нарисуйте:
// 	******
// 	*    *
// 	*    *
// 	*    *
//  ******
// for (i = 0; i < 8; i++) {
//     document.querySelector(".out").innerHTML += `*`;
// }
// for (k = 1; k <= 3; k++) {
//     document.querySelector(".out").innerHTML += `<br>`;
//     document.querySelector(".out").innerHTML += `*`;
//     for (x = 0; x < 9; x++) {
//         document.querySelector(".out").innerHTML += '&nbsp';
//         if (x == 8) {
//             document.querySelector(".out").innerHTML += `*`;
//         }
//     }
//     document.querySelector(".out").innerHTML += `<br>`;
// }
// for (i = 0; i < 8; i++) {
//     document.querySelector(".out").innerHTML += `*`;
// }

// ----------------------------------Task 1. ---урок 7 функции----
// Напишите функцию t1, которая при 
// нажатии кнопки выводит в out  переменную a1.
// let a1 = 8;
// function t1() {
//     document.querySelector(".out").innerHTML = a1;
// }
// document.querySelector("button").onclick = t1;

// ----------------Task 2--------------------------------
// Изменим задачу 1. Сейчас она только выводит переменную в заранее заданный 
// блок.Давайте сделаем так, чтобы функция, была более гибкой.Пусть теперь 
// функция t2 возвращает переменную a2.Поскольку функция возвращает переменную, 
// то имя функции со скобками(вызов функции) можно встраивать в выражения.
// Обратите внимание, как изменился вызов функции.
// let a2 = 8;
// function t2() {
//     document.querySelector(".out").innerHTML = a2;
//     return a2;
// }
// document.querySelector("button").onclick = function () {
//     document.querySelector("out").textContent = t2();
// }

// -----------------Task 3--------------------------------
// Наша предыдущая функция, сильно все еще зависима от внешних переменных.
// Давайте сделаем ее более универсальной.Пусть функция t3 принимает 2 параметра
// и выводит их произведение.Допишите код функции так, чтобы она возвращала 
// произведение двух чисел, переданных ей в качестве параметра a, b.Протестируем 
// функцию на двух примерах, с помощью кнопок b3 - 1 и b3 - 2.

// function t3(a, b) {
//     return a * b;
// }
// document.querySelector(".btn1").onclick = function () {
//     document.querySelector(".btn1").textContent = t3(3, 4);
// }
// document.querySelector(".btn2").onclick = function () {
//     document.querySelector(".btn2").textContent = t3(5, 6);
// }

// -------------Task 4------------------------
// Напишите функцию t4 которая принимает ваш год рождения и вычисляет 
// ваш возраст.
// function bird() {
//     return 2019;
// }
// document.querySelector('button').onclick = function t4() {
//     let day = document.querySelector("input").value;
//     document.querySelector(".out").textContent = bird() - day;
// }

// ---------------урок 8. Цикл While, Do While-------------------------
// ------------------Task 1-------------------------------------------
// Кнопка b - 1 запускает функцию t1.Функция должна выводить в out - 1 строку вида:

//     1 2 3 4 5 6 7 8 9...49 50

// от 1 до 50 включительно.Разделитель - пробел.Задача решается с помощью цикла
// while.
// let i = 0
// document.querySelector('button').onclick = function t1() {
//     let out = document.querySelector(".out");
//     while (i < 50) {
//         i++
//         out.textContent += i + " ";
//     }
// }

// ---------------------Task 2------------------------------------------
// Кнопка b - 2 запускает функцию t2.Функция должна выводить в out - 2 строку вида:

//     2 4 6...122

// от 2 до 122 c шагом 2. Разделитель - пробел.Задача решается с помощью цикла
// while.
// let i = 0
// document.querySelector('button').onclick = function t1() {
//     let out = document.querySelector(".out");
//     while (i < 122) {
//         i = i + 2
//         out.textContent += i + " ";
//     }
// }

// ----------------------------Task 3--------------------------------
// Кнопка b - 3 запускает функцию t3.Функция должна выводить в out - 3 строку вида:

//     25 24 23 22..7

// от 25 до 7 c шагом 1. Разделитель - пробел.Задача решается с помощью цикла
// while.
// let i = 26
// document.querySelector('button').onclick = function t1() {
//     let out = document.querySelector(".out");
//     while (i > 7) {
//         i--
//         out.textContent += i + " ";
//     }
// }

// -----------------------------Task 4---------------------------------------
// Кнопка b - 4 запускает функцию t4.Функция должна выводить в out - 4 строку вида:

//     77 _74_71_68_65_62_..._38_35_

// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания.Задача решается с помощью цикла
// while.
// let i = 80
// document.querySelector('button').onclick = function t1() {
//     let out = document.querySelector(".out");
//     while (i > 35) {
//         i = i - 3
//         out.textContent += i + " ";
//     }
// }

// --------------------------Task 5----------------------------------
// Кнопка b - 5 запускает функцию t5.Функция должна выводить в out - 5 строку вида:

// 1_ *2_ **3_ *4_ ** ... 17_ *

//     от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и 
//     звездочка(если число нечетное, и две звездочки если четное).Задача 
//     решается с помощью цикла while.

// let i = 0;
// document.querySelector('button').onclick = function t1() {
//     let out = document.querySelector(".out");
//     while (i < 17) {
//         i++
//         if (i % 2) {
//             document.querySelector(".out").innerHTML += i + "_*";
//         } else {
//             document.querySelector(".out").innerHTML += i + "_**";
//         }
//     }
// }





// --------------------------Task 6------Разобраться -------------------------
// Кнопка b - 6 запускает функцию t6.Функция должна выводить в out - 6 строку вида:

// ******  ****** ******
//     Задача решается с помощью цикла.В каждой итерации цикл выводит 6 звездочек
//      без пробелов и символ переноса строки br.Количество строк(итераций, 
//         повторений) цикла while вводит пользователь в i - 6.

// let i = 0;

// document.querySelector('button').onclick = function () {
//     let out = document.querySelector(".out");
//     for (x = 0; x < 7; x++) {
//         while (i < 6) {
//             out.innerHTML += "*";
//             i++
//         }
//         out.innerHTML += " ";
//     }
// }


// -----------Unit 9. Работаем с DOM--------------task 1----------------
// Напишите функцию func_1, которая присваивает p.u-1 ширину 200px. Проверьте ее работу. Допишите возможность присваивать высоту равную 100px

// let p = document.querySelector(".u-1")
// function func_1(num) {
//     p.style.width = num;
// }
// func_1('200px');

// ---------------------task 2-----------------------------------------
// Напишите функцию func_2, которая будучи запущенной присваивает блоку p.u - 2 класс css - 1. Задайте данному классу через CSS зеленый цвет фона.
// let p1 = document.querySelector(".u-2");

// function func_2() {
//     p1.classList.add("css-1");
//     p1.style.backgroundColor = 'green';
// }
// func_2();
// 
// -----------------------Task 3------------------------------------------
// Используя цикл, добавьте на все блоки p.u - 3 событие onclick.По клику запускайте функцию func_3, которая окрашивает элемент, на котором произошло событие в красный цвет фона.Для обращения внутри функции к такому элементу используйте this.
// let u = document.querySelectorAll(".u");
// for (x = 0; x < u.length; x++) {
//     u[x].onclick = function func_3() {
//         this.style.backgroundColor = 'red';
//     }
// }

// ------Task 4--------------------------------
// Используя цикл, добавьте на все блоки p.u - 4 событие onclick.По клику запускайте функцию func_4, которая присваивает элементу, на котором произошло событие, класс css - 2. Для обращения внутри функции к такому элементу используйте this.
// let u4 = document.querySelectorAll(".u-4");
// for (x = 0; x < u4.length; x++) {
//     u4[x].onclick = function func_4() {
//         this.classList.add('css-2');
//     }
// }

// -----------------------Task 5-------------------------------
// C помощью цикла, повесьте на блоки p.u - 5 функцию func_5, которая при клике будет удалять класс css - 3 с элемента, на котором произошло событие.
// let u5 = document.querySelectorAll(".css-3");
// for (x = 0; x < u5.length; x++) {
//     u5[x].onclick = function func_5() {
//         this.classList.remove("css-3");
//     }
// }

// -------------------Task 6-----------------------------
// Есть кнопка.u - 6. Напишите функцию, которая при клике делает toggle классу.active для данной кнопки.
// let btn = document.querySelector(".active");
// btn.onclick = () => {
//     btn.toggleAttribute('active');
// }

// ---------------------Task 7----------------------
// Напишите функцию func - 7, которая будучи запущенной возвращает количество элементов с классом css - 3.
// let u5 = document.querySelectorAll(".css-3");

// function func_7() {
//     console.log(u5.length);
// }
// func_7();

//------------Task 8----------------------------------
// Напишите функцию func - 8, которая будучи запущенной, присваивает всем элементам p.u - 1 атрибут title со значением test - data.
// let u6 = document.querySelectorAll(".u-4");

// for (x = 0; x < u6.length; x++) {
//     u6[x].onclick = function func_7() {
//         this.setAttribute('title', 'test - data');
//     }
// }

// ---------------------Task 9----------------
// С помощью цикла получите кнопки.u - 9. Добавьте на них событие onclick которое запускает функцию func - 9. Функция возращает data атрибут элемента, по которому кликнули.
// let btn = document.querySelectorAll(".u-9");
// for (i = 0; i < btn.length; i++) {
//     btn[i].onclick = function func_9() {
//         let dat = this.getAttribute('data');
//         console.log(dat);
//     }
// }
// -----------------Task 10--------------------
// Напишите функцию func - 10, которая при клике на кнопке.u - 10 __button читает атрибут валюты data - currency и на основании этого выводит в p.u - 10 __out коэффициент данной валюты по отношению к доллару.Коэффициент возьмите приблизительно из интернета.Считается, что пользователь всегда вводит валюту в долларах.
// let btn = document.querySelector(".u-9");
// let out = document.querySelector(".out");
// btn.onclick = function func_9() {
//     let curensy = document.querySelector(".curensy").value;
//     let sum = btn.getAttribute("data");
//     out.innerHTML = sum * curensy;

// }
// --------------Unit 10. Массивы в JavaScript (часть 1)-------------------Task 1.
// Создайте массив содержащий строки, числа, булевы значения.Выведите его в консоль.
// let arr = ["hello", 33, true];
// console.log(arr);

// ------------------Task 2------------
// Создайте массив содержащий строки, числа, булевы значения.Выведите его в div.Совет.Попробуйте синтаксиc elem.innerHTML = ваш_массив.
// let arr = ["hello", 33, true];
// let out = document.querySelector(".out");
// out.innerHTML = arr;

// -------------Task3---------------------
// Создайте массив a.Выведите длину массива a.
// const a = [2, 'hello', 17, 34, 'privet']
// console.log(a.length);

// ---------------Task4-------------------
// Создайте массив a.Выведите нулевой, третий, восьмой элемент массива a в консоль.Сделайте вывод о 8 - м элементе.
// const a = [2, 'hello', 17, 34, 'privet'];
// console.log(a[0]);
// console.log(a[3]);
// console.log(a[8]);

// ---------------Task5-------------------
// // Создайте массив a.Выведите сумму нулевого, второго и третьего элементов массива.
// const a = [2, 'hello', 17, 34, 'privet'];
// let out = document.querySelector(".out");
// out.innerHTML = a[0] + a[2] + a[3];













// -------------------Task10-------------
// Создайте массив содержащий только 1 - й, 5 - й и 10 элемент.Выведите его в консоль.Выведите его в div.Выведите длину данного массива.
// const a = [, 1, , , 5, , , , , 10];
// console.log(a);
// let out = document.querySelector(".out");
// out.innerHTML = a.length;

// -------------------Task 13------------------
// Используя цикл выведите элемента массива d на страницу.Разделитель - пробел.
// d = ['y', 4, 22, 'o'];
// let out = document.querySelector(".out");
// for (i = 0; i < d.length; i++) {
//     out.innerHTML = d;
// }






// --------------Task16-------РАЗОБРАТЬСЯ--------
// d = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78]
// Выполните перебор массива d из предыдущей задачи.Четные элементы добавьте в массив a1, нечетные в a2.Выведите полученные массивы a1 и a2 на страницу.

// let d = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
// let a1 = [];
// let a2 = [];
// let out = document.querySelector(".out");
// for (i = 0; i < d.length; i++) {
//     let a2 = d[i] % 2;
//     if (d[i] % 2 == 0) {
//         let a1[] = d[i];
//     } else {
//         let a2 = d[i];
//     }

//     out.innerHTML = a1;
//     out.innerHTML = a2;
// }



// -------------------Unit 11. Добавление и удаление элементов в массиве, pop, push,splice -----------Task 1--------------
// Создайте пустой массив arr1, input.u - 1, кнопку button.u - 2 __push.При нажатии кнопки, функция читает содержимое input и добавляет содержимое в массив, после чего выводит содержимое массива в div.out - 1.
// let arr1 = [];
// let btn = document.querySelector(".push_2");
// let out = document.querySelector(".out");
// btn.onclick = () => {
//     let inp = document.querySelector(".u_1").value;
//     arr1.push(inp);
//     out.innerHTML = arr1;
//     console.log(arr1);
// }

// ----------Task 2-------------------------
// // Добавьте к предыдущему заданию кнопку button.u -2__pop, при нажатии которой, к массиву arr1 применяется метод pop, после чего массив выводится в div.out - 1
// let arr1 = [];
// let btn = document.querySelector(".push_2");
// let btn2 = document.querySelector(".push_3");
// let out = document.querySelector(".out");
// btn.onclick = () => {
//     let inp = document.querySelector(".u_1").value;
//     arr1.push(inp);
//     out.innerHTML = arr1;
//     console.log(arr1);
// }
// btn2.onclick = () => {
//     arr1.pop();
//     out.innerHTML = arr1;
//     console.log(arr1);
// }

//--------------- Task 3--------------------
// Добавьте к заданию 1 кнопку button.u -3__shift, которая применяет к массиву arr1 метод shift(читать за метод shift).После применения shift, массив arr1 выподится в div.out - 1.
// let arr1 = [];
// let btn = document.querySelector(".push_2");
// let btn2 = document.querySelector(".push_4");
// let out = document.querySelector(".out");
// btn.onclick = () => {
//     let inp = document.querySelector(".u_1").value;
//     arr1.push(inp);
//     out.innerHTML = arr1;
//     console.log(arr1);
// }
// btn2.onclick = () => {
//     arr1.shift();
//     out.innerHTML = arr1;
//     console.log(arr1);
// }

//--------------- Task 4--------------------
// Добавьте к заданию 1 кнопку button.u -4__unshift, которая применяет к массиву arr1 метод unshift(читать за метод unshift).После применения unshift, массив arr1 выподится в div.out - 1. Надеюсь, вы догадаетесь проверять input на пустоту перед применением unshift.Надеюсь, вы это сделали и в первой задаче ?
// let arr1 = [];
// let btn = document.querySelector(".push_2");
// let btn2 = document.querySelector(".push_4");
// let out = document.querySelector(".out");
// btn.onclick = () => {
//     let inp = document.querySelector(".u_1").value;
//     arr1.push(inp);
//     out.innerHTML = arr1;
//     console.log(arr1);
// }
// btn2.onclick = () => {
//     arr1.unshift(5);
//     console.log(arr1);
//     out.textContent = arr1;
// }

// ---------------Task 5--------------------
// Обьявите массив arr5, добате два элемента input, в первый пользователь может ввести индекс элемента, во второй - количество.Добавьте кнопку, по нажатию на которую к массиву arr5 применяется метод splice.Результат применения выводите в div.out - 5.

// let arr5 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];

// let arr1 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];
// let btn = document.querySelector(".push_2");
// let btn2 = document.querySelector(".push_5");
// let out = document.querySelector(".out");
// btn.onclick = () => {
//     let inp = document.querySelector(".u_1").value;
//     arr1.push(inp);
//     out.innerHTML = arr1;
//     console.log(arr1);
// }
// btn2.onclick = () => {
//     let inp2 = document.querySelector(".u_1").value;
//     let inp3 = document.querySelector(".u_2").value;
//     let x = arr1.splice(inp2, inp3, 'good');
//     out.textContent = x;
//     console.log(x);
// }

// ---------------Task 6-------------------
// Напишите функцию funcPush, которая эмулирует работу метода push, функция, по нажатию кнопки:

// читает содержимое input в переменную
// вычисляет длину массива
// присваивает массиву новый элемент, а в качестве индекса указывает длину массива
// Выводит массив на страницу
// let btn = document.querySelector(".push_2")
// let arr = [];
// btn.onclick = function funcPush() {
//     let inp = document.querySelector('.u_1').value;
//     arr.push(inp);
//     let out = document.querySelector(".out");
//     let len = arr.length;
//     out.textContent = arr + " " + "длина массива: " +
//         len;
//     console.log(len);
//     console.log(arr);
// }

// ---------------task 7------Разобраться с ней и со следующими--------------
// Напишите функцию funcPop, которая эмулирует работу метода pop, функция, по нажатию кнопки:

// удаляет последний элемент массива
// Выводит массив на страницу









// -------------Unit 12. Двумерные массивы-------------
// Создайте массив a.Выведите его на страницу.Элементы внутри вложенных массивов разделяйте пробелом, между вложенными массивами - перенос строки!
// const a = [
//     [1, 2, 3],
//     ['a', 'b', 'c'],
//     [4, 5, 6],
//     ['d', 'e', 'f'],
//     [7, 8, 9],
// ];

// let out = document.querySelector(".out");
// for (i = 0; i < a.length; i++) {
//     out.innerHTML += `${a[i]}<br>`;
//     for (k = 0; k < a[i].length; k++) {
//         out.innerHTML += ' ';
//     }
// }


// -----------------task 2----------------
// Выведите на страницу символ 3 из массива a.
// const a = [
//     [1, 2, 3],
//     ['a', 'b', 'c'],
//     [4, 5, 6],
//     ['d', 'e', 'f'],
//     [7, 8, 9],
// ];

// let out = document.querySelector(".out");
// out.innerHTML = a[0][2];

// -----------------task 3----------------
// Выведите на страницу символ e из массива a.
// const a = [
//     [1, 2, 3],
//     ['a', 'b', 'c'],
//     [4, 5, 6],
//     ['d', 'e', 'f'],
//     [7, 8, 9],
// ];
// let out = document.querySelector(".out");
// out.innerHTML = a[3][1];

// -----------------task 4----------------
// Выведите на страницу содержимое третьего вложенного массива в массиве a.
// const a = [
//     [1, 2, 3],
//     ['a', 'b', 'c'],
//     [4, 5, 6],
//     ['d', 'e', 'f'],
//     [7, 8, 9],
// ];
// let out = document.querySelector(".out");
// out.innerHTML = a[2];

// -----------------task 5----------------
// Выведите на страницу только первые элементы вложенных массивов массива a.
// const a = [
//     [1, 2, 3],
//     ['a', 'b', 'c'],
//     [4, 5, 6],
//     ['d', 'e', 'f'],
//     [7, 8, 9],
// ];
// let out = document.querySelector(".out");
// for (i = 0; i < a.length; i++) {
//     out.innerHTML += a[i][0];
// }
// -----------------task 6 & taask 7----------------
// Выведите на страницу только четные вложенные массивы массива a.
// const a = [
//     [1, 2, 3],
//     ['a', 'b', 'c'],
//     [4, 5, 6],
//     ['d', 'e', 'f'],
//     [7, 8, 9],
// ];
// let out = document.querySelector(".out");
// for (i = 0; i < a.length; i++) {
//     if (i % 2 == 0) {
//         out.innerHTML += a[i];
//     }
// }

// -----------------task 7----------------
// Выведите на страницу длины вложенных массивов в массив a.
// const a = [
//     [1, 2, 3],
//     ['a', 'b', 'c'],
//     [4, 5, 6],
//     ['d', 'e', 'f'],
//     [7, 8, 9],
// ];
// let out = document.querySelector(".out");
// for (i = 0; i < a.length; i++) {
//     out.innerHTML += a[i].length;
// }

// -----------------task 7----------------
// Выведите на страницу элементы массива a в обратном порядке, т.е. 9 8 7 f e....
// const a = [
//     [1, 2, 3],
//     ['a', 'b', 'c'],
//     [4, 5, 6],
//     ['d', 'e', 'f'],
//     [7, 8, 9],
// ];
// let out = document.querySelector(".out");
// for (i = a.length - 1; i >= 0; i--) {
//     let c = a[i];
//     for (k = c.length - 1; k >= 0; k--) {
//         out.innerHTML += c[k];
//     }
// }


// -----------------task 8----------------
// Выведите на страницу длины вложенных массивов в массив a.
// const a = [
//     [1, 2, 3],
//     ['a', 'b', 'c'],
//     [4, 5, 6],
//     ['d', 'e', 'f'],
//     [7, 8, 9],
// ];
// let out = document.querySelector(".out");
// for (i = 0; i < a.length; i++) {
//     let c = [];
//     c = a[i].length
//     out.innerHTML += c;
//     }

// -----------------task 10----------------
// Выведите на страницу элементы массива a, причем вложенные массивы должны выводиться в обратном порядке:
// 3 2 1
// c b a
// 6 5 4

// const a = [
//     [1, 2, 3],
//     ['a', 'b', 'c'],
//     [4, 5, 6],
//     ['d', 'e', 'f'],
//     [7, 8, 9],
// ];
// let out = document.querySelector(".out");
// for (i = 0; i < a.length; i++) {
//     let c = a[i];
//     for (k = c.length - 1; k >= 0; k--)
//         out.innerHTML += c[k];
// }


// -Unit 13. Ассоциативный массив (объект) в JavaScript---
// ---------------------task1----------------
// Выведите массив a1 на страницу.
// a1 = {
//     3: 'hello',
//     'one': 'hi'
// };
// let out = document.querySelector(".out");
// for (let key in a1) {
//     out.innerHTML += key + a1[key];
// };

// ----------------task 2--------------------
// Выведите на страницу элементы из масиива a2 у которых символов больше 4.
// a2 = {
//     3: 'hello',
//     'one': 'hi',
//     'testt': 'vodoley',
//     'ivan': 'ivanov'
// };
// let out = document.querySelector(".out");
// for (let key in a2) {
//     if (a2[key].length > 3) {
//         out.innerHTML += a2[key] + ' ';
//     }
// }

// --------------task 3-------------Выведите на страницу элементы из масиива a3 у которых ключ содержит больше 4 символов.-----
// a3 = {
//     3: 'hello',
//     'one': 'hi',
//     'testt': 'vodoley',
//     'ivan': 'ivanov'
// };
// let out = document.querySelector(".out");
// for (let key in a3) {
//     if (key.length > 4) {
//         out.innerHTML += `${key} `;
//     }
// }

// ---------------------task  7------------Создайте ассоциативный массив a7, два input (u7-key__input, u7-value__input) и кнопку. При нажатии кнопки добавляйте в массив новое значение с соответствующим ключем. Выводите массив на страницу.

// a7 = {};
// let out = document.querySelector(".out");
// let btn = document.querySelector(".push_2");
// btn.onclick = function () {
//     let u7Key = document.querySelector(".u7Key").value;
//     let u7Value = document.querySelector(".u7Value").value;
//     out.innerHTML += `${u7Key} : ${u7Value}<br>`;
//     a7[u7Key] = u7Value;
//     console.log(a7);
// }










// ---------------------task  7-----------
// Добавьте к предыдущей задачи input.u10-has-key__input и кнопку. При нажатии кнопки - возвращайте true если такой ключ есть в массиве, и false если нет.
// НЕОБХОДИМО ДОРЕШАТЬ
// a7 = {};
// let out = document.querySelector(".out");
// let btn = document.querySelector(".push_2");
// let btn2 = document.querySelector(".push_3");
// btn.onclick = function () {
//     let u7Key = document.querySelector(".u7Key").value;
//     let u7Value = document.querySelector(".u7Value").value;
//     out.innerHTML += `${u7Key} : ${u7Value}<br>`;
//     a7[u7Key] = u7Value;
//     console.log(a7);
// }

// btn2.onclick = function () {
//     let u7Key = document.querySelector(".u7Key").value;
//     let u7Value = document.querySelector(".u7Value").value;
//     for (let key in a7) {
//         if (a7 = true) {
//             out.innerHTML = true;
//         } else(
//             out.innerHTML = false
//         )
//     }
// }






//=-------------------- Task 11.------------------
// Создайте массив, который описывает метро киевского метрополитена, выведите его на страницу.

// a11 = {
//     "red": ['Академгородок', ...],
//     "green":
// }



// ------------Unit 15. Set в JavaScript--------------
// ------------------Task 1--------
// Создайте новый Set. Добавьте в него через add элементы. Выведите в консоль.
// let ar = new Set();
// ar.add('1')
// ar.add("hello");
// ar.add(3);
// console.log(ar);

// ------------------Task 2--------
// Создайте input куда пользователь может вводить элементы и кнопку. По нажатию на кнопку значение из input добавляется в set. Set выводится в консоль.
// let btn = document.querySelector("button");
// let out = document.querySelector(".out");
// let myArr = new Set();
// btn.onclick = () => {
//     let inp = document.querySelector('input').value;
//     myArr.add(inp);
//     console.log(myArr);
// }

// -------------Task 3----------------------------
// Добавьте к предыдущему заданию кнопку удалить. При нажатии кнопки читаете содержимое input и удаляете его из Set. Если input пустой - выводите ошибку (alert).
// let btn = document.querySelector(".push_2");
// let btnDel = document.querySelector(".push_4");
// let out = document.querySelector(".out");
// let myArr = new Set();
// btn.onclick = () => {
//     let inp = document.querySelector('input').value;
//     myArr.add(inp);
//     console.log(myArr);
// }
// btnDel.onclick = () => {
//     let inp = document.querySelector('input').value;
//     myArr.delete(inp);
//     console.log(myArr);
// }

// ----------------Task4---------------------------------
// Добавьте к предыдущему заданию кнопку проверить.При нажатии кнопки читаете содержимое input и проверяет его наличие в Set.Функция должна возвращать true или false.Действия запускаются при вызове функции t4.
// let btn = document.querySelector(".push_2");
// let btnDel = document.querySelector(".push_4");
// let out = document.querySelector(".out");
// let myArr = new Set();
// btn.onclick = () => {
//     let inp = document.querySelector('input').value;
//     myArr.add(inp);
//     console.log(myArr);
// }
// btnDel.onclick = () => {
//     let inp = document.querySelector('input').value;
//     console.log(myArr.has(inp));
// }

// ----------------Task 6--------------------------
// Есть массив a6 = [3, 4, 3, 2, 4, 56, 1, 23].Напишите функцию, которая возвращает и выводит на страницу количество уникальных элементов в массиве a6.Решение должно использовать set.Действия должны запускаться при вызове функции t6.
// function setArr() {
//     let a6 = [3, 4, 3, 2, 4, 56, 1, 23];
//     let a7 = new Set(a6);
//     console.log(a7);
// }
// setArr()

// ---------------------Task 8------------------------------.
// Создайте набор set a8.Напишите функцию, которая принимает set в качестве параметра и четные элементы из набора добавляет в массив a8_res.После завершения операции - выводит a8_res на страницу.Запуск - по нажатию кнопки b - 8.

// let a8 = new Set(['hello', 33, 34, 65, 'sea', 'bear', 55, 'error', 66, 77]);
// let btn = document.querySelector(".push_2");
// let out = document.querySelector(".out");
// let a = Array.from(a8);
// let a8_res = {};
// btn.onclick = function myArr() {
//     for (i = 0; i < a.length; i++) {
//         if (i % 2 !== 0) {
//             a8_res += `${a[i]}, `;
//         }
//     }
//     console.log(a8_res);
//     let res = new Set(a8_res);
//     out.innerHTML = res; // не понятно как выводить set набор на страницу HTML 
// }

//--------------------- Task 10------------------------
// Сложная задача!!! Самая сложная задача за урок.Если ее решите - то массивов вы больше не испугаетесь.Задачу Можно пропустить.Создайте массив элементов a10.Посчитайте, сколько раз встречается каждый из элементов в массиве.Результат присвойте массиву a10_res.Логика решения: создайте на основе массива - набор.Потом запустите перебор набора и внутри цикла перебора запустите еще один цикл - перебираете массив и смотрите совпадения если элемент массива совпадает с элементом набора - то плюсуете счетчик.После прохода внутреннего цикла добавляете в a20_res запись в виде элемент набора - счетчик.a10_res = { "3" : 5, "1" : 1, }


// ---------Ниже код не работает
// let a10 = [10, 2, 4, 4, 2, 'hello', 33, 'hello'];
// let a10_res = new Set(a10);
// for (let i of a10_res) {
//     for (k = 0; k < a10.length; k++) {
//         if (a10_res == a10) {
//             q = q + 1;
//         }
//     }
//     console.log(a10_res);
// }

// for (let k = 0; k < a10.length; k++) {
//     a10_res += a10[k] + ",";
//     for (i = 0; i < a10_res[i].length; i++) {
//         if (a10_res[i] == a10[k]) {
//             // continue
//             a10_res.splice(i);
//         }
//     }
// }
// console.log(a10_res);

// let myArr = new Set(a10); // сюда попало ([10, 2, 4, 'hello', 33])
// let a20_res = new Set();
// for (let i of myArr) {
//     for (let k = 0; k < a10.length; k++) {
//         if (a10[k] == i) {
//             break
//         }
//         a20_res = a10[k] + " ";
//     }
//     console.log(a20_res);
// }

// --------Task 12-------------------------
// Напишите функцию, которая принимает в качестве параметра набор set и преобразует его в массив, результат выводит на страницу и присваивает a12_res.Действия должны запускаться при вызове функции t12.
// let arr10 = new Set([10, 22, "ney"]);

// function t12() {
//     let arr20 = Array.from(arr10);
//     let a12_res = document.querySelector(".out");
//     a12_res.innerHTML = arr20;
// }
// t12();

// ---------------------Task 1 Задача на прокачку--РАЗОБРАТЬСЯ ---------
// Переберите массив a2 = [5, 7, 9, 11, 13, 15], c помощью цикла for. Выведите на страницу в виде ключ - значение. Разделение между ключем и значением пользователь может выбирать из выпадающего списка (пробел, дефис, две точки).
// let btn = document.querySelector("#push_2");
// // let oor = document.getElementById("oper").selectedIndex;
// let oor = document.querySelectorAll("option");
// // let oor = document.getElementsByTagName("option");
// let out = document.querySelector(".out");
// let a2 = [5, 7, 9, 11, 13, 15];
// btn.onclick = () => {
//     console.log("select");
//     for (i = 0; i < oor.length; i++) {
//         if (oor[i].selected) {
//             for (let key in a2) {
//                 out.innerHTML += key + oor[i] + a2[key] + '<br>';
//                 a2[key] + '<br>';
//             }
//         }
//     }
// }


// ---------Unit 16. Перебор массивов: for, for in, for of------
// --------------Task 1-------------------
// Переберите массив a1 = [5, 7, 9, 11, 13, 15], c помощью цикла for.Выведите на страницу в формате значение + пробел.Результат присвойте переменной a1_res.Действия запускаются при вызове функции t1.

// let out = document.querySelector(".out");
// let btn = document.querySelector(".push_2");
// let a1 = [5, 7, 9, 11, 13, 15];

// btn.onclick = () => {
//     console.log('111');
//     for (let i = 0; i < a1.length; i++) {
//         out.innerHTML += a1[i] + " ";
//     }
// }

// -------------Task 2---------------------------
// Переберите массив a2 = [5, 7, 9, 11, 13, 15], c помощью цикла for.Выведите на страницу в виде ключ - значение.Разделитель между ключом и значением - дефис, между строками - br.Результат присвойте переменной a2_res.Действия запускаются при вызове функции t2.
// let a2 = [5, 7, 9, 11, 13, 15]
// let out = document.querySelector(".out");
// let btn = document.querySelector(".push_2");
// btn.onclick = function t2() {
//     console.log('cdddd');
//     for (let i in a2) {
//         let a2_res = `${i}-${a2[i]}`;
//         out.innerHTML += a2_res + '<br>'
//     }
// }

// -----------------Task 3-----------------------------
// При нажатии кнопки, получите div.u - 3 с помощью getElementsByClassName, переберите циклом for, допишите в каждый из div цифру 3(без пробелов).Действия запускаются при вызове функции t3.
// let divS = document.getElementsByClassName('u3');
// let btn = document.getElementById('push_2');
// btn.onclick = function t3() {
//     for (let item of divS) {
//         item.innerHTML = '3';
//     }
// }

// ----------------------Task 4--------------------
// Получите div.u - 3 с помощью querySelectorAll, переберите циклом for, допишите в каждый из div цифру 4(без пробелов).Действия запускаются при вызове функции t4.

// let divS = document.querySelectorAll('.u3');
// let btn = document.querySelector('#push_2');
// btn.onclick = function t4() {
//     for (i = 0; i < divS.length; i++) {
//         divS[i].innerText = '4';
//     }
// }

// ------------Task 5----------------------------------
// Создайте div с помощью createElement.Получите все div.u - 3 с помощью getElementsByClassName в "массив".Попробуйте добавить в "массив" созданный div с помощью метода push.В комментарии к задаче опишите результат.Действия должны запускаться при вызове функции t5.
// let divS = document.getElementsByClassName('u3');
// let btn = document.querySelector('#push_2');
// let arr = [];
// let newDiv = document.createElement('div');
// newDiv.innerHTML = '<h1>hello</h1>';
// let out = document.querySelector(".out");
// document.body.insertBefore(newDiv, out);
// btn.onclick = function t4() {
//     for (i = 0; i < divS.length; i++) {
//         divS.innerTEXT = '4';
//         arr.push(divS[i]);
//     }
//     arr.push(newDiv);
//     console.log(arr);

// }

//------------------ Task 6-------------------------
// Создайте div с помощью createElement.Получите все div.u - 3 с помощью querySelectorAll в "массив".Попробуйте добавить в "массив"
// созданный div с помощью метода push.В комментарии к задаче опишите результат.Действия должны запускаться при вызове функции t6.

// let newDiv = document.createElement('div');
// newDiv.innerHTML = '<h1>hello</h1>';
// let out = document.querySelector(".out");
// document.body.insertBefore(newDiv, out);
// let divS = document.querySelectorAll('.u3');
// let btn = document.querySelector('#push_2');
// let arr = [];
// btn.onclick = function t4() {
//     for (i = 0; i < divS.length; i++) {
//         arr.push(divS[i]);
//     }
//     arr.push(newDiv);
//     console.log(arr);

// }

//-------------------------- Task 7------РАЗОБРАТЬСЯ---------
// Дан массив a7 = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ], напишите функцию которая делает из него массив[1, 2, 3, 4, 5, 6].Используем
// for.Действия должны запускаться при вызове функции t7.Результат - выведите на страницу и сохраните в массив a7_res.
// let a7 = [
//     [1, 2],
//     [3, 4],
//     [77, 6]
// ]

// let out = document.querySelector('.out');
// let btn = document.querySelector('button');
// // let a7_res = a7.flat();// можно без цикла. Всего-навсего используя метод flat();
// let a7_res = []
// let text = '';
// btn.onclick = function t7() {
//     for (x = 0; x < a7.length; x++) {
//         text = a7[x];
//         a7_res.push(text);

//     }
//     console.log(a7_res);
//     out.innerHTML = a7_res;
// }

// --------------Unit 17. Методы массивов: map, filter ( часть 1)--
// Task 1.
// Дан массив a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11] - с помощью map переберите массив и создайте новый массив a1_res куда добавьте элементы данного массива умноженные на 2. Действия должны запускаться при вызове функции t1.
// let a1 = [4, 6, 7, 12, 34, 56, 78, 90, 11];
// function t1() {
//     let a1_res = a1.map(function (item, index) {
//         return item * 2;
//         console.log(a1_res);
//     })
// }
// t1();

// -----------------------Task 2---------------------------
// Дан массив a2 = [2, 3, 4, 5, 10, 11, 12] - с помощью map переберите массив и создайте новый массив a2_res куда добавьте элементы данного массива возведенные во вторую степень.Действия должны запускаться при вызове функции t2.

// Действия должны запускаться при вызове функции t2.
// let a2 = [2, 3, 4, 5, 10, 11, 12];

// function t2() {
//     let a2_res = a2.map(function (item, index) {
//         return item * item
//     })
//     console.log(a2_res);
// }

// t2();

// --------------------Task 3-----------------------
// Дан массив a3 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11] - с помощью map переберите массив и создайте новый массив a3_res куда добавьте все элементы приведенные к числу.Действия должны запускаться при вызове функции t3.

// let a3 = [4, '3', 6, 7, "12", 34, "56", 78, 90, 11];

// function t3() {
//     let a3_res = a3.map(item => parseInt(item))
//     console.log(a3_res);
// }
// t3();

//------------------------- Task 4------------------------
// Следующая задача проще будет решаться через метод forEach, который мы изучим во второй части урока! Сейчас мы делаем костыль, для отработки навыков работы с map.Дан массив a4 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11] - с помощью map переберите массив и создайте новый массив a4_res куда добавьте только числа из массива a4.Действия должны запускаться при вызове функции t4.Действия должны запускаться при вызове функции t4.

// let a4 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];

// function t4() {
//     let a4_res = a4.filter(function (item, index) {
//         if (typeof (item) === 'number') {
//             return item;
//         }
//     });
//     console.log(a4_res);
// }

// t4();

// -------------Task 5---------------------
// Дан массив b1 = [3, 14, 15, 92].C помощью filter переберите массив и создайте новый b1_res, который содержит только четные числа из b1.Действия должны запускаться при вызове функции t5.

// let b1 = [3, 14, 15, 92];

// function t5() {
//     let b1_res = b1.filter(item => item % 2 == 0);
//     console.log(b1_res);
// }

// t5();

// ---Unit 18. Методы массивов: join, split, forEach(часть 2)
// Task 1.
// Дан массив a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11] - с помощью forEach переберите массив и создайте новый массив a1_res куда добавьте элементы данного массива умноженные на 2. Действия должны запускаться при вызове функции t1.

// let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
// let a1_res = [];
// let out = document.querySelector(".out");

// function t1() {
//     a1.forEach(function (item) {
//         a1_res.push(item * 2);
//     })
//     out.innerHTML = a1_res;
// }
// t1();
// console.log(a1_res);

// -----------------Task 2---------------------
// Дан массив a2 = [2, 3, 4, 5, 10, 11, 12] - с помощью forEach переберите массив и создайте новый массив a2_res куда добавьте элементы данного массива деленные на 2. Действия должны запускаться при вызове функции t2.

// let a2 = [2, 3, 4, 5, 10, 11, 12];
// let a2_res = [];

// function t2() {
//     a2.forEach(function (item) {
//         a2_res.push(item / 2);
//     })
//     out.innerHTML = a2_res;
// }
// t2();
// console.log(a2_res);

// ----------------------Task 3---------------------
// Дан массив a3 = [2, "hello", 3, "hi", 4, "Mazai"] - с помощью forEach переберите массив и создайте новый массив a3_res куда добавьте элементы данного массива являющиеся числом.Запускаться решение должно при вызове функции t3.
// let a3 = [2, "hello", 3, "hi", 4, "Mazai"];
// let a3_res = [];
// let out = document.querySelector(".out");

// function t3() {
//     a3.forEach(function (item) {
//         a3_res.push(parseInt(item));
//     })
//     out.innerHTML = a3_res;
// }
// t3();
// console.log(a3_res);

// ------------------------Task 4------------------РАЗОБРАТЬСЯ 
// На странице созданы 3 span.task - 4 c атрибутом data.С помощью forEach переберите их и добавьте атрибуты в массив a4_res Запускаться решение должно при вызове функции t4.

// let task = document.querySelectorAll('span');
// let det = task.getAttribute('data');

// let a4_res = [];

// console.log(det);

// function t4() {
//     task.forEarch(function (item) {
//         a4_res.push(item);
//     })
//     console.log(a4_res);
// }

// t4();

// -----------------------Task 5--------------РАЗОБРАТЬСЯ
// На странице созданы 3 p.task - 5 c атрибутом data.С помощью forEach переберите их и добавьте событие клик.Напишите функцию t5, которая будет запускаться при клике и добавлять атрибут data элемента, по которому кликнули в массив a5_res.


// ----Unit 19. События мыши в JavaScript----------------
//  ----------Task 1-----------------------
// Добавьте на блок.div - 1 событие клик и по клику запуск функции t1.Функция должна возвращать и выводить на экран содержимое блока(только текст).Вывод осуществляется в out - 1.

// document.querySelector(".div-1").onclick = function t1() {
//     document.querySelector(".div-1").innerText = 'Hello';
// }
// let out = document.querySelector(".out");
// document.querySelector(".div-1").onclick = function t1() {
//     out.innerText = 'Hello';
// }

// -------Task 2----------------
// Добавьте на блок.div - 2 событие клик и по клику запуск функции t2.Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика.Также, выводите на экран результат.Вывод осуществляется в out - 2.

// let out = document.querySelector(".out");
// document.querySelector(".div-2").onclick = function t2(event) {
//     if (event.altKey) {
//         out.innerText = 'true';
//     } else(
//         out.innerText = 'false'
//     );
//     console.log(event);
// }

// -------------------Task 3----------------
// Добавьте на блок.div - 2 событие клик.При клике - увеличивайте ширину блока на 5px.Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px.Ширину выводите в out - 3.

// let out = document.querySelector(".out");
// let block = document.querySelector(".div-2");
// let step = 100;
// block.onclick = function t3(e) {
//     step += 5;
//     block.style.width = step + 'px';
//     out.innerText = step;
// }

// --------------------Task 4--------------------------
// Добавьте на блок.div - 2 событие двойной клик и по двойному клику запуск функции t4.Функция должна возвращать и выводить на экран содержимое блока(только текст).Вывод осуществляется в out - 4.
// let out = document.querySelector(".out");
// document.querySelector(".div-2").ondblclick = function t1() {
//     out.innerText = 'Hello';
//     console.log('out');
// }

// ----------------------Task 5----------------
// Дан блок.div - 2.active.Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет.
// let active = document.querySelector(".div-2", ".active");
// active.ondblclick = function (event) {
//     if (active.classList.contains('active')) {
//         active.classList.remove('active');
//     } else(
//         active.classList.add('active'));
// }

// ---------Task 6-------------------------
// Дан блок.div - 2 и список.ul - 6. При двойном клике на блоке скрывайте.ul - 6 если он показан и показывайте если скрыт.Скрытие и показ делайте через добавление - удаление класса.hide

// let block = document.querySelector(".div-2");
// let nav = document.querySelector(".hide");
// block.ondblclick = () => {
//     if (nav.classList.contains('hide')) {
//         nav.classList.remove("hide");
//     } else {
//         nav.classList.add("hide");
//     }
// }

// ---------Task 7---------------------
// Дан блок .div-1. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте.
// document.querySelector(".div-1").oncontextmenu = () => {
//     document.querySelector(".div-1").classList.toggle('active');
//     return false;
// }





// --------------------Task 8------- Дорешать----------------
// Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран.

// Task 9.
// Дан блок.div - 9. Внутри блока - изображение 1.png.При клике правой кнопкой мыши - меняйте изображение на 2.png.Надеюсь вы догадаетесь изменить только src изображения ?

//     Task 10.
// Дан блок.div - 10. Внутри блока - изображение 1.png.При наведении мыши(mouseenter) - меняйте изображение на 2.png.