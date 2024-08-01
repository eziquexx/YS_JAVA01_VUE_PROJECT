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

  </div>
  <div class="section">
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
    }  
  },
  methods: {}
}
</script>

<!-- scoped는 이 파일 안에서만 적용 시키겠다는 의미 -->
<style scoped> 
  h2.title {
    display: block;
    font-size: 20px;
    color: #bb4798;
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
</style>