<template id="addTweet">
    <div class="addTweetContainer">
      <textarea rows="7" cols="90" placeholder="What’s happening?" v-model="tweet"> </textarea>

      <div class="tweetLinkContainer">
        <a v-on:click="postTweet()" class="tweetLink" to="/" >Tweet</a>
      </div>
    </div>
</template>


<script>

export default {
  name: 'AddTweet',
  data: function() {
      return {
        tweet: ""
      }
  },
  methods: {
    postTweet() {
      if(this.tweet)
      {
        const tweet = {
          body: this.tweet,
          date: 'now',
          author: 'Me',
          avatar: '/egg.jpeg'
        }
        this.$root.$emit('addTweet',tweet);
        this.$router.push('/');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .addTweetContainer {
        max-width: 65%;
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    .addTweetContainer textarea {
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 15px;
        outline: 0px;
        padding: 10px 20px;
    }

    .addTweetContainer .tweetLink {
        background-color: #1da1f2;
        border: 1px solid #1da1f2;
        color: #fff;
        text-decoration: none;
        border-radius: 100px;
        padding: 6px 16px;
        margin-left: 15px;
        width: 50px;
        cursor: pointer;
    }

    .tweetLinkContainer {
        text-align: right;
        margin-top: 30px;
    }
</style>

