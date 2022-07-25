// 声明变量a，同时指定它的类型为number
let a: number
// a的类型设置为了number，在以后的使用过程中a的值只能是数字
a = 10
// a = 'hello' // 此行代码会报错，变量a的类型是number，不能赋值其他类型的内容
let b: string
b = 'hello'

// 声明完变量直接进行赋值
// let c: boolean = false

// 如果变量的声明和赋值同时进行，TS可以自动对变量进行类型检测
let c = false
c = true

// JS中的函数不考虑参数的类型和个数
function sum(a: number, b: number): number {
  return a + b
}
let result = sum(123, 345) // 确定result类型
console.log(sum(2, 3)) // 5
// console.log(sum(2, '3')) // '23'
// console.log(sum(2, 3, 4)) // 参数太多
