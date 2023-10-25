// Vue中在main.js中全局使用mixin

Vue.mixin({
    create(){
        // 这样写所有组件的create函数里增加这段打印，所以慎用
        console.log("全局混入")
    }
})