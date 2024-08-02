<template>
  <div class="">
    <h2>부모-자식 관련 수업</h2>
    <h3>할아버지 : {{ message }}</h3>
    <GoodSon10 ref="son10"/>
    <GoodSon20 ref="son20"/>
    <input type="button" value="할아버지버튼1" @click="clickGpapa_1">
    <input type="button" value="할아버지버튼2" @click="clickGpapa_2">
  </div>
</template>

<script>
import GoodSon10 from '@/components/GoodSon10.vue';
import GoodSon20 from '@/components/GoodSon20.vue';
export default {
  name: 'TestView',
  props: {
    // 문자열 타입의 prop 예시
    //sampleString: {
    //  type: String,
    //  default: ''
    //},
    // 숫자 타입의 prop 예시
    //sampleNumber: {
    //  type: Number,
    //  default: 0
    //},
    // 배열 타입의 prop 예시
    //sampleArray: {
    //  type: Array,
    //  default: () => []
    //},
    // 객체 타입의 prop 예시
    //sampleObject: {
    //  type: Object,
    //  default: () => ({})
    //}
  },
  components: {
    GoodSon10,
    GoodSon20
  },
  data() {
    return {
      message: '',
    };
  },
  watch: {

  },
  computed: {

  },
  methods: {
    clickGpapa_1() {
      // 둘째 아들의 막내한테 메세지 보내기. 글씨를 파란색으로 바꾸기.
      this.message = '할아버지가 둘째 아들의 막내 아들 호출함';
      this.$refs.son20.clickSon20_2();
    },
    clickGpapa_2() {
      // alert('clickGpapa() 시작');
      this.$refs.son10.changeTextColor(2, 'blue');
      // alert('clickGpapa() 끝');
    }
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
h2 {
  margin: 40px 0;
}
</style>