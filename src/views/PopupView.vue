<template>
  <div class="">
    <br>
    <br>
    <sample-01-pop/>
    <br>
    <br>
    <sample-02-pop/>
  </div>
</template>

<script>
import Sample01Pop from './Sample01Pop.vue';
import Sample02Pop from './Sample02Pop.vue';

export default {
  name: 'PopupView',
  props: {
    
  },
  components: {
    Sample01Pop,
    Sample02Pop
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

</style>