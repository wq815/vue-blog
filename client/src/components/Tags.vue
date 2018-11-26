<template>
    <div class="tag-container">
        <h1>标签</h1>
        <nav>
            <ul class="tags">
                <li v-for="(tag,index) in tagsList" :key="index">
                    <a href="javascript:void(0)" :class='{active:tags.indexOf(tag)!=-1}' @click="goAnchor(tag)">{{ tag }}</a>
                </li>
            </ul>
        </nav>
        <div>
            <ul class="list" v-for="(m,index) in articleList" :key="index">
              <li>
                <router-link :to="'/articleShow/' + m.id">{{ m.title }}</router-link>
                <span class="time"> {{ m.publishTime }}</span>
              </li>
            </ul>
        </div>
    </div>
</template>
<script>
import request from "@/utils/request";
export default {
  mounted() {
    request({
      url: "/articles/client/list",
      mothed: "get"
    })
      .then(({ data }) => {
        let showTags = [];
        for (let tag of data) {
          let tags = tag.tags.split(",");
          if (showTags.length == 0) {
            for (let t of tags) {
              showTags.push(t);
            }
          } else {
            for (let t of tags) {
              if (showTags.indexOf(t) == -1) {
                showTags.push(t);
              }
            }
          }
        }
        this.tagsList = showTags;
      })
      .catch(err => {
        console.log(err);
      });
  },
  data() {
    return {
      articleList: [],
      tagsList: [],
      tags: []
    };
  },
  methods: {
    goAnchor(val) {
      const index = this.tags.indexOf(val);
      if (index != -1) {
        this.tags.splice(index, 1);
      } else {
        this.tags.push(val);
      }
      request({
        url: "/articles/client/tags/1",
        method: "post",
        data: this.tags
      }).then(({ data }) => {
        this.articleList = data;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.tag-container {
    padding-left: 10px;
  .tags {
    padding: 0;
    list-style: none;
    li {
      display: inline;
      margin-right: 0.3em;
    }
  }

  .tag-list {
    padding: 0;
    list-style: none;
    li {
      margin: 0.8em 0;
    }
  }

  a {
    color: $base;
    display: inline-block;
    padding: 2px 2px;
    border-radius: 4px;
    transition: all .2s;
    &:hover{
      background-color: $base;
      color: white;
    }
  }
  .active {
    background-color: $base;
    color: white;
  }
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
}
</style>
