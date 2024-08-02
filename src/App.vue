<template>
  <nav>
    <div class="menuTitle">[ 수업 목록 ]</div>
    <router-link to="/">01. Home</router-link>
    <router-link to="/about">02. About</router-link>
    <router-link to="/basic">03. 컴포넌트(기본)</router-link>
    <router-link to="/testCopy">04. 컴포넌트(기본/복습)</router-link>
    <router-link to="/membership">05. 회원가입 폼</router-link>
    <router-link to="/props">06. props 공부</router-link>
    <router-link to="/test"> --- 테스트페이지</router-link>
  </nav>
  <router-view/>
</template>

<style>
* {
  padding : 0;
  margin : 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E50;
}
nav {
  z-index : 1;
  position: fixed;
  top:10px;
  right:10px;
  display: flex;
  flex-direction:column;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 26px;
  box-shadow: 0 13px 27px -5px rgba(50,50,93,0.25),
              0  8px 16px -8px rgba(0,0,0,0.3),
              0 -6px 16px -6px rgba(0,0,0,0.25);
  border-radius: 5px;
  transition: background-color 0.4s ease;
}
nav:hover {
  background-color: rgba(255, 255, 255, 1);
}
nav a {
  text-decoration: none;
  color : rgba(50, 54, 172, 0.4);
  text-transform:uppercase;
  font-size: 12px;
  text-align: left;
  font-weight: 600;
  transition: color 0.4s ease;
}
nav:hover a {
  color: rgba(50, 54, 172, 1);
}
nav a:hover {
  color: rgb(76, 161, 187);
}
nav a:not(:last-child){
  margin-bottom: 10px;
}
nav .menuTitle {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
