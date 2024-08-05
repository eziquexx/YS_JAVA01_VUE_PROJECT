<template>
  <div class="gson">
    <p v-bind:style="{color:tcolor}">큰집손자1: {{ message }}</p>
    <button @click="clickMsg">장손메시지</button>
    <p>할알버지 값 length: {{ gpapaLen }}</p>
    <p>할아버지 값 중 가장 작은 값: {{ gpapaMin }}</p>
  </div>
</template>

<script>
export default {
  name: 'CuteGSon11',
  props: {
  },
  components: {
  },
  data() {
    return {
      message: '',
      index: 1,
      tcolor: 'red',
    };
  },
  inject: [
    'gpapaLen', 
    'gpapaMin',
  ],
  watch: {
    // sample1() {
    //   console.log('');
    // }
    // 데이터를 감시하고 처리할 로직을 작성합니다.
  },
  computed: {
    // sample2() {
    //   return '';
    // }
    // 필요한 계산된 속성을 정의합니다.
  },
  methods: {
    clickMsg() {
      this.message = '장손이 버튼을 눌렀습니다.';
    },
    changeTextColor(idx, data) {
      if(this.index == idx) {
        this.tcolor=data;
      }
    },

  },
  setup() {
    // Vue 3 Composition API의 setup 함수에서 추가적인 로직을 처리할 수 있습니다.
  },
  created() {
    // 컴포넌트가 생성될 때 실행될 로직을 작성합니다.
  },
  mounted() {
    // 컴포넌트가 DOM에 마운트된 직후 실행될 로직을 작성합니다.
  },
  unmounted() {
    // 컴포넌트가 파괴되기 전 실행될 로직을 작성합니다.
  }
};
</script>

<style scoped>
.son {
  background-color: moccasin;
}
.gson {
  background-color: yellow;
}
.gson button {
  padding: 3px 6px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>