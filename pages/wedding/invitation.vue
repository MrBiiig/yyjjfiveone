<template>
	<scroll-view scroll-y="true" class="invitation-page">
		<view style="background-color: #e6c9a8; width: 100%; height: 26rem; position: relative">
			<view class="header-img-background-container">
				<view class="header-img-background-mask">
					<view class="header-img-background"></view>
				</view>
			</view>
			<view class="header-img-container">
				<view class="header-img-mask">
					<view class="header-img-wrapper">
						<image src="/static/invitation/header.jpg" mode="widthFix" class="header-img"></image>
					</view>
				</view>
			</view>
			<text
				style="
					font-family: seaside-resort-nf;
					color: white;
					font-size: 2rem;
					position: absolute;
					left: 1rem;
					top: 8rem;
					border-radius: 6px;
					padding: 0.05rem 0.05rem;
					background-color: #e6c9a888;
				"
			>
				WEDDING
			</text>
			<text style="position: absolute; left: 3rem; top: 12rem">
				<text style="font-size: 1.3rem; font-family: none; color: white">喜+喜=</text>
				<text style="font-size: 1.3rem; font-family: none; color: white">囍</text>
			</text>

			<text style="position: absolute; left: 3rem; top: 16rem">
				<text style="font-size: 1.3rem; font-family: MicrosoftYaHei, seaside-resort-nf; color: white">
					WEDDING时间为媒，青春为聘
				</text>
			</text>
			<text style="position: absolute; left: 3rem; top: 18rem">
				<text style="font-size: 1.3rem; color: white">时间为媒，青春为聘11</text>
			</text>
		</view>
	</scroll-view>
</template>

<script setup>
import { ref, onMounted } from 'vue';

onMounted(() => {});
</script>

<style>
/* 页面总容器样式 */
.invitation-page {
	height: 100vh;
	box-sizing: border-box;
	padding-bottom: constant(safe-area-inset-bottom);
	padding-bottom: env(safe-area-inset-bottom);
	background-color: white;
}

/* 顶部图片样式 */
.header-img-background-container {
	position: absolute;
	left: 8.5rem;
	top: calc(2.3rem - 0.3rem);
	width: calc(14rem + 0.5rem);
	height: calc(20rem + 0.7rem);
	transform: rotate(0deg);
}
.header-img-background-mask {
	width: 100%;
	height: 100%;
	-webkit-mask-box-image-source: url('/static/invitation/header-mask.png');
	-webkit-mask-box-image-slice: 0 fill;
	border-radius: 0rem;
}
.header-img-background {
	width: 100%;
	height: 100%;
	background-color: white;
}

.header-img-container {
	position: absolute;
	left: 8.5rem;
	top: 2.3rem;
	width: 14rem;
	height: 20rem;
	transform: rotate(0deg);
}
.header-img-mask {
	width: 100%;
	height: 100%;
	-webkit-mask-box-image-source: url('/static/invitation/header-mask.png');
	-webkit-mask-box-image-slice: 0 fill;
	border-radius: 0rem;
}
.header-img-wrapper {
	width: 100%;
	height: 100%;
}
.header-img {
	width: 100%;
	height: 100%;
}
</style>
