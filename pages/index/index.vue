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
	background-color: white;
	padding-bottom: constant(safe-area-inset-bottom);
	padding-bottom: env(safe-area-inset-bottom);
}
.index-card {
	position: relative;
	height: 300rpx;
	border-radius: 12rpx;
	margin: 24rpx;
	box-shadow: 0 0 1rpx 4rpx #eeeeee;
}
.card-hover-class {
	box-shadow: 0 0 2rpx 4rpx #eeeeee;
}

.card-img {
	width: 100%;
	height: 100%;
	border-radius: 12rpx;
}

.card-text {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-120rpx, 0);
	color: white;
	font-size: 60rpx;
}
</style>
