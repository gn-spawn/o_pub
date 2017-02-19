<template>
	<div id="app">
		<a href="https://github.com/you"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"></a>
		<img src="./assets/o.png">
		<h1>と思ったことを今すぐ共有</h1>
		<input v-model="newUrlText" v-on:keyup.enter="addUrl" placeholder="オッと思ったことのURL" id="url" name="url">
		<itemList v-bind:items="items" v-bind:database="database"></itemList>
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
    // Itemコンポーネントでメソッドを使いたい
    items: ItemRef,
  },
  data() {
    return {
      newUrlText: '',
      items: firebase.items,
      database: db,
    };
  },
  methods: {
    addUrl() {
      if (this.newUrlText) {
        ItemRef.push({
          text: this.newUrlText,
          point: 0,
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
