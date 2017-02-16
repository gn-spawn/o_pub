<template>
  <div id="app">
    <img src="./assets/o.png">
    <h1>と思ったことを今すぐ共有</h1>
    <input v-model="newUrlText" v-on:keyup.enter="addUrl" placeholder="オッと思ったことのURL" id="url" name="url">
    <itemList v-bind:items="items"></itemList>
  </div>
</template>

<script>
import firebase from 'firebase';
import ItemList from './components/ItemList';

const config = {
  databaseURL: 'https://o-pub-8cbcf.firebaseio.com/',
};
/* global Vue, firebase */
const db = firebase.initializeApp(config).database();
const ItemRef = db.ref('todos');

export default {
  name: 'app',
  components: {
    ItemList,
  },
  firebase: {
    items: ItemRef,
  },
  data: {
    newUrlText: '',
    items: firebase.items,
  },
  methods: {
    addUrl() {
      console.log(this.newUrlText);
      if (this.newUrlText) {
        ItemRef.push({
          text: this.newUrlText,
        });
        this.newUrlText = '';
      }
    },
  },
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
  
  input {
    border: 0;
    padding: 10px;
    font-size: 1.3em;
    font-family: Arial, sans-serif;
    color: #aaa;
    border: solid 1px #ccc;
    margin: 0 0 20px;
    width: 300px;
  }
</style>
