<template>
	<scroll-view scroll-y="true" class="invitation-page">
		<!-- 顶部图片 -->
		<view class="header-img-block bgcolor">
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
				class="fix-text-overlap-img"
				style="
					font-family: seaside-resort-nf;
					color: white;
					font-size: 1.8rem;
					position: absolute;
					left: 0.5rem;
					top: 8rem;
				"
			>
				WEDDING
			</text>
			<text class="fix-text-overlap-img" style="position: absolute; left: 3rem; top: 12rem">
				<text style="font-size: 1rem; font-family: LXGWWenKaiMono-Medium; color: white; letter-spacing: 0.1rem"
					>喜+喜=囍</text
				>
			</text>

			<text class="fix-text-overlap-img" style="position: absolute; left: 1.5rem; top: 14rem">
				<text
					style="font-size: 0.8rem; font-family: TsangerYuYangT_W04_W04; color: white; letter-spacing: 0.1rem"
					>时间为媒，青春为聘</text
				>
			</text>
			<text class="fix-text-overlap-img" style="position: absolute; left: 3rem; top: 16rem">
				<text style="font-size: 1rem; font-family: LXGWWenKaiMono-Medium; color: white; letter-spacing: 0.1rem"
					>圆满礼成</text
				>
			</text>
		</view>
		<!--  -->
		<view class="chapter-header">
			<image style="width: 3.5rem; height: 3.5rem" :src="circleSvg"></image>
		</view>
	</scroll-view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import circleSvg from '/static/invitation/circle.svg';

onMounted(() => {
	console.log(circleSvg);
});
</script>

<style lang="scss">
/* 页面总容器样式 */
.invitation-page {
	height: 100vh;
	box-sizing: border-box;
	padding-bottom: constant(safe-area-inset-bottom);
	padding-bottom: env(safe-area-inset-bottom);
	background-color: white;
}

/* 顶部图片区域 */
.header-img-block {
	/* 顶部图片变量 */
	$bgcolor: #dbbc9b;
	$bgcolor-opacity: transparentize($bgcolor, 0.4);
	$header-img-top: 2em;
	$header-img-left: 8.5rem;
	$header-img-width: 14rem;
	$header-img-height: 20rem;

	width: 100%;
	height: 25rem;
	position: relative;

	// 该区域背景色
	.bgcolor,
	&.bgcolor {
		background-color: $bgcolor;
	}

	// 处理文字与图片重合的样式
	.fix-text-overlap-img {
		background-color: $bgcolor-opacity;
		border-radius: 6px;
		padding: 0.05rem 0.4rem;
	}

	.header-img-background-container {
		position: absolute;
		left: $header-img-left;
		top: calc($header-img-top - 0.3rem);
		width: calc($header-img-width + 0.5rem);
		height: calc($header-img-height + 0.7rem);
		transform: rotate(0deg);
		.header-img-background-mask {
			width: 100%;
			height: 100%;
			-webkit-mask-box-image-source: url('/static/invitation/header-mask.png');
			-webkit-mask-box-image-slice: 0 fill;
			border-radius: 0rem;
			.header-img-background {
				width: 100%;
				height: 100%;
				background-color: white;
			}
		}
	}
	.header-img-container {
		position: absolute;
		left: $header-img-left;
		top: $header-img-top;
		width: $header-img-width;
		height: $header-img-height;
		transform: rotate(0deg);
		.header-img-mask {
			width: 100%;
			height: 100%;
			-webkit-mask-box-image-source: url('/static/invitation/header-mask.png');
			-webkit-mask-box-image-slice: 0 fill;
			border-radius: 0rem;
			.header-img-wrapper {
				width: 100%;
				height: 100%;
				.header-img {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}
/* 章节头 标题区域 */
.chapter-header {
	width: 100%;
	position: relative;
}
</style>
