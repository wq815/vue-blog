<template>
    <div class="resume">
        <h1>简历</h1>
        <div class="header_me">
            <div class="aboutme">
                <section><p><span>姓名</span>王强</p><p><span>工作经验</span>2年</p></section>
                <p><span>求职意向</span>Web前端工程师</p>
                <p>
                    <span>联系方式</span>
                    <span class="fon">(邮箱)&nbsp;&nbsp;18336888801@163.com</span>
                    <span class="fon">(手机)&nbsp;&nbsp;18336888801</span>
                </p>
            </div>
            <div>
                <img src="../assets/image/me.jpg" alt="">
            </div>
        </div>
        <div class="jishu">
            <h2>技术栈</h2>
            <ul>
                <li>
                    熟悉HTML5、css3语法特性，能够写出符合标准的网页。了解各种浏览器之间的差异，可以解决IE与其他浏览器的兼容性问题。
                </li>
                <li>
                    熟悉原生Javascript 写法，熟悉对DOM 的操作，可以使用原生Javascript实现页面的简单效果，熟悉原生Javascript中的事件机制，异步，闭包等机制，了解原型链。了解ES6语法的新特性。了解面对对象的思想。熟练掌握jquery，bootstrap等JS 库的使用，能正常使用其来完成需求。
                </li>
                <li>
                    了解HTTP协议，了解GET和POST 请求的区别，简单了解TCP/IP协议簇内容，了解ajax请求机制，并且可以正常使用ajax完成前后台交互功能。
                </li>
                <li>
                    熟悉Vue框架，能够熟练使用Vue完成页面效果，了解Vue中数据双向绑定，指令，生命周期，父子组件传值（props，emit）等概念，掌握使用Vue-Router构建前端应用。熟悉element-UI，Vant等框架的使用。了解React，微信小程序，了解viewport响应式开发方案
                </li>
                <li>
                    了解模块化开发思想，可以使用webpack自动化构建工具从零开始完成前端的模块化和自动化设置。了解git的基本操作，并且可以使用git完成项目管理。
                </li>
                <li>
                    了解模块化开发思想，可以使用webpack自动化构建工具从零开始完成前端的模块化和自动化设置。了解git的基本操作，并且可以使用git完成项目管理。
                </li>
                <li>
                    了解MYSQL，MongoDB数据库，了解nodejs语法和环境搭建，掌握基本的文件读写、中间件、路由处理、请求、响应、异步等node核心概念，可以使用koa制作个人项目。
                </li>
                <li>
                    了解异步的三种形式：回调函数，Permise封装，监听事件，了解nodejs处理异步的原理和工作方法
                </li>
                <li>
                    了解 express/koa，ejs/art-template/koa-view模板引擎，webpack自动化构建工具，以及bodyParser/koa-cros/mongoose/mysql/monent等node插件的使用
                </li>
                <li>
                    热爱学习，对新知识有足够的兴趣去学习，服从领导。
                </li>
            </ul>
        </div>
        <div class="line">
            <h2>工作经验</h2>
            <article>
                <h3>2016.11 ---- 2018.9 在成都艾特莱普科技有限公司任职web前端工程师</h3>
                <section>
                    <h4>工作描述</h4>
                    <ul>
                        <li>
                            使用Vue.js进行前端页面开发。
                        </li>
                        <li>
                            通过Ajax实现对后台数据的交互。
                        </li>
                        <li>
                            根据现有的开发代码并按照客户的需求进行二次开发。
                        </li>
                    </ul>
                </section>
            </article>
        </div>
        <div class="line">
            <h2>项目经验</h2>
            <article>
                <h3>个人小型文章管理项目</h3>
                <section><h4>开发环境：</h4>Windows、Node.js</section>
                <section><h4>开发工具：</h4>MySql、Vue、VS Code</section>
                <section><h4>项目介绍：</h4>自己开发的一个小型博客系统，有专门用于修改个人信息、文章信息、发布文章的后台管理页面，也有用于不同用户查看的前台页面</section>
                <section>
                    <h4>所用技术：</h4>
                    <ul>
                        <li>
                            该项目基于NodeJS构建，使用了koa框架与body-parser、js-cookies、koa-cors等功能模块对请求和数据进行处理，数据库使用mysql实现了对数据的增删改查功能。项目中使用了js-cookies和jsonwebtoken对用户登录信息进行加密存储，并且使用了md5模块来对用户的信息进行加密储存至数据库中。
                        </li>
                        <li>
                            前端页面使用Vue框架，使用了Vue-Router进行单页面网页构建，Vuex进行对特殊数据的保存与修改，vee-validate进行表单的规则验证，vue-notifiction进行消息弹框提示，sass进行全局样式设计，页面美观流畅,通过CSS3实现一些交互、悬停动画。
                        </li>
                        <li>
                            前端使用了axios模块来与服务端进行连接,实现前后端数据交互功能
                        </li>
                    </ul>   
                </section>
            </article>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
  //   border: 1px solid black;
}
h1,
p,
h2,
h3,
h4,
li,
ul {
  margin: 0;
  padding: 0;
}
h4 {
  display: inline-block;
  &::before {
    content: "";
  }
  font-size: 23px;
}
h3 {
  font-size: 23px;
  margin: 5px 0;
}
h2 {
  font-size: 25px;
  margin: 10px 0;
  &::before {
    content: "~ ";
    color: $base;
  }
}
.resume {
  padding: 0 10px;
  h1 {
    text-align: center;
    padding: 30px 0;
    font-size: 30px;
  }
}
.header_me {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  img {
    width: 120px;
    flex-grow: 0;
    flex-shrink: 0;
  }
  .aboutme {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    section {
      display: flex;
      p {
        flex-grow: 1;
      }
    }
    span {
      font-weight: bold;
      display: inline-block;
      padding-right: 30px;
      font-size: 25px;
    }
  }
  .fon {
    font-size: 20px !important;
  }
}
.jishu {
  border-top: 1px solid #000000;
  padding: 20px 50px;
  li {
    list-style: circle;
    margin: 10px 0;
    font-size: 20px;
  }
}
article {
  padding-left: 20px;
  section {
    font-size: 20px;
    ul {
      padding-left: 40px;
    }
  }
}
.line{
    border-top: 1px solid black;
    padding-bottom: 5px;
}
</style>
