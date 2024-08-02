<template>
  <div class="">
    <TemplatePop>
      <template v-slot:header>
        <h4 style="color:red">경고</h4>
      </template>
      <p>당신은 제한 <span style="color:red">접근구역</span>에 들어가려고합니다.</p>
      <template v-slot:footer>
        <button type="button">닫기</button>
      </template>
    </TemplatePop>
  </div>
</template>

<script>
import TemplatePop from './TemplatePop.vue';
export default {
  name: 'Sample01Pop',
  props: {
    
  },
  components: {
    TemplatePop
  },
  data() {
    return {
    };
  },
  watch: {
  },
  computed: {
  },
  methods: {
  },
  setup() {
  },
  created() {
  },
  mounted() {
  },
  unmounted() {
  }
};
</script>

<style scoped>
  footer button {
    padding: 6px 12px;
    background-color: #d1d1d1;
    border: 1px solid #b8b8b8;
    border-radius: 4px;
    font-size: 14px;
  }
</style>