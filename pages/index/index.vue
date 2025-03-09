<template>
	<scroll-view scroll-y="true" class="scroll-Y">
		<view class="index-card" hover-class="card-hover-class" @click="handleClick('/pages/couple/couple')">
			<image class="card-img" mode="center" src="https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg" @error="imageError"></image>
			<text class="card-text">两人</text>
		</view>
		<view class="index-card" hover-class="card-hover-class" @click="handleClick('/pages/dog/dog')">
			<image class="card-img" mode="center" src="https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg" @error="imageError"></image>
			<text class="card-text">一狗</text>
		</view>
		<view class="index-card" hover-class="card-hover-class" @click="handleClick('/pages/wedding/wedding')">
			<image class="card-img" mode="center" src="https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg" @error="imageError"></image>
			<text class="card-text">婚礼</text>
		</view>
	</scroll-view>
</template>

<script setup>
import { ref } from 'vue';

// uni.navigateTo

const handleClick = (pagePath) => {
	uni.navigateTo({ url: pagePath });
};
</script>

<style>
.scroll-Y {
	height: 100vh;
	box-sizing: border-box;
	background-color: transparent;
	padding-bottom: constant(safe-area-inset-bottom);
	padding-bottom: env(safe-area-inset-bottom);
}
.index-card {
	/* position: relative;
	height: 300rpx;
	border-radius: 12rpx;
	margin: 24rpx;
	box-shadow: 0 0 5px 2px rgba(120, 230, 170, 0.3); */
	/* width: 700px; */
	margin: 30rpx;
	padding: 20rpx;
	height: 250rpx;
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
.card-hover-class {
	box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 8px;
}

.card-img {
	width: 100%;
	height: 100%;
	border-radius: 12rpx;
}

.card-text {
	position: absolute;
	padding: 20rpx 36rpx;
	background-color: rgba(244, 244, 244, 0.2);
	font-size: 60rpx;
	font-weight: bold;

	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	border-radius: 9px;
	backdrop-filter: blur(5px);
	background-color: rgba(173, 239, 255, 0.075);
	/* box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px; */
}
</style>