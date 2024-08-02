<template>
  <div class="son">
    <p>둘째 아들</p>
    <cute-g-son21/>
    <cute-g-son22/>
  </div>
</template>

<script>
import CuteGSon21 from './CuteGSon21.vue';
import CuteGSon22 from './CuteGSon22.vue';
export default {
  name: 'GoodSon20',
  props: {
    
  },
  components: {
    CuteGSon21,
    CuteGSon22
  },
  data() {
    return {
      // 컴포넌트의 데이터를 초기화합니다.
    };
  },
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
    // sample3() {
    //   return '';
    // }
    // 컴포넌트에서 사용할 메서드를 정의합니다.
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
  padding: 20px;
  margin: 20px;
}
.gson {
  background-color: yellow;
  margin: 20px;
}
</style>