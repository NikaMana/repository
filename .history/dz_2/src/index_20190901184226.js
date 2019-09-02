/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(fn(array[i], i, array));
  }
  return arr;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
const reduce(array, fn, initial) => {
  const currentIndex = initial ? 0 : 1;
  let result = initial ? initial : array[0];

  for (let i = currentIndex; i < array.length; i++) {
    result = fn(result, array[i], i, array);
  }

  return result;
}

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum,current) => sum + current, 0);
let result1 = reduce(arr, (sum, current) => sum + current, 0)

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  let arr = [];
  for (let key in obj) {
    arr.push(key);
  }
  return arr.map(item => item.toUpperCase)
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to = array.length) {
  let arr = [];

  let fromMin = from < 0 ? array.length - Math.abs(from) : from;
  let toMin = to < 0 ? array.length - Math.abs(to) : to;

  for (let i = fromMin; i < toMin; i++) {
    arr.push(array[i]);
  }

  return arr;


}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) = obj => (
  new Proxy(obj, {
    set(target, prop,value) {
      if (typeof value === 'number') {
        target[prop] = value ** 2;
      }
      return true;
    }
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
