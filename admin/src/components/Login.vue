<template>
    <div class="login-container">
        <header class="login-head">
            <span>无火的余灰</span>
            <img class="logo" src="../assets/image/logo.png" alt="营火">
        </header>
        <section class="form">
            <span class="slogan">登登登登...录!
                <span>/ Login</span>
            </span>
            <input required name="user" v-validate="'required'" type="text" id="user" placeholder="Username" v-model="loginFrom.username">
            <input required name="password" v-validate="'required'" type="password" id="password" placeholder="Password" v-model="loginFrom.password" @keyup.enter="login">
            <button id="login" @click="login">登录</button>
        </section>
        <footer>Always.</footer>
        <notifications group='user' position="top center"></notifications>
        <notifications group='admin' position="top center"></notifications>
    </div>
</template>
<script>
// 设置验证提醒q
import { Validator } from "vee-validate";
const dict = {
  custom: {
    user: {
      required: "您的用户名不能为空"
    },
    password: {
      required: "您的密码不能为空"
    }
  }
};
Validator.localize("en", dict);
import request from "@/utils/request";
import {setToken} from '@/utils/auth'
export default {
  name: "Login",
  data() {
    return {
      loginFrom: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      // 验证成功进行登录，失败进行消息提示
      if (this.errors.items.length == 0) {
        request({
          url: "/login",
          method: "post",
          data: this.loginFrom
        }).then(({data}) => {
            if (data.success) {
              setToken(data.token);
              this.$store.commit('SET_TOKEN',data.token);
              this.$router.push('/list');
            }else{
              this.$notify({
                type: "error",
                group:'admin',
                title: "登录失败",
                text: data.message
              });
            }
          }).catch(err => {
            console.log(err);
          });
      } else {
        this.$notify({
          width: "500px",
          type: "warn",
          group:'user',
          title: "验证失败",
          text: this.errors.items[0].msg
        });
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.login-container {
  height: 100%;
  @include flex($flow: column wrap);
  font-family: "KaiShu", "Dosis", "Source Sans Pro", "Helvetica Neue", Arial,
    sans-serif;
  .login-head {
    @include flex;
    width: 100%;
    height: 3em;
    font-size: 2rem;
  }

  .form {
    @include flex($flow: column wrap);
    width: 400px;
    height: 250px;
    border-top: 20px solid $base;
    border-radius: 5px;
    // box-shadow: 4px 4px 5px -3px rgba(0, 0, 0, .3);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
    .slogan {
      font-size: 1.6rem;
      margin-bottom: 1em;
      //color: $quote;
      span {
        color: $base;
      }
    }
    input {
      font: {
        size: 1rem;
        family: Dosis, Arial, sans-serif;
      }
      margin-bottom: 2em;
      width: 20em;
      height: 2.5em;
      outline-color: $base;
      border-radius: 3px;
      border: 1px solid #ccc;
    }
    button {
      color: $white;
      font: {
        size: 1.6rem;
        family: KaiShu, Arial, sans-serif;
      }
      width: 6em;
      height: 2em;
      border: none;
      background: $base;
      outline: none;
      cursor: pointer;
    }
  }

  footer {
    height: 4em;
    @include flex;
    justify-self: flex-end;
  }

  .my-style {
    font-size: 30px;
    .notification-title {
    }
    .notification-content {
    }
    &.my-type {
    }
  }
}
</style>
