const arr = [5, 7, 9]

const sum = () => arr.reduce((acc, item) => acc + item)

// const obj = {
//   x: () => sum(),
// }
// console.log(obj.x())

// arr.push(12)
// console.log(obj.x())

// arr.push(9)
// console.log(obj.x())

const obj = {
  // computed
  get arrSum() {
    return arr.reduce((acc, item) => acc + item)
  },
}
console.log(obj.arrSum)

arr.push(12)
console.log(obj.arrSum)

arr.push(9)
console.log(obj.arrSum)
