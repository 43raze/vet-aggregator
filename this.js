// const obj = {
//   a: 42,
//   b: this.a - 9,
// }

// зыс - указатель на объект, к которому привязан вызов функции
// зыс - появляется только в момент вызова
// зыс - всегда связан с одним конкретным вызовом функции

// function func(param1, param2) {
//   console.log('param0', this)
//   console.log('param1', param1)
//   console.log('param2', param2)
// }

// func.bind(21)(33, 42)

// func.bind({ foo: 'bar' })()
// func()
// func.bind({ foo: 'baz' })()

// натуральное естественное природное появление this из левой операнды оператора доступа . (dot notation)

const obj = {
  g: 6,
  func() {
    console.log(this)
  },
}

obj.func()
