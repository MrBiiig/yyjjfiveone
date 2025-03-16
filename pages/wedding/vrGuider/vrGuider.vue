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
		<!-- 
			@touchmove.prevent.stop="touchmove"
			@touchstart.prevent.stop="touchstart"
			@touchend.prevent.stop="touchend"
			 -->
	</view>
</template>

<script setup>
import { getCurrentInstance, ref, onMounted } from 'vue';
import { createScopedThreejs } from 'threejs-miniprogram';
import { registerGLTFLoader } from '/libs/gltfLoader';
import { registerOrbitControls } from '/libs/OrbitControls';
import { registerDRACOLoader } from '/libs//DRACOLoader';

const instance = getCurrentInstance();

const canvasId = 'vrCanvas';

let THREE;
let requestId;
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

			renderer = new THREE.WebGLRenderer({
				canvas: canvas
			});

			renderer.setClearColor(0x000000);

			scene = new THREE.Scene();

			camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 1, 10);
			camera.position.set(0, 0, 5);
			// scene.add(camera);
			controls = new THREE.OrbitControls(camera, canvas);
			controls.target = new THREE.Vector3(0, 0, 0);
			controls.minDistance = 2; // 相机最近
			controls.maxDistance = 500; // 相机最远
			controls.autoRotate = false; // 图片自动旋转
			controls.enableDamping = true; // 使动画循环使用时阻尼或自转 意思是否有惯性
			controls.enablePan = false; // 是否开启右键拖拽
			controls.autoRotateSpeed = 0.5; // 阻尼系数

			/*  */
			const materials = [];
			//根据左右上下前后的顺序构建六个面的材质集
			const texture_left = new THREE.TextureLoader().load(
				'https://cdn.huodao.hk/upload_img/20220620/cebf6fbcafdf4f5c945e0881418e34ec.jpg'
			);
			materials.push(new THREE.MeshBasicMaterial({ map: texture_left }));

			const texture_right = new THREE.TextureLoader().load(
				'https://cdn.huodao.hk/upload_img/20220620/3e532822bd445485d27677ca55a79b10.jpg'
			);
			materials.push(new THREE.MeshBasicMaterial({ map: texture_right }));

			const texture_top = new THREE.TextureLoader().load(
				'https://cdn.huodao.hk/upload_img/20220620/273081d1896fc66866842543090916d3.jpg'
			);
			materials.push(new THREE.MeshBasicMaterial({ map: texture_top }));

			const texture_bottom = new THREE.TextureLoader().load(
				'https://cdn.huodao.hk/upload_img/20220620/8747f61fd2215aa748dd2afb6dce3822.jpg'
			);
			materials.push(new THREE.MeshBasicMaterial({ map: texture_bottom }));

			const texture_front = new THREE.TextureLoader().load(
				'https://cdn.huodao.hk/upload_img/20220620/722d2bf88f6087800ddf116511b51e73.jpg'
			);
			materials.push(new THREE.MeshBasicMaterial({ map: texture_front }));

			const texture_back = new THREE.TextureLoader().load(
				'https://cdn.huodao.hk/upload_img/20220620/c34262935511d61b2e9f456b689f5c1c.jpg'
			);
			materials.push(new THREE.MeshBasicMaterial({ map: texture_back }));

			box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), materials);
			box.geometry.scale(1, 1, -1);
			scene?.add(box);
			/*  */

			// const cube = new THREE.Mesh(
			// 	new THREE.CubeGeometry(1, 1, 1),
			// 	new THREE.MeshBasicMaterial({
			// 		color: 0xff0000,
			// 		wireframe: true
			// 	})
			// );
			// scene.add(cube);

			// 渲染
			const render = () => {
				renderer.render(scene, camera);
				controls.update();
				requestId = canvas.requestAnimationFrame(render);
			};
			render();
		});
};

const touchmove = (e) => {
	console.log('touchmove', e);
	controls.onTouchMove(e);
};
const touchstart = (e) => {
	console.log('touchstart', e);
	controls.onTouchStart(e);
};
const touchend = (e) => {
	console.log('touchend', e);
	controls.onTouchEnd(e);
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
