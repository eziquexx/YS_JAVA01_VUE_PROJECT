<template>
  <div class="son">
    <p>큰 아들</p>
    <cute-g-son11 />
    <cute-g-son12 />
  </div>
</template>

<script>
import CuteGSon11 from './CuteGSon11.vue';
import CuteGSon12 from './CuteGSon12.vue';
export default {
  name: 'GoodSon10',
  props: {
    
  },
  components: {
    CuteGSon11,
    CuteGSon12,
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