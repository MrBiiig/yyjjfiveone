<template>
	<view class="canvas-box">
		<canvas
			type="webgl"
			:id="canvasId"
			:canvas-id="canvasId"
			:disable-scroll="true"
			style="width: 100%; height: 100%"
			@touchmove.prevent.stop="touchmove"
			@touchstart.prevent.stop="touchstart"
			@touchend.prevent.stop="touchend"
		></canvas>
	</view>
</template>

<script setup>
import { getCurrentInstance, ref, onMounted } from 'vue';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { createScopedThreejs } from 'threejs-miniprogram';
import { registerGLTFLoader } from '/libs/gltfLoader';
import { registerOrbitControls } from '/libs/OrbitControls';
import { registerDRACOLoader } from '/libs//DRACOLoader';

const instance = getCurrentInstance();

const canvasId = 'vrCanvas';

let THREE;

let canvas, camera, controls, material, texture, bigImg, skyBox, mouse, box, raycaster;
let renderer;
let scene;

const initThree = () => {
	// uni.showLoading({
	// 	title: '加载中...'
	// });

	const query = uni.createSelectorQuery().in(instance.proxy);
	query
		.select(`#${canvasId}`)
		.node()
		.exec((res) => {
			canvas = res[0].node;

			THREE = createScopedThreejs(canvas);
			registerOrbitControls(THREE);

			var renderer = new THREE.WebGLRenderer({
				canvas: canvas
			});

			renderer.setClearColor(0x000000);

			scene = new THREE.Scene();

			camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 1, 10);
			camera.position.set(0, 0, 5);
			scene.add(camera);

			const cube = new THREE.Mesh(
				new THREE.CubeGeometry(1, 1, 1),
				new THREE.MeshBasicMaterial({
					color: 0xff0000,
					wireframe: true
				})
			);
			scene.add(cube);

			// 渲染
			renderer.render(scene, camera);
		});
};

const touchmove = (e) => {
	console.log('touchmove', e);
};
const touchstart = (e) => {
	console.log('touchstart', e);
};
const touchend = (e) => {
	console.log('touchend', e);
};

onMounted(() => {
	initThree();
});
</script>

<style lang="scss">
.canvas-box {
	width: 100vw;
	height: 100vh;
	overflow: hidden;
}
</style>
