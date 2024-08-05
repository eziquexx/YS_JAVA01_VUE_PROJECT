<template>
  <div class="">
    <h2>콤포넌트 2</h2>
    <p>{{ sharedData }}</p>
    <button @click="sharedMethod">공유메서드</button>
  </div>
</template>

<script>
import { commonMixIn } from '@/mixins/commonMixIn';
export default {
  name: 'MixComp2',
  mixins: [commonMixIn],
  mounted(){
    console.log(' 코포넌트2 mounted');    
  },
  unmounted(){
    console.log(' 코포넌트2 unmounted');    
  },
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>