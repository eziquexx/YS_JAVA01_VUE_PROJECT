<template>
  <div class="">
    <mix-comp-1 />
    <mix-comp-2 />
  </div>
</template>

<script>
import MixComp1 from '@/components/MixComp1.vue';
import MixComp2 from '@/components/MixComp2.vue';
export default {
  name: 'MixView',
  components: {
    MixComp1, 
    MixComp2
  },
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>