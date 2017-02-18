<template>
  <div class="itemList">
    <ul>
			<item v-for="item in items" :item="item" :db="db"></item>
		</ul>
  </div>
</template>

<script>
import Item from './Item';

export default {
  name: 'itemList',
  components: {
    Item,
  },
  props: ['items', 'db'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
</style>
