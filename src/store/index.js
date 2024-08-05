import { createStore } from "vuex";
import persistedstate from 'vuex-persistedstate';

// vuex store 생성 (저장소 생성)
const store = createStore(
  // vuex의 기본문법
  {
    //상태초기화 (vue: data 유사)
    state() {
      return {
        user: {

        },
      }
    },
    getters: {

    },
    // 변의정의
    mutations: {
      // 함수 값을 넣는 함수
      // state.user에 data 값을 보내줌.
      setUser(state, data){
        // state.user에 data 값을 넣어주겠다.
        state.user = data;
      }
    },
    actions: {

    },
    // 플로그인: 상태를 지속적으로 저장하는 역할
    plugins: [
      persistedstate(
        {
          paths: ['user'] //로컬 스토리지에 저장할 상태의 경로를 설졍
        }
      ),
    ],
  }
);

export default store;