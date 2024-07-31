<template>
  <h2 class="title">---------------------- value값 연결 ----------------------</h2>
  <div class="basic section">
    <h3>Hello, {{ title }}</h3>
    <h3>{{ title }}는 수원 장안구에 있습니다.</h3>
    <p>{{ message }}</p>
    <p v-html="message"></p>
    <div>
      <!-- v-model은 양방향 -->
      <input type="text" v-model="nickname" name="" id="">
    </div>
    <div>
      <input type="number" v-model="age">
    </div>
  </div>
  <div class="section">
    <textarea v-model="message" cols="30" rows="10"></textarea>
  </div>
  <div class="section">
    <select name="city" v-model="city">
      <option value="01">서울</option>
      <option value="02" selected>부산</option>
      <option value="03">대구</option>
      <option value="04">수원</option>
    </select>
  </div>
  <div class="section">
    <label><input type="checkbox" v-model="cbox">{{ cbox }}</label>
    <label><input type="checkbox" v-model="cbox2" true-value="동의" false-value="비동의">{{ cbox2 }}</label>
  </div>
  <div class="section">
    <p>좋아하는 음식은?</p>
    <label><input type="checkbox" v-model="goodfood" value="마라탕">마라탕</label>
    <label><input type="checkbox" v-model="goodfood" value="민트초코">민트초코</label>
    <label><input type="checkbox" v-model="goodfood" value="홍어삼합">홍어삼합</label>
    <p>당신이 좋아하는 음식은 {{ goodfood }}입니다.</p><br/>

    <p>싫어하는 음식은?</p>
    <label><input type="checkbox" v-model="badfood" value="순대">순대</label>
    <label><input type="checkbox" v-model="badfood" value="곱창">곱창</label>
    <label><input type="checkbox" v-model="badfood" value="막창">막창</label>

    <p>당신이 싫어하는 음식은 {{ badfood }}입니다.</p>
  </div>
  <div class="section">
    <p>당신의 성별은?</p>
    <label><input type="radio" v-model="gender" value="남">남</label>
    <label><input type="radio" v-model="gender" value="여">여</label>
    <p>당신은 {{ gender }}자 입니다.</p>
  </div>
  <h2 class="title">---------------------- 속성 연결 ----------------------</h2>
  <div class="section">
    <img v-bind:src="imgSrc" v-bind:title="tooltip"/>
  </div>
  <div class="section">
    <button v-bind:disabled="show1">눌러주세요</button>
    <button v-bind:disabled="show2">눌러주세요</button>
  </div>
  <div class="section">
    <button v-bind:style="btn1">눌러주세요</button>
    <button v-bind:style="btn2">눌러주세요</button>
  </div>
  <h2 class="title">---------------------- 제어문 (v-for, v-if, v-else) ----------------------</h2>
  <div class="section">
    <table>
      <thead>
        <tr>
          <th style="border: 1px solid gray">제품명</th>
          <th style="border: 1px solid gray">가격</th>
          <th style="border: 1px solid gray">카테고리</th>
          <th style="border: 1px solid gray">배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="index" v-for="(item, index) in products">
          <td style="border: 1px solid gray">{{ item.name }}</td>
          <td style="border: 1px solid gray">{{ item.price }}</td>
          <td style="border: 1px solid gray">{{ item.category }}</td>
          <td style="border: 1px solid gray">3{{ item.delivery }}000</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="section">
    <!-- v-if 요소를 만드느냐 마느냐 -->
    <p v-if="true">if참일때</p>
    <p v-if="false">if거짓일때</p>
    <!-- v-show는 요손ㄴ 만들고, 보여주는지 여부를 처리 -->
    <p v-show="true">show참일때</p>
    <p v-show="false">show거짓일때</p>
  </div>
  <h2 class="title">---------------------- 이벤트(v-on / @) ----------------------</h2>
  <div class="section">
    <button v-on:click="increaseCounter">클릭(증가)</button>
    <button @:click="decreaseCounter">클릭(감소)</button>
    <p>counter: {{ counter }}</p>    
    <button @:click="increaseCounter(), showMsg()">증가후 알림창</button>
    <button @:click="decreaseCounter(), showMsg()">감소후 알림창</button>
    <br/>
    <input type="number" v-model="countValue">
    <button @:click="applyCounter">적용</button>
    <br/>
  </div>
  <div class="section">
    <select v-model="cityValue" @change="changeCity">
      <option value="서울">서울</option>
      <option value="부산">부산</option>
      <option value="대구">대구</option>
      <option value="수원">수원</option>
    </select>
  </div>
  <div class="section">
    <input type="text" v-model="emailValue" @input="changeEmail" placeholder="이메일을 입력">
    <p v-if="errEmail">{{ errEmail }}</p>
    <!-- <p>{{ emailValue }} / {{ errEmail }}</p> -->
  </div>
  <div class="section">
    <input type="text" v-model="pwdValue1" @input="changePwd1" placeholder="비번을 입력하세요"><br/>
    <input type="text" v-model="pwdValue2" @input="changePwd1" placeholder="비번 확인을 입력하세요">
    <p v-if="errPwd">{{ errPwd }}</p>
  </div>
