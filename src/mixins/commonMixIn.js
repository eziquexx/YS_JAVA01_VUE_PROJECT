export const commonMixIn = {
  data(){
    return{
      sharedData:'공유데이터',
    }
  },
  methods:{
    sharedMethod(){
      this.sharedData = '공유 데이터 변경됨';
    }
  },
  mounted(){
    console.log('믹스인 mounted');    
  },
  unmounted(){
    console.log('믹스인 unmounted');    
  },


}