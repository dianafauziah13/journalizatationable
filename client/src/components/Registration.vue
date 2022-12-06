<template id="regist-form">
  <div class="regist-wrapper">
    <div class="regist-left">
      <img  lazy-src="@/assets/logojournal.png" src="@/assets/logojournal.png" max-height="160" max-width="160">
    </div>
    <form class="regist-right" @submit.prevent>
      <div class="h2">Register</div>
      <div class="form-group">
        <input type="text" id="firstname" placeholder="firstname" v-model="firstname">    
      </div>
      <div class="form-group">
        <input type="text" id="lastname" placeholder="lastname" v-model="lastname">   
      </div>
      <div class="form-group">
        <input type="text" id="email" placeholder="email" v-model="email">    
      </div>
      <div class="form-group">
        <input type="password" id="Password" placeholder="Password" v-model="password">    
      </div>
      <div class="checkbox-container">
        <input type="checkbox" v-model="rememberMe">
        <div class="text-checkbox">Remember me</div>
      </div> 
      <div class="button-area">
        <button class="btn btn-primary pull-right" @click="regist()" >regist</button>
      </div>
      <p class="forgot-password text-left mt-2 mb-4">
              Already have an account?   
              <router-link :to="{name: 'signin'}">Login</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "registForm",
  template: "#regist-form",
  data() {
    return {
      rememberMe: false,
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    };
  },
  beforeMount() {
    let init = 1000;
    setTimeout(function() {
      document.querySelector(".regist-wrapper").classList.toggle("open");
      init = 300;
    }, init);
  },
  methods: {
    isRememberMe() {
      return this.rememberMe === true;
    },
    regist() {
      //we should handle errors in a more scalabe way, but this works for now

      alert(this.email + " " + this.password + " " + this.rememberMe);

      axios
        .post("http://localhost:5000/api/register", 
            { 
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                password: this.password,
                password2: this.password
              
            }
          )
          .then(response => {
            alert(response);
            console.log(this.email, "ada ga euy")
            console.log(response, "Cikan aya eweuh")
            window.location.replace("/");
            //handle response and save JWT
          })
          .catch(err => {
            alert(err);
            console.log ("Cikan ayah")
          });
      },
      register() {
        alert("Coming soon ...");
      }
    }
  };
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  box-sizing: border-box;
  align-items: center;
  
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#sandbox {
  font-family: "Lato", sans-serif;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row-reverse;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background: linear-gradient(243.87deg, #22bf64 30.6%, #371933 130.6%);
  overflow: hidden;
}

input {
  font-family: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0;
  font-size: 16px;
  color: #000;
  border-radius: 0;
  border-botton: 0;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #aaaaaa;
}

button,
input:focus {
  outline: 0;
}

::-webkit-input-placeholder {
  font-size: 16px;
  font-weight: 300;
  letter-spacing: -0.00933333em;
}

.form-group {
  position: relative;
  padding-top: 15px;
  margin-top: 10px;
}

label {
  position: absolute;
  top: 0;
  opacity: 1;
  -webkit-transform: translateY(5px);
  transform: translateY(5px);
  color: rgb(170, 170, 170);
  font-weight: 300;
  font-size: 13px;
  letter-spacing: -0.00933333em;
  transition: all 0.2s ease-out;
}

input:placeholder-shown + label {
  opacity: 0;
  -webkit-transform: translateY(15px);
  transform: translateY(15px);
}

.h1 {
  color: #fff;
  opacity: 0.8;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2405em;
  transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
  text-align: center;
  cursor: pointer;
  position: absolute;
  transform: translateY(-10px);
}

.open .h1 {
  -webkit-transform: translateX(200px) translateZ(0) translateY(-10px);
  transform: translateX(200px) translateZ(0) translateY(-10px);
}

.h2 {
  color: #000;
  font-size: 20px;
  letter-spacing: -0.00933333em;
  font-weight: 600;
  padding-bottom: 15px;
}

.regist-wrapper {
  width: 900px;
  height: 520px;
  background-color: #fff;
  box-shadow: 0px 2px 50px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.regist-left {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
  overflow: hidden;
}

.regist-left img {
  display: block;
  transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
  object-position: left;
}

.open .regist-left img {
  -webkit-transform: translateX(210px) translateZ(0);
  transform: translateX(210px) translateZ(0);
}

.open .regist-left {
  -webkit-transform: translateX(-400px) translateZ(0);
  transform: translateX(-400px) translateZ(0);
}

.regist-right {
  padding: 40px;
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  -webkit-transform: translateX(400px) translateZ(0);
  transform: translateX(400px) translateZ(0);
  transition: all 770ms cubic-bezier(0.51, 0.04, 0.12, 0.99);
}

.open .regist-right {
  -webkit-transform: translateX(0px) translateZ(0);
  transform: translateX(0px) translateZ(0);
}

.checkbox-container {
  display: flex;
  margin-top: 35px;
}

.text-checkbox {
  color: #aaa;
  font-size: 16px;
  letter-spacing: -0.00933333em;
  font-weight: 300;
  margin-left: 15px;
}

input[type="checkbox"] {
  cursor: pointer;
  margin: 0;
  height: 22px;
  position: relative;
  width: 22px;
  -webkit-appearance: none;
  transition: all 180ms linear;
}

input[type="checkbox"]:before {
  border: 1px solid #aaa;
  background-color: #fff;
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-radius: 2px;
  transition: all 180ms linear;
}

input[type="checkbox"]:checked:before {
  background: linear-gradient(198.08deg, #C0325F 45.34%, #e281e7 224.21%);
  border: 1px solid #C0325F;
}

input[type="checkbox"]:after {
  content: "";
  border: 2px solid #fff;
  border-right: 0;
  border-top: 0;
  display: block;
  height: 4px;
  left: 4px;
  opacity: 0;
  position: absolute;
  top: 6px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  width: 12px;
  transition: all 180ms linear;
}

input[type="checkbox"]:checked:after {
  opacity: 1;
}

.button-area {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.btn {
  font-family: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
  border: none;
  border-radius: 2px;
  height: 40px;
  display: flex;
  padding: 0 35px;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: -0.00933333em;
}

.btn-primary {
  color: #fff;
  background: linear-gradient(198.08deg, #C0325F 45.34%, #e281e7 224.21%);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: right;
}

.btn-primary:hover,
.btn-primary:focus {
  color: #fff;
  background: linear-gradient(198.08deg, #e0aabb 45.34%, #e281e7 224.21%);
}

.btn-secondary {
  color: #C0325F;
}
.btn-secondary:focus,
.btn-secondary:hover {
  color: #C0325F;
}
</style>