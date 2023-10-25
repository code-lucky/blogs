<template>
    <div>
        <!-- 这里则会显示内容为 "处理中" -->
        <div>{{commonStatus(1)}}</div>
    </div>
</template>

<script>

// 这里实际项目中是需要定义成公共的commonMixin.js，然后进行导出里面的方法
const commonMixin = {
    methods:{
        // 在methods中定义一个公共状态的方法，如果不在methods中定义则在vue代码使用不了，这里需要注意
        commonStatus(val){
            let status = ''
            switch(val){
                case 0:
                status = '未处理'
                break
                case 1:
                status = '处理中'
                break
                case 2:
                status = '已处理'
                break
                case 3:
                status = '已完成'
                break
                case 4:
                status = '已取消'
                break
            }
            return status
        }
    }
}

export default{
    // 在mixins引入就可以使用上面的方法，避免多个地方使用写同样的方法
    mixins:[commonMixin]
}
</script>