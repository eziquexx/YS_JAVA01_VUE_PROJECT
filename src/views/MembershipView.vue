<template>
  <div class="membership">
    <form v-bind:style="formStyle" class="formStyle">
      <h2 v-bind:style="mainTitle">회원가입</h2>
      <div v-bind:style="divStyle">
        <h4 v-bind:style="inputTitle">사용자 이름</h4>
        <label>
          <input type="text" v-bind:style="inputText" placeholder="ex) jelee">
        </label>
      </div>
      <div v-bind:style="divStyle">
        <h4 v-bind:style="inputTitle">이메일</h4>
        <label>
          <input type="email" v-model="emailMsg" v-bind:style="inputText" placeholder="example@gmail.com">
        </label>
      </div>
      <div v-bind:style="divStyle">
        <h4 v-bind:style="inputTitle">비밀번호</h4>
        <label>
          <input type="password" v-model="pwdlMsg1" v-bind:style="inputText" placeholder="******">
        </label>
      </div>
      <div v-bind:style="divStyle">
        <h4 v-bind:style="inputTitle">비밀번호 확인</h4>
        <label>
          <input type="password" v-model="pwdlMsg2" v-bind:style="inputText" placeholder="******">
        </label>
      </div>
      <div v-bind:style="divStyle">
        <h4 v-bind:style="inputTitle">성별</h4>
        <div>
            <label v-bind:style="radioStyle"><input type="radio" v-model="gender" value="남성">남성</label>
            <label v-bind:style="radioStyle"><input type="radio" v-model="gender" value="여성">여성</label>
        </div>
      </div>
      <div v-bind:style="divStyle">
        <h4 v-bind:style="inputTitle">좋아하는 음식</h4>
        <select name="likeFood" v-bind:style="selectStyle">
          <option value="01">한식</option>
          <option value="02">양식</option>
          <option value="03">중식</option>
          <option value="04">일식</option>
        </select>
      </div>
      <div v-bind:style="divStyle">
        <label>
          <input type="checkbox" v-model="consentMsg" >
          <span v-bind:style="consentTxt">정보공개 동의</span>
        </label>
      </div>
      <div v-bind:style="divStyle"><button v-bind:style="btnStyle">가입하기</button></div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'MembershipView',
  components: {
    
  },
  data() {
    return {
      formStyle : {
        width : '60%',
        height : 'auto',
        padding : '30px',
        margin: '20px auto',
        textAlign : 'left',
        backgroundColor : '#fff',
        borderRadius : '10px',
        color : 'black',
      },
      nameMsg : '홍길동',
      gender : '남성',
      likeFood : '01',
      consentMsg : '동의',
      mainTitle : {
        display : 'block',
        fontSize : '30px',
        fontWeight : 'bold',
        marginBottom : '34px',
      },
      divStyle : {
        marginTop : '20px',
      },
      inputTitle : {
        fontWeight : 'bold',
        fontSize : '18px',
        marginBottom : '6px',
      },
      inputText : {
        display: 'block',
        width: '100%',
        padding : '8px 6px',
        color : '#222',
        border : '1px solid #8c8c8c',
        borderRadius : '4px',
      },
      radioStyle : {
        marginRight : '10px',
      },
      selectStyle : {
        display : 'block',
        width : '100%', 
        padding : '8px 4px',
        fontSize : '14px',
        border : '1px solid #8c8c8c',
        borderRadius : '4px',
      },
      consentTxt : {
        display: 'inline-block',
        fontWeight : 'bold',
        fontSize : '18px',
        marginBottom : '4px',
        marginLeft : '6px',
      },
      btnStyle : {
        display : 'block',
        padding : '8px 14px',
        fontSize : '18px',
        fontWeight : 'bold',
        backgroundColor : '#4287f5',
        color : '#fff',
        border : 'none',
        borderRadius : '6px',
        margin : '0 auto',
      }
    };
  },
  setup() {
    
  },
  created() {
    
  },
  mounted() {
    
  },
  unmounted() {
    
  },
  methods: {
    
  }
};
</script>

<style scoped>
  .membership {
    width: 100%;
    height: 100%;
    display: block;
    overflow: hidden;
    background-color: rgb(225, 230, 235);
  }
  .formStyle {
    box-shadow: 0px 14px 24px -6px rgba(0, 0, 0, 0.3);
  }
  input::placeholder {
    color: #b8b8b8;
  }
</style>