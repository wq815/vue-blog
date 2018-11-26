<template>
    <div class="archive-container">
        <div v-for="(a,index) in articleList" :key="index">
            <h4>{{ a.title }}</h4>
            <ul class="list" v-for="(m,index) in a.content" :key="index">
              <li>
                <router-link :to="'/articleShow/' + m.id">{{ m.title }}</router-link>
                <span class="time"> {{ m.publishTime }}</span>
              </li>
            </ul>
        </div>
    </div>
</template>
<script>
import moment from "moment";
import request from "@/utils/request";
export default {
  mounted() {
    request({
      url: "/articles/client/list",
      mothed: "get"
    })
      .then(({ data }) => {
        let count = 0;
        for (let d of data) {
          let obj = { title: "", content: [] };
          let dataTime = moment(d.publishTime).format("YYYY-MM-DD");
          d.publishTime = moment(d.publishTime).format('YYYY-MM-DD hh:mm')
          if (this.articleList.length == 0) {
            obj.title = dataTime;
            obj.content.push(d);
            this.articleList.push(obj);
          } else {
            for (let a in this.articleList) {
              if (
                dataTime.split("-")[1] ==
                this.articleList[a].title.split("-")[1]
              ) {
                this.articleList[a].content.push(d);
              } else {
                obj.title = dataTime;
                obj.content = [];
                obj.content.push(d);
                this.articleList.push(obj);
              }
            }
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  data() {
    return {
      articleList: []
    };
  },
  methods: {
    showArticle(id) {
      this.$router.push(`/articleshow/${id}`);
    }
  }
};
</script>
<style lang="scss" scoped>
.archive-container {
    ul {
        /*padding-left: .2em;*/
        list-style-type: circle;
        li {
            margin: 0.8em 0;
        }
    }

    .date {
        color: $special;
    }

    a {
        color: $base;
    }
}
</style>
