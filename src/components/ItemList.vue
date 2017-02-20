<template>
  <div class="itemList">
    <ul>
			<item v-for="item in items" :item="item" :database="database"></item>
		</ul>
  </div>
</template>

<script>
import Item from './Item';

export default {
  name: 'itemList',
  deta() {
    return {
      items: this.items.reverse(),
    };
  },
  components: {
    Item,
  },
  props: ['items', 'database'],
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
