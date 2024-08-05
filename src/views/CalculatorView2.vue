<template>
  <div class="">
    <h3>CalculatorView2</h3>
    <p>키보드 키가 up 되야지 입력됨</p>
    <input type="text" v-model="state.num1" @keyup="plusNumbers"><span> + </span>
    <input type="text" v-model="state.num2" @keyup="plusNumbers"><span> = </span>
    <span> {{ state.result }} </span>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  name: 'CalculatorView2',
  setup() {
    // 반응형 상태 객체: 속성 변경될 때마다 자동으로 DOM업데이트
    let state = reactive({
      num1: 0,
      num2: 0,
      result: 0,
    });
    function plusNumbers(){
      state.result = Number(state.num1) + Number(state.num2);
    }
    return { state, plusNumbers }
  }
};
</script>

<style scoped>

</style>