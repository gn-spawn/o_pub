<template>
    <div id="item">
		<a v-bind:href="item.text" v-bind:item.point="point">{{item.text}}</a>
		<button type="" @click="addPoint(item)" class="button">{{item.point}} オッ</button>
	</div>
</template>

<script>
export default {
  name: 'item',
  data() {
    return {
    };
  },
  methods: {
/*    addPoint(item) {
    }, */
  },
  props: ['item', 'db'],
};
</script>

<style>
	.button {
		display: inline-block;
		width: 4rem;
		height: 4rem;
		background: -webkit-linear-gradient(#71A9F7, #71A9F7);
		background: linear-gradient(#71A9F7, #71A9F7);
		border: 1px solid #71A9F7;
		border-radius: 50%;
		color: #fff;
		text-decoration: none;
		text-align: center;
		margin: 1rem;
		overflow: hidden;
		outline: none;
	}
	
	.button:hover {
		-webkit-animation: scale .3s ease-in-out;
		animation: scale .3s ease-in-out;
	}
	
	@-webkit-keyframes scale {
		50% {
			-webkit-transform: scale(1.1);
		}
	}
	
	@keyframes scale {
		50% {
			transform: scale(1.1);
		}
	}
</style>