</template>

<script>
export default {
  name: 'BasicView',
  components: {
    
  },
  data() {
    return {
      title : '연세IT',
      message : '<b>연세IT</b>는 <b><span style="color: red;">5년</span></b> 우수 직업 학교 입니다.',
      nickname : '돌쇠',
      age : 22+3,
      city : '04',
      cbox : true,
      cbox2 : '비동의',
      goodfood : [],
      badfood : [],
      gender : '남',
      imgSrc : 'https://borgssam.github.io/MySite/img/album_01.jpg',
      tooltip : '툴팁메시지',
      show1 : true,
      show2 : false,
      btn1 : {
        backgroundColor : '#49cc6c',
        color : '#0f6326',
        fontSize: '30px',
        border: 'none',
        borderRadius: '6px',
        padding: '8px 16px',
      },
      btn2 : {
        backgroundColor: '#8249cc',
        color : '#3a1766',
        fontSize: '30px',
        border: 'none',
        borderRadius: '6px',
        padding: '8px 16px',
      },
      products : [
        { "name" : "마우스1", "price" : "2501", "category" : "PC용품1", "delivery" : "1000"},
        { "name" : "마우스2", "price" : "2502", "category" : "PC용품2", "delivery" : "2000"},
        { "name" : "마우스3", "price" : "2503", "category" : "PC용품3", "delivery" : "3000"},
      ],
      counter : 0,
      countValue : 10,
      cityValue : '수원',
      emailValue : '',
      errEmail : '',
      pwdValue1: '',
      pwdValue2: '',
      errPwd : '비번을 입력하세요',
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
    increaseCounter(){
      this.counter = this.counter + 1;
    },
    decreaseCounter() {
      this.counter = this.counter - 1;
    },
    applyCounter() {
      this.counter = this.countValue;
    },
    showMsg() {
      alert('현재 값 => ' + this.counter);
    },
    changeCity() {
      alert('선택한 도시: ' + this.cityValue);
    },
    changeEmail() {
      this.emailValue
      // 이메일 형식 정규 표현식
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(this.emailValue === '' || emailPattern.test(this.emailValue)) {
        this.errEmail = '';
      } else {
        this.errEmail = '이메일 형식에 어긋납니다.'
      }
    },
    changePwd1() {
      if(this.pwdValue1 === '') {
        this.errPwd = '비번을 입력하세요';
      } else if(this.pwdValue2 === '') {
        this.errPwd = '비번확인을 입력하세요';
      } else if(this.pwdValue1 === this.pwdValue2) {
        this.errPwd = '비번이 일치합니다.';
      } else {
        this.errPwd = '비번이 일치하지 않습니다';
      }
    },
  }
};
</script>

<style scoped>
  table {
    border-collapse: collapse;
    width: 90%;
    margin: 0 auto;
  }
  td, th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }
  th {
    text-align: center;
    font-weight: 600;
  }
  h2.title {
    display: block;
    color: #f52563;
    margin: 100px 0 30px;
  }
  div.section {
    width: 80%;
    margin: 20px auto;
    border: 1px solid #ddd;
    padding: 20px;
  }
</style>