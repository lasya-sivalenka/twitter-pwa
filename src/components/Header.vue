<template>
     <header>
          <div class="inner">
              <div class="headerSection">
                  <router-link to="/" class="link">Home</router-link>
              </div>
              <div class="headerSection">
                  <img src="../assets/twitter-icon.png" width="24" height="21">
              </div>
              <div class="headerSection">
                  <input type="text" name="search" class="search" v-model="data.search" placeholder="Search..">
                  <router-link to="/addTweet" class="tweetLink">Tweet</router-link>
              </div>
          </div>
      </header>
</template>

<script>

import store from '@/data.js';

export default {
  name: 'Header',
  data() {
    return {
      data: store.data
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

@media only screen and (max-width: 700px) {
  header .link {
    width: 30px;
    border-bottom: 2px solid #1c94e0;
    text-decoration: unset;
    display: block;
    font-weight: bold;
    padding: 0 5px;
  }

  .search {
    display: none;
  }

  header .inner {
    max-width: 80%;
  }
  
}

@media only screen and (min-width: 710px) {
  
  header .link {
      color: #1da1f2;
      width: 50px;
      border-bottom: 2px solid #1c94e0;
      text-decoration: unset;
      display: block;
      font-weight: bold;
      padding: 0 15px;
  }

  .search {
      align-self: center;
      width: 200px;
      height: 35px;
      padding: 10px;
      background-color: #f5f8fa;
      border-radius: 21px;
      border: 1px solid #e6ecf0;
      box-sizing: border-box;
      color: #14171a;
      outline: 0;
  }

  header .inner {
    max-width: 65%;
    margin: 0 auto;
  }
}

header {
    width: 100%;
    height: 57px;
    line-height: 55px;
    margin-bottom: 32px;
    background: #fff;
    border-bottom: 1px solid #e5eff5;
}

header .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.headerSection {
    // width: 33%;
    text-align: center;
}

.headerSection:first-child {
    display: flex;
    justify-content: center;
    width: 33%;
}




.tweetLink {
    background-color: #1da1f2;
    border: 1px solid #1da1f2;
    color: #fff;
    text-decoration: none;
    border-radius: 100px;
    padding: 6px 16px;
    margin-left: 15px;
}

.tweetLink:hover {
    background-color: #006dbf;
    border-color: #006dbf;
}

</style>


