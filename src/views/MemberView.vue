<template>
  <div class="">
    <h1>회원목록</h1>
    <ul>
      <li v-for="(member, index) in members" :key="index">
        <p>이름: {{ member.name }}, 나이: {{ member.age }}, 직업: {{ member.job }} <button @click="removeMember(index)">삭제</button></p>
      </li>
    </ul>
  </div>
  <div>
    이름 <input type="text" v-model="editName" placeholder="이름"><br>
    나이: <input type="text" v-model="editAge" placeholder="나이"><br>
    직업 <input type="text" v-model="editJob" placeholder="직업"><br>
    <button @click="addMember">추가</button>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed , ref} from 'vue';

export default {
  name: 'MemberView',
  setup() {
    const store = useStore();
    
    // 회원정보 목록 가져오기
    const members = computed( () => store.state.members );
    
    const editName = ref('');
    const editAge = ref('');
    const editJob = ref('');


    // 버튼 클릭시 멤버 추가 함수
    const addMember = () => {
      const data = {
        name: editName.value,
        age: editAge.value,
        job: editJob.value,
      }
      // store에 위 함수와 data값 저장
      store.commit('addMember', data);
      editName.value ='';
      editAge.value ='';
      editJob.value ='';

      console.log('회원목록 =>' + store.state.members)
    }

    const removeMember = (index) => {
      store.commit('removeMember', index);
    }

    return { members, addMember, editName, editAge, editJob, removeMember }
  },
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>