<template>
    <div>
        <div @click="test"></div>
    </div>
</template>

<script>
export default{
    methods:{
        test(){
            // 可以先打印一下，如果引入成功可以成功打印出来
            console.log(wx)

            // 所有的路由方法都在 miniProgram 下
            wx.miniProgram.redirectTo({
                url:'/pages/index/index'
            })
        }
    }
}
</script>