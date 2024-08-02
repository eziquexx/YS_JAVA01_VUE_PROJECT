<template>
  <div class="son">
    <p>큰 아들 : {{ message }} {{ msg }}</p>
    <cute-g-son11 ref="gson11" />
    <cute-g-son12 ref="gson12" @event_report="receiveEvent"/>
    <input type="text" v-model="sndMessage">
    <button @click="clickSon10_1">큰아들버튼1</button>
    <button @click="clickSon10_2">큰아들버튼2</button>
    <button @click="clickSon10">큰아들버튼1,2</button>
    <button @click="clickSon10_3">큰아들버튼3</button>
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
      message : '',
      sndMessage : '',
    };
  },
  watch: {
    // sample1() {
    //   console.log('');
    // }
    // 데이터를 감시하고 처리할 로직을 작성합니다.
  },
  computed: {

  },
  methods: {
    clickSon10_1() {
      this.message = '큰아들이 첫번째 버튼을 눌렀습니다.';
      this.$refs.gson11.clickMsg();
    },
    clickSon10_2() {
      this.message = '큰아들이 두번째 버튼을 눌렀습니다.'
      this.$refs.gson12.clickMsg('큰아버지가 둘째아들에게 명령함');
    },
    clickSon10() {
      this.message = '큰아들이 자식1, 2의 메세지를 불러왔습니다.'
      this.$refs.gson11.clickMsg();
      this.$refs.gson12.clickMsg();
    },
    changeTextColor(idx, data) {
      this.$refs.gson11.changeTextColor(idx, data);
      this.$refs.gson12.changeTextColor(idx, data);
    },
    clickSon10_3() {
      this. message = '큰아들이 버튼을 눌렀음'
      this.$refs.gson11.message = this.sndMessage;
    },
    receiveEvent(data) {
      this.message=(data);
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
  padding: 20px;
  margin: 20px;
}
.gson {
  background-color: rgb(137, 165, 202);
  margin: 20px;
}
.son button {
  padding: 6px;
  margin: 4px;
}
</style>