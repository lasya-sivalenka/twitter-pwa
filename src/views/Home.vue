<template id="feed">
    <div>
        <div v-for="tweet in feed" :key="tweet.title" class="tweet">

            <div class="avatarContainer">
                <img :src="tweet.avatar" class="avatar" width="70" height="70">
            </div>

            <div class="tweetBody">
                <div class="tweetHead">
                    <span class="author">
                        {{ tweet.author }}
                    </span>
                    {{ tweet.date }}
                </div>
                <div class="tweetContent">
                    {{ tweet.body }}
                </div>
            </div>

        </div>
    </div>
</template>
<script>

import store from '@/data.js';

export default {
  name: 'home',
  components: {
  },
  data() {
      return {
          data: store.data
      }
  },
  computed: {
      feed() {
          return this.data.feed.filter(tweet => {
              return tweet.body.indexOf(store.data.search) > -1;
          })
      }
  },
  mounted() {
    this.data.feed.map(tweet => {
      tweet.avatar = require('../static/'+tweet.avatar)
    });
    this.$root.$on('addTweet',tweet => {
      this.data.feed.unshift(tweet);
    })   
  }
}
 </script>


<style lang="scss" scoped>
    .avatarContainer {
        margin-right: 20px;
    }

    .avatar {
        margin-top: 3px;
        border-radius: 50%;
    }

    .tweetBody {
        margin-top: 5px;
    }

    .tweetHead {
        font-size: 13px;
    }

    .author {
        font-size: 14px;
        font-weight: bold;
    }

    .tweetContent {
        font-size: 14px;
        line-height: 20px;
        margin-top: 8px;
    }

    .tweet {
        display: flex;
        background-color: #fff;
        width: 65%;
        max-width: 900px;
        min-height: 110px;
        padding: 10px 20px;
        border-bottom: 1px solid #e6ecf0;
        margin: 0 auto;
    }
</style>

