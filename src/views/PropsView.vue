<template>
  <div class="parents_props">
    <h2>부모 컴포넌트(PropsView.vue) 페이지</h2>
    <PageTitle 
      title="title3" 
      age="3"
      hobbies="['자전거', '등산', '꽃꽂이', '게임']"
      family="{'papa': '아빠', 'mom': '엄마'}"
    />

    <page-title 
      :title="title2" 
      :age="age"
      :hobbies="hobbies"
      :family="family"
      :func="func"
    />
    
  </div>
  <div class="hobby_button">
    <p>취미 추가하면 두번째 자식 컴포넌트에 취미가 변하는 걸 볼 수 있다.</p>
    <br/>
    <input type="text" v-model="hobby">
    <button @click="addHobby">취미추가</button>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue';
export default {
  name: 'PropsView',
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
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
    PageTitle,
  },
  data() {
    return {
      // 컴포넌트의 데이터를 초기화합니다.
      title1: 'page 1 v-bind:title 사용',
      title2: 'page 2 :title 사용',
      title3: 'page 3 v-bind:title없이 title만 사용',
      hobbies: [],
      hobby: '',
      family: {papa: '아빠', mom: '엄마'},
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
    addHobby() {
      this.hobbies.push(this.hobby);
      return '';
    },
    func() {
      return '부모 지정 사용자 함수';
    },
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
/* 스타일을 추가하세요 */
.parents_props {
  padding: 0 40px;
}
.parents_props h2 {
  margin: 20px 0;
}
.hobby_button {
  background-color: aliceblue;
}
.hobby_button input {
  display: inline-block;
  padding: 6px;
}
.hobby_button button {
  padding: 4px 8px;
  margin-left: 6px;
  font-size: 16px;
}
</style>