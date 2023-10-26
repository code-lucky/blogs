<template>
  <div class="continer">
    <!-- 中间四位数进行脱敏 -->
    <div>{{MobileNoDesensitize(mobile)}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      mobile:'13888888888'
    }
  },
  computed:{
    MobileNoDesensitize(){
      return (val) =>{
        // 手机号正则
        const reg=/^(1[3-9][0-9])\d{4}(\d{4}$)/
        return reg.test(val) ? val.replace(reg,"$1****$2") : val
      }
    }
  }
}
</script>
