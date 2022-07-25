// 支持直接使用字面量进行类型声明
let a: 10
a = 10
// a = 11 // 报错
// 可以使用 | 来连接多个类型（联合类型）
let b: 'male' | 'female'
b = 'male'
b = 'female'
// b = 'a' //报错
let c: boolean | string

// any 表示任意类型，any类型的变量相当于该变量关闭了TS的类型检测
// 使用TS时，不建议使用any类型
// let d:any（显示声明）

// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any（隐式的any）
let d
d = 10
d = 'hello'

// unknown 表示位置类型的值
let e: unknown
e = 10
e = 'hello'

// d的类型是any，它可以赋值给任意变量
let s: string
// s = d

// unknown 实际上就是一个类型安全的any
// unknown 类型不允许赋值给其它类型的变量
// s = e //报错，unknown类型不允许赋值给其它类型的变量
if (typeof e === 'string') {
  s = e
}

// 类型断言，告诉解析器变量的实际类型
/*
语法
变量 as 类型
<类型>变量
*/
s = e as string
s = <string>e

// void 用来表示空，以函数为例，就表示没有返回值的函数
function fn(): void {
  // return 123 // 报错
  // return undefined // 可
  // return null // 可
}

// never 表示永远不会返回结果
function fn2(): never {
  throw new Error('')
}




export = {}
