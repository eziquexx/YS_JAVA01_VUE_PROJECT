<template>
  <div class="section">
    <h2 class="title">data()란?</h2>
    <p>컴포넌트 인스턴스의 초기 반응형 상태를 반환하는 함수입니다.</p>
    <p>쉽게 말하자면 값을 data()에 저장하고 data()에 저장된 값을 불러와 사용할 수 있다.</p>
    <p>아래 script안에 data() 라고 적혀있다. 살펴보기를..</p>
    <br/>
    <p>*문서 링크: <a href="https://v3-docs.vuejs-korea.org/api/options-state.html#data">https://v3-docs.vuejs-korea.org/api/options-state.html#data</a></p>
  </div>
  <div class="section">
    <h2 class="title">p태그에 일반 입력</h2>
    <p>연세 IT <b>미래</b> 교육원</p>
    
    <div class="line"></div>
    
    <h2 class="title">p태그에 mustache(콧수염; 중괄호 2개 `{ { data값 } }`) 사용</h2>
    <p> {{ title }} </p>
    
    <div class="line"></div>
    
    <h2 class="title">p태그에 v-text 사용</h2>
    <p v-text="title"></p>
    
    <div class="line"></div>
    
    <h2 class="title">p태그에 v-html 사용</h2>
    <p v-html="title"></p>
  </div>
  <div class="section">
    <h2 class="title">input태그에 value 사용</h2>
    <input type="text" name="" value="333" /><br/>

    <div class="line"></div>

    <!-- input태그에 v-model을 적용해보자. -->
    <h2 class="title">input태그에 v-model 사용</h2>
    <!-- v-model은 변수와 컨트롤 사이에 값이 왔다 갔다 하는 것이다.-->
    <!-- 리액트의 onChange와 유사하다. -->
    <input type="text" v-model="nick" /><br/> 
    <input type="number" v-model="age" /><br/>
  </div>
  <div class="section">
    <h2 class="title">textarea태그에 일반(직접 입력)</h2>
    <textarea cols="30" rows="10">동해물과 백두산이</textarea><br/>

    <div class="line"></div>
    
    <!-- textarea태그에 v-model을 적용해보자. -->
    <h2 class="title">textarea태그에 v-model사용</h2>
    <textarea v-model="message" cols="30" rows="10"></textarea>
  </div>
  <div class="section">
    <h2 class="title">select > option 태그에 일반 사용</h2>
    <select name="" id="">
      <option value="01">서울</option>
      <option value="02">부산</option>
      <option value="03">대구</option>
      <option value="04">수원</option>
    </select>
    
    <div class="line"></div>

    <h2 class="title">select태그에 v-model 사용</h2>
    <!-- select 태그에 v-model을 적용시켜보자. -->
    <select name="" id="" v-model="city">
      <option value="01">서울</option>
      <option value="02">부산</option>
      <option value="03">대구</option>
      <option value="04">수원</option>
    </select>
  </div>

  <div class="section">
    <!-- input태그의 id와 label의 for값이 동일해야 동의라는 글자 클릭해도 checkbox가 check가 된다. 그러하지 않으면 checkbox에만 클릭해야 check가 된다. -->
    <h2 class="title">체크박스 일반적인 사용</h2>
    <input type="checkbox" id="cbtn_agree">
    <label for="cbtn_agree">동의</label><br/>
    
    <div class="line"></div>

    <h2 class="title">label태그 안에 input:checkbox 태그 넣고 v-model 적용시키기</h2>
    <label><input type="checkbox" v-model="agree">동의</label>
    
    <div class="line"></div>

    <!-- true-value와 false-value를 적용시키지 않으면 checkbox를 클릭했을 때 true, false로 나와버린다. 이때 true-value와 false-value를 사용하여 value값이 true일때의 내용과 value값이 false일때의 원하는 내용을 직접 적용시켜서 화면에 출력할 수 있다. -->
    <h2 class="title">label태그 안에 input:checkbox 태그 넣고 v-model 적용시키기<br/>그리고 true-value와 false-value를 적용.</h2>
    <label><input type="checkbox" v-model="agree2"
      true-value="동의" false-value="비동의"  
    >{{ agree2 }}</label>

    <div class="line"></div>

    <h2 class="title">label > input태그에 배열([ ])의 값을 가지고 있는 v-model을 적용시키기</h2>
    <p>기본피자에 원하시는 토핑을 추가하세요</p><br/>
    <label><input type="checkbox" v-model="pizza" value="치즈"> 치즈 </label><br/>
    <label><input type="checkbox" v-model="pizza" value="파인애플"> 파인애플 </label><br/>
    <label><input type="checkbox" v-model="pizza" value="버섯"> 버섯 </label><br/><br/>
    <p>당신이 추가로 선택하신 토핑은 {{ pizza }} 입니다.</p>

    <div class="line"></div>
    <h2 class="title">label > input태그에 v-model을 적용시키기.<br/>단 배열([ ])의 값이 아니라 ' ' 아무런 값이 없는 걸로 적용.</h2>
    <p>당신의 탕수육취향은?</p><br/>
    <label>
      <input type="radio" v-model="sweet_sour_pork" value="부먹">부먹
    </label>
    <label>
      <input type="radio" v-model="sweet_sour_pork" value="찍먹">찍먹
    </label>
    <br/><br/>
    <p>당신은 <span style="color: red; font-weight: 800;">{{ sweet_sour_pork }}</span>파 입니다.</p>
  </div>

  <div class="section">
    <h2 class="title">속성 연결. img태그 일반적인 사용</h2>
    <img src="https://borgssam.github.io/MySite/img/album_01.jpg" alt=""><br/>
    <div class="line"></div>
    <h2 class="title">속성 연결. img태그 v-bind:src 사용, v-bind:title 사용(tooltip)</h2>
    <img v-bind:src="imgSrc" alt="" v-bind:title="imgTitle"><br/>

    <div class="line"></div>

    <h2 class="title">button태그에 ":disabled 속성과 값으로 true/false 적용", ":style 속성과 값으로 data()에 저장한 값 불러오기"</h2>
    <div>
      <button :disabled="btn_01" :style="color_red">버튼</button>
      <button :disabled="btn_02" :style="color_blue">버튼</button>
    </div>
  </div>

  <div class="section">
    <!-- v-for -->
    <h2 class="title">table태그 일반적인 방식</h2>
    <table>
      <thead>
        <th>제품명</th>
        <th>가격</th>
        <th>품목</th>
        <th>배송료</th>
      </thead>
      <tbody>
        <tr>
          <td>마우스</td>
          <td>3000</td>
          <td>pc용품</td>
          <td>25</td>
        </tr>
        <tr>
          <td>키보드</td>
          <td>3000</td>
          <td>pc용품</td>
          <td>25</td>
        </tr>
        <tr>
          <td>모니터</td>
          <td>3000</td>
          <td>pc용품</td>
          <td>25</td>
        </tr>
      </tbody>
    </table>

    <div class="line"></div>

    <h2 class="title">table태그 v-for, v-bind:key 사용</h2>
    <table>
      <thead>
        <th>제품명</th>
        <th>가격</th>
        <th>품목</th>
        <th>배송료</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in goods" v-bind:key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.delivery }}</td>
        </tr>
      </tbody>
    </table>

    <div class="line"></div>

    <!-- v-if v-else-if v-else -->
    <h2>v-if 속성의 값을 true로 주면 보이고, false로 주면 안 보인다.</h2>
    <p v-if="true">호랑이</p>
    <p v-if="false">사자</p>

    <div class="line"></div>

    <div>
      <h2 class="title">v-if, v-else-if, v-else</h2>
      <label>점수를: <input type="number" v-model="score"></label>
      <br/>
      <p v-if="score >= 90">A학점</p>
      <p v-else-if="score >= 80">B학점</p>
      <p v-else-if="score >= 70">C학점</p>
      <p v-else-if="score >= 60">D학점</p>
      <p v-else>F학점</p>
    </div>

    <div class="line"></div>

    <div>
      <h2 class="title">도전.. watch 사용해서 해보자..</h2>
      <label>국어: <input type="number" v-model="kor" placeholder="국어 점수를 입력해주세요."></label><br/>
      <label>영어: <input type="number" v-model="eng" placeholder="영어 점수를 입력해주세요."></label><br/>
      <label>수학: <input type="number" v-model="math" placeholder="수학 점수를 입력해주세요."></label>
      <br/><br/>
      <p>국어 학점은? <span style="color:blue; font-weight:bold;">{{ korTxt }}</span></p>
      <p>영어 학점은? <span style="color:blue; font-weight:bold;">{{ engTxt }}</span></p>
      <p>수학 학점은? <span style="color:blue; font-weight:bold;">{{ mathTxt }}</span></p>
    </div>

    <div class="line"></div>

    <h2 class="title">이벤트 v-on // @ 사용</h2>
    <div>
      <label>국어: <input type="number" v-model="kor" placeholder="국어 점수를 입력해주세요."></label><br/>
      <label>영어: <input type="number" v-model="eng" placeholder="영어 점수를 입력해주세요."></label><br/>
      <label>수학: <input type="number" v-model="math" placeholder="수학 점수를 입력해주세요."></label>
      <br/><br/>
      <p v-if="avg >= 90">A학점({{ avg }})</p>
      <p v-else-if="avg >= 80">B학점({{ avg }})</p>
      <p v-else-if="avg >= 70">C학점({{ avg }})</p>
      <p v-else-if="avg >= 60">D학점({{ avg }})</p>
      <p v-else>D학점({{ avg }})</p>
      <button v-on:click="showScore">계산</button>
    </div>

    <div class="line"></div>

    <div>
      <h2 class="title">구구단..</h2>
      <input type="text" v-model="dan" placeholder="단 입력" /> 
      <button v-on:click="multiplicationTable">계산</button>
      <p>{{ dan }}단</p>
      <label v-for="(item, index) in rseultDanTxt" v-bind:key="index" >
        <p>{{ item.dan }} * {{ item.dan2 }} = {{ item.resultDan }}</p>
      </label>
    </div>
  </div>
  <div class="section">
    <h2 class="title">select > option 일반적인 사용</h2>
    <select name="" id="">
      <option value="서울">서울</option>
      <option value="부산">부산</option>
      <option value="대구">대구</option>
      <option value="수원">수원</option>
      <option value="광주" selected>광주</option>
    </select>

    <div class="line"></div>

    <h2 class="title">select > option vue식으로 만들기<br/>select태그에 v-modiel, @change 사용</h2>
    <select v-model="city2" @change="changeCity">
      <option value="서울">서울</option>
      <option value="부산">부산</option>
      <option value="대전">대전</option>
      <option value="수원">수원</option>
      <option value="광주">광주</option>
    </select>
    <p>{{ message2 }}</p>
  </div>

  <div class="section">
    <h2 class="title">회원가입 정규식 표현 활용하여 만들기</h2>
    <p>
      <label>이메일
        <input type="text" placeholder="이메일을 입력하세요" v-model="emailValue" @input="changeEmail">
      </label><br/>
      <span> => {{ msgEmail }}</span>
    </p>
    <p>
      <label>비밀번호
        <input type="text" placeholder="비밀번호를 입력하세요" v-model="pwdValue" @input="changePwd">
      </label><br/>
      <span> => {{ msgPwd }}</span>
    </p>
    <p>
      <label>비밀번호확인
        <input type="text" v-model="pwdValue2" placeholder="비밀번호확인을 입력하세요" @input="changePwd2">
      </label><br/>
      <span> => {{ msgPwd2 }}</span>
    </p>
  </div>

  <div class="section">
    <h2 class="title">method로 만들었을 때</h2>
    <div>
      <label> 성 : <input type="text" v-model="familyName1" @input="makeFullName1"> </label><br/>
      <label> 이름 : <input type="text" v-model="name1" @input="makeFullName1"> </label>
      <p>성명(method) : {{ fullName1 }}</p>
    </div>

    <div class="line"></div>

    <h2 class="title">computed로 만들었을 때</h2>
    <div>
      <label> 성 : <input type="text" v-model="familyName2"></label><br/>
      <label> 이름 : <input type="text" v-model="name2"> </label>
      <p>성명(computed) : {{ makeFullName2 }}</p>
    </div>

    <div class="line"></div>

    <h2 class="title">watch로 만들었을 때</h2>
    <div>
      <label> 성 : <input type="text" v-model="familyName3" @input="makeFullName3"> </label><br/>
      <label> 이름 : <input type="text" v-model="name3"> </label>
      <p>성명(watch) : {{ fullName3 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestView',
  components: {}, // 자식 컴포넌트를 의미
  data() {
    return {
      title: '연세 IT 미래 교육원',
      nick: '노래하는 큰바위',
      age: 30,
      message: '깊은 산속 옹달샘 누가와서 먹나요~',
      city: '04',
      agree: false,
      agree2: '비동의',
      pizza: [],
      sweet_sour_pork: '',
      imgSrc: 'https://borgssam.github.io/MySite/img/album_01.jpg',
      imgTitle: '가방든 사나이',
      btn_01: true,
      btn_02: false,
      color_red: { color: 'red', fontSize: '24px' },
      color_blue: { color: 'blue', fontSize:'24px' },
      goods: [
        {"name":"마우스", "price":10000, "category":"PC용품", "delivery":2500},
        {"name":"키보드", "price":30000, "category":"PC용품", "delivery":2500},
        {"name":"모니터(커브드와이드)", "price":2000000, "category":"PC용품", "delivery":0},
      ],
      score: '',
      kor: 0,
      korTxt: '',
      eng: 0,
      engTxt: '',
      math: 0,
      mathTxt: '',
      avg: 0,
      dan: 0,
      rseultDanTxt: [],
      city2: '광주',
      message2: '안녕하세요 반갑습니다',
      emailValue: '',
      msgEmail: '이메일을 입력하세요',
      pwdValue: '',
      pwdValue2: '',
      msgPwd: '비밀번호를 입력하세요',
      msgPwd2: '비밀번호 확인을 입력하세요',
      familyName1:'',
      name1:'',
      fullName1:'',
      familyName2:'',
      name2:'',
      familyName3:'',
      name3:'',
      fullName3:'',
      
    }  
  },
  watch : {
    kor() {
      if (this.kor >= 90 ) {
        this.korTxt = "A학점";
      } else if (this.kor >= 80) {
        this.korTxt = "B학점";
      } else if (this.kor >= 70) {
        this.korTxt = "C학점";
      } else if (this.kor >= 60) {
        this.korTxt = "D학점";
      } else {
        this.korTxt = "F학점";
      }

      return this.korTxt;
    },
    eng() {
      if (this.eng >= 90 ) {
        this.engTxt = "A학점";
      } else if (this.eng >= 80) {
        this.engTxt = "B학점";
      } else if (this.eng >= 70) {
        this.engTxt = "C학점";
      } else if (this.eng >= 60) {
        this.engTxt = "D학점";
      } else {
        this.engTxt = "F학점";
      }

      return this.engTxt;
    },
    math() {
      if (this.math >= 90 ) {
        this.mathTxt = "A학점";
      } else if (this.math >= 80) {
        this.mathTxt = "B학점";
      } else if (this.math >= 70) {
        this.mathTxt = "C학점";
      } else if (this.math >= 60) {
        this.mathTxt = "D학점";
      } else {
        this.mathTxt = "F학점";
      }

      return this.mathTxt;
    },
    familyName3(){
      this.fullName3 = this.familyName3+ ' - ' + this.name3;
    },
    name3(){
      this.fullName3 = this.familyName3+ ' - ' + this.name3;
    }
  },
  methods: {
    showMessage() {
      alert('메시지 발생');
    },
    showScore() {
      this.avg = (this.kor + this.eng + this.math) / 3;
    },
    multiplicationTable() {
      this.rseultDanTxt = []; //결과 초기화
      for(let dan2 = 1; dan2 < 10; dan2++){
        this.rseultDanTxt.push({
          dan: this.dan,
          dan2: dan2,
          resultDan: this.dan * dan2,
        })
      }  
    },
    changeCity() {
      switch(this.city) {
        case '서울':
            this.message= '안녕하세요. 반갑습니다.';
            break;
        case '부산':
            this.message= '안녕하십니꺼. 반갑습니더.';
            break;
        case '대전':
            this.message= '안녕하세요. 반가워유.';
            break;
        case '수원':
            this.message= '안녕하세요. 반갑습니다.';
            break;
        case '광주':
            this.message= '안녕하시오. 반갑소잉.';
            break;
        default:
            break;
      }
    },
    changeEmail() {
      // this.emailValue이 이메일 형식에 맞는지 체크
      // 문자열 + @ + 문자열 + . + 문자열
      const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if(this.emailValue.length == 0){
        this.msgEmail = '이메일을 입력하세요';
      } else if (emailExp.test(this.emailValue) == true) {
        this.msgEmail = '정상적인 이메일 주소입니다.';
      } else {
        this.msgEmail = '이메일 주소가 올바르지 않습니다.';
      }
    },
    changePwd() {
      let pwdExp1 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
      let pwdExp2 = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/;
      let pwdExp3 = /^(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
      let pwdExp4 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-]).{8,15}$/;

      if(this.pwdValue.length == 0){
        this.msgPwd = '비밀번호를 입력하세요';
      } else if (this.pwdValue.length > 12 ) {
        this.msgPwd = '12자 이하로 다시 입력해주세요.';
      } else if (pwdExp1.test(this.pwdValue)) {
        this.msgPwd = 'GOOOOOOOD~';
      } else if (pwdExp2.test(this.pwdValue) == true ) {
        this.msgPwd = '특수문자 포함하여 다시 입력해주세요';
      } else if (pwdExp3.test(this.pwdValue) == true) {
        this.msgPwd = '영문 포함하여 다시 입력해주세요';
      } else if (pwdExp4.test(this.pwdValue) == true) {
        this.msgPwd = '숫자 포함하여 다시 입력해주세요.';
      } else {
        this.msgPwd = '비밀번호는 8자 이상, 15자 이하로 입력하고, 영문, 숫자, 특수문자를 포함하여 다시 입력해주세요.'
      }
    },
    changePwd2() {
      if(this.pwdValue2.length == 0){
        this.msgPwd2 = '비밀번호 확인을 입력하세요';
      } else if (this.pwdValue2 == this.pwdValue) {
        this.msgPwd2 = '비밀번호가 일치합니다.';
      } else {
        this.msgPwd2 = '비밀번호가 일치하지 않습니다.'
      }
    },
    makeFullName1(){
      this.fullName1 = this.familyName1+ ' - ' + this.name1;
    }
  },
  computed: {
    makeFullName2(){
      return this.familyName2+ ' - ' + this.name2;
    }
  }
}
</script>

<!-- scoped는 이 파일 안에서만 적용 시키겠다는 의미 -->
<style scoped> 
  h2.title {
    display: block;
    font-size: 20px;
    color: #aa3c89;
    margin: 20px auto;
  }
  div.section {
    width: 80%;
    margin: 20px auto;
    border: 1px solid #ddd;
    padding: 20px;
  }
  div.line {
    width: 100%;
    height: 1px;
    border: 1px dashed rgb(163, 163, 163);
    margin: 30px auto;
  }


  table {
    width: 100%;
    border-collapse: collapse;
  }
  td, th {
    border: 1px solid #ddd;
  }
</style>