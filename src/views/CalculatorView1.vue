<template>
  <div class="">
    <h3>CalculatorView1</h3>
    <p>키보드 키가 up 되야지 입력됨</p>
    <input type="text" v-model="num1" @keyup="plusNumbers"> <span> + </span>
    <input type="text" v-model="num2" @keyup="plusNumbers"> <span> = </span>
    <span>{{ result }}</span>
  </div>
</template>

<script>
export default {
  name: 'CalculatorView1',
  props: {

  },
  components: {
  },
  data() {
    return {
      num1: 0,
      num2: 0,
      result: 0,
    };
  },
  methods: {
    plusNumbers() {
      this.result = Number(this.num1) + Number(this.num2);
    }
  }
};
</script>

<style scoped>

</style>