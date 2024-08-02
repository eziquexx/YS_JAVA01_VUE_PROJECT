<template>
  <div class="gson">
    <p v-bind:style="{color:tcolor}">작은집손자2 : {{ message }}</p>
    <button @click="clickMsg">둘째버튼</button>
    <input type="text" v-model="gson22msg" placeholder="아빠한테 보낼 메세지">
    <input type="button" value="손자22" @click="clickGson22">
  </div>
</template>

<script>
export default {
  name: 'CuteGSon22',
  props: {

  },
  components: {
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
  },
  data() {
    return {
      index: 2,
      message: '',
      tcolor: 'red',
      gson22msg: '',
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
    clickMsg() {
      this.message = '둘째가 버튼 눌렀음.'
    },
    changeTextColor(idx, data) {
      if(this.index == idx) {
        this.tcolor=data;
      }
    },
    clickGson22(){
      this.$emit('event_report', this.gson22msg);
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