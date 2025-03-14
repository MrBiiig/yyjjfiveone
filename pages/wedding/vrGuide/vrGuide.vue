<template>
	<view>
		<view class="canvas-box">
			<canvas
				type="webgl"
				:id="canvasId"
				:canvas-id="canvasId"
				:style="{ width: '100%', height: '100%' }"
				:disable-scroll="true"
				@touchmove.prevent.stop="touchmove"
				@touchstart.prevent.stop="touchstart"
				@touchend.prevent.stop="touchend"
				@error="canvasErrorCallback"
			></canvas>
		</view>
	</view>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import { onLoad, onReady, onUnload } from '@dcloudio/uni-app';
import ImageAr from './ImageAr.js';

const canvasId = 'canvas_id';

const images = [
	'https://cdn.huodao.hk/upload_img/20220620/c34262935511d61b2e9f456b689f5c1c.jpg', // 后
	'https://cdn.huodao.hk/upload_img/20220620/722d2bf88f6087800ddf116511b51e73.jpg', // 前
	'https://cdn.huodao.hk/upload_img/20220620/273081d1896fc66866842543090916d3.jpg', // 上
	'https://cdn.huodao.hk/upload_img/20220620/8747f61fd2215aa748dd2afb6dce3822.jpg', // 下
	'https://cdn.huodao.hk/upload_img/20220620/3e532822bd445485d27677ca55a79b10.jpg', // 左
	'https://cdn.huodao.hk/upload_img/20220620/cebf6fbcafdf4f5c945e0881418e34ec.jpg' // 右
];

const imagebox = ref(null);
const inited = ref(false);

const engine = ref(null);

/**
 * 初始化G3D
 */
const setG3D = () => {
	uni.showLoading({
		title: '加载中...'
	});
	let selector = uni.createSelectorQuery().select(`#${canvasId}`);
	selector.node().exec((res) => {
		const canvas = res[0].node;
		imagebox.value = new ImageAr(canvas, images, {
			textureComplete: (e) => {
				uni.hideLoading();
				inited.value = true;
			}
		});
	});
};

const touchmove = (e) => {
	if (!inited.value) return;
	imagebox.value.touchmove(e);
};
const touchstart = (e) => {
	imagebox.value.touchstart(e);
};
const touchend = (e) => {
	if (!inited.value) return;
	imagebox.value.touchend(e);
};

// 停止轮询渲染
const cancelAnimationFrame = () => {
	if (imagebox.value) {
		imagebox.value.cancelAnimationFrame();
	}
};
// 异常处理
const canvasErrorCallback = (e) => {
	console.error('canvas 操作异常', e.detail.errMsg);
};

onLoad(() => {
	nextTick(() => {
		setG3D();
	});
});
onReady(() => {});
onUnload(() => {
	cancelAnimationFrame();
});
</script>

<style lang="scss" scoped>
.canvas-box {
	width: 100vw;
	height: 100vh;
	overflow: hidden;
}
</style>
