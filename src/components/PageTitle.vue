<template>
  <div class="page_title">
    <h2>Page Title - 자식 컴포넌트</h2>
    <p>제목: {{ title }}</p>
    <p>나이: {{ age+1 }}</p>
    <p>취미: {{ hobbies }}</p>
    <p>부: {{ family.papa }}, 모 {{ family.mom }}</p>
    <p>함수 결과: {{ func() }}</p>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    // 컴포넌트의 데이터를 초기화합니다.
    title: {
      type: String,
      default: '제목없음',
    },
    // Number
    age: {
      type: Number,
      default: 0,
    },
    // 배열 타입의 prop 예시. Array
    hobbies: {
      type: Array,
      default: () => ['바둑', '낚시']
    },
    // 객체 타입의 prop 예시
    family: {
      type: Object,
      default: () => ({}),
    },
    // 함수 타입 props
    func: {
      type: Function,
      default: function() {
        return '기본 자식 함수'
      }
    }
  },
  components: {
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
  },
  data() {
    return {
      // 컴포넌트의 데이터를 초기화합니다.
      funcName: '',
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
.page_title {
  background-color: rgb(173, 192, 68);
  margin-bottom: 20px;
  padding: 20px;
}
.page_title p {
  margin: 10px 0;
}
</style>