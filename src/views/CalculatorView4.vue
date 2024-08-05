<template>
  <div class="">
    <h3>CalculatorView4</h3>
    <p>입력하는 순간 변경됨</p>
    <input type="text" v-model="state.num1"><span> + </span>
    <input type="text" v-model="state.num2"><span> = </span>
    <span> {{ state.result }} </span>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'CalculatorView4',
  setup() {
    // 반응형 상태 객체: 속성이 변경될 때마다 자동으로 DOM업데이트
    let state = reactive({
      num1: 0, // 첫번째 텍스트박스와 바인딩될 숫자 상태
      num2: 0, // 두번째 텍스트박스와 바인딩될 숫자 상태
      result: computed( () => Number(state.num1) + Number(state.num2) ), // 계산된 결과를 저장할 상태
    });
    return { state }
  }
};
</script>

<style scoped>

</style>