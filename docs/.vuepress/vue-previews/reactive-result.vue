const state = reactive({ count: 0 })
//这个赋值将导致state失去响应
state = {count: 1}


// 解决办法
// 1.不要直接替换整个对象，对象属性一个个赋值
const state = reactive({ count: 0 })
state.count = 1

// 2.使用Object.assign
const state = reactive({ count: 0 })
state = Object.assign(state , {count:1})
