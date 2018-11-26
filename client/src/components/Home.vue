<template>
    <div class="articlelist-container">
        <div class="article-list">
            <article v-for="{id, title, publishTime, content} in articleList" :key="id">
                <header>
                    <h2>
                        <router-link class="title" :to="'/articleshow/' + id">{{ title }}</router-link>
                    </h2>
                    <h4 class="time">{{ publishTime }}</h4>
                </header>
                <p class="abstract" v-html="parseMarkdown(content)"></p>
                <footer>
                    <router-link class="read-more" :to="'/articleshow/' + id">... continue reading</router-link>
                </footer>
            </article>
        </div>
        <div class="pagination">
            <span class="prev" :class="{'hide': parseInt($route.query.page, 10) === 0}">←<a @click="prevPage">上一页</a>
            </span>
            <span class="next" :class="{'hide': parseInt($route.query.page, 10) === maxPage - 1}"><a @click="nextPage">下一页</a>→</span>
        </div>
    </div>
</template>
<script>
import request from "@/utils/request";
import parseMarkdown from "@/utils/parseMarkdown";
import moment from "moment";
export default {
  name: "Home",
  data() {
    return {
      articleList: "",
      offset: 5,
      maxPage: ""
    };
  },
  mounted() {
    request({
      url: `/articles/client/list/?offset=${this.offset*this.$route.query.page}&isPublished=1`,
      mothed: "get"
    })
      .then(({ data }) => {
        for (let article of data.data) {
          article.publishTime = moment(article.publishTime).format(
            "YYYY年MM月DD日 hh:mm"
          );
        }
        this.articleList = data.data;
        this.maxPage = data.maxPage;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    parseMarkdown,
    prevPage() {
      if (this.$route.query.page > 0) {
        this.$router.push({
          path: "/articles",
          query: { page: this.$route.query.page - 1 }
        });
      }
    },
    nextPage() {
      if (this.$route.query.page < this.maxPage - 1) {
        this.$router.push({
          path: "/articles",
          query: { page: parseInt(this.$route.query.page, 10) + 1 }
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
h2 {
  border-bottom: none;
  padding: 0;
}

.title {
  color: $title;
  padding-bottom: 0.3em;
}

.title:hover {
  border-bottom: 2px solid $base;
}

.read-more {
  color: $base;
}

.pagination {
  @include flex($justify: space-between);
  font-size: 1.5rem;
  margin-top: 1.5em;
}

.prev,
.next {
  a {
    cursor: pointer;
    color: $base;
  }
}

.hide {
  opacity: 0;
}
</style>
