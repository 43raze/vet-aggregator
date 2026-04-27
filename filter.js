const arr = [21, 33, 42]

const filteredArr = arr.filter(item => item.x === 42)

// console.log(filteredArr)

// !!вернёт 42
// !!вернёт тот-же массив
// !!возвращает новый массив [21,33,42]
// !!возвращает новый массив [42]
// возвращает пустой массив

function fn(item) {
  return item.x === 42
}

console.log(fn(42))
// console.log(undefined === 42)
// console.log('42' === 42)

// let i = 42
// let s = 'foo'
// let q = true
// console.log(q.x)

// console.log(fn({ x: 42 }))

// sdflkjshdgf()

// x / y

// [].filter(predicate) метод массива, который всегда возвращает новый массив, который наполнен элементами исходного массива, для которых предикат вернул true
// [].filter(predicate) для каждого элемента массива вызывает функцию predicate

// предикат - чистая функция, которая возвращает булев тип в любом случае

// булев тип - это true или false

// function returnArray1() {
//   return []
// }
// function returnArray2() {
//   const array = []
//   return array
// }
// function returnArray3() {
//   const array = []
//   while (array.length < 5) array.push(42)
//   return array
// }

// console.log(returnArray3())

// как отвечать:
// не расслышал вопрос - переспроси
// не понял вопрос - переспроси
// понял вопрос - переспроси
// не знаешь ответ - "сейчас подумаю"
// не знаешь ответ - так и скажи "не знаю"
// после того как дал ответ, в котором сомневаешься, можешь объяснять ход мыслей
// !!объяснять ход мыслей до ответа не нужно
