<template>
  <div class="continer">
    <div v-if="isShow">v-if</div>
    <div v-show="isShow">v-show</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isShow: true
    }
  }
}
</script>
