let i = 0

function getValue() {
  console.log('i am here')
  console.log(Date.now())
  i = i + 1
  return i
}

console.log({ x: getValue(), y: getValue() })
