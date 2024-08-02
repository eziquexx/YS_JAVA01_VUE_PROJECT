<template>
  <div class="son">
    <p>둘째 아들 : {{ message }}</p>
    <cute-g-son21 ref="gson21"/>
    <cute-g-son22 ref="gson22" @event_report="receiveEvent"/>
    <button @click="clickSon20_2">둘째아들버튼2</button>

    <input type="text" v-model="sndMsg">
    <input type="button" value="둘째아들버튼" @click="clickBtn">
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
      message: '',
      sndMsg: '',
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
    clickSon20_2() {
      this.message = '둘째 아들이 본인의 막내를 호출함';
      this.$refs.gson22.clickMsg();
    },
    changeTextColor(idx, data) {
      this.$refs.gson21.changeTextColor(idx, data);
      this.$refs.gson22.changeTextColor(idx, data);
    },
    clickBtn() {
      this.$refs.gson21.message = this.sndMsg;
      this.$refs.gson22.message = this.sndMsg;
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
  background-color: rgb(194, 194, 109);
  margin: 20px;
}
.son button {
  padding: 6px;
  margin: 4px;
}
</style>