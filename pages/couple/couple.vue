<template>
	<scroll-view scroll-y="true" class="scroll-Y">
		<view class="grid-item-box" v-for="(item, index) in images" :index="index" :key="index">
			<image class="box-img" mode="aspectFill" :src="item"></image>
		</view>
	</scroll-view>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const images = [
	'https://gd-hbimg.huaban.com/ede93cf241ce93df1f824022ce1bc6dd042879819162e-fvCJH6',
	'https://gd-hbimg.huaban.com/2d14622d76dbcd036cc47f240c80d5f1b9e6481da3430-r5cTIt',
	'https://gd-hbimg.huaban.com/824306750839c34939b4345039e7425740598dd510a9c1-ewh29L',
	'https://gd-hbimg.huaban.com/824306750839c34939b4345039e7425740598dd510a9c1-ewh29L',
	'https://gd-hbimg.huaban.com/ce90e5b734b0c9933335d962a02ae6e8227965b6a984c-Gg1vRz',
	'https://gd-hbimg.huaban.com/9fa5103953d1b3f2a70984f17395c1cf1eddc8db2af38-Q2fm1x',
	'https://gd-hbimg.huaban.com/ce90e5b734b0c9933335d962a02ae6e8227965b6a984c-Gg1vRz'
];

onMounted(() => {});
</script>

<style>
.scroll-Y {
	height: 100vh;
	box-sizing: border-box;
	background-color: transparent;
	padding-bottom: constant(safe-area-inset-bottom);
	padding-bottom: env(safe-area-inset-bottom);
}
.grid-item-box {
	height: 450rpx;
	margin: 16rpx 16rpx;
	padding: 16rpx;

	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	border-radius: 9px;
	backdrop-filter: blur(5px);
	background-color: rgba(173, 239, 255, 0.075);
	box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
}
.box-img-wrapper {
	width: 100%;
	height: 30px;
}
.box-img {
	width: 100%;
	height: 100%;
	border-radius: 9px;
}
</style>
