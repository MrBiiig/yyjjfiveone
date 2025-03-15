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

const initControls = (canvas) => {
	controls = new THREE.OrbitControls(camera, canvas);
	controls.target = new THREE.Vector3(0, 0, 0);
	controls.minDistance = 18; // 相机最近
	controls.maxDistance = 500; // 相机最远
	controls.autoRotate = false; // 图片自动旋转
	controls.enableDamping = true; // 使动画循环使用时阻尼或自转 意思是否有惯性
	controls.enablePan = false; // 是否开启右键拖拽
	controls.autoRotateSpeed = 0.5; // 阻尼系数
};

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

			/*  */

			/*  */
			var renderer = new THREE.WebGLRenderer({
				canvas: canvas
			});
			// 创建场景
			scene = new THREE.Scene();

			// 创建相机
			camera = new THREE.PerspectiveCamera(80, canvas.width / canvas.height, 1, 10000);
			camera.position.set(5, 0, 0);
			camera.lookAt(new THREE.Vector3(0, 0, 0)); //让相机指向原点

			// 创建轨道控制器
			initControls(canvas);

			const materials = [];
			//根据左右上下前后的顺序构建六个面的材质集
			const texture_left = new THREE.TextureLoader().load(
				'https://cdn.huodao.hk/upload_img/20220620/3e532822bd445485d27677ca55a79b10.jpg'
			);
			materials.push(new THREE.MeshBasicMaterial({ map: texture_left }));

			const texture_right = new THREE.TextureLoader().load(
				'https://cdn.huodao.hk/upload_img/20220620/cebf6fbcafdf4f5c945e0881418e34ec.jpg'
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
			// box.geometry.scale(1, 1, -1);
			scene?.add(box);

			/* // 添加材质
			material = new THREE.MeshBasicMaterial();
			// 创建纹理贴图
			texture = new THREE.TextureLoader().load(bigImg);
			material.map = texture;

			// 创建网格对象
			skyBox = new THREE.Mesh(new THREE.SphereBufferGeometry(100, 100, 100), material);
			skyBox.geometry.scale(1, 1, -1); 
			scene.add(skyBox);
			*/

			// 显示坐标光线
			const axisHelper = new THREE.AxesHelper(600); // 显示光线（红色代表X轴，绿色代表Y轴，蓝色代表Z轴）
			// 添加到场景中去
			scene.add(axisHelper);

			const loopRender = () => {
				canvas?.requestAnimationFrame(loopRender);
				renderer?.render(scene, camera);
			};

			loopRender();
			/*  */

			/*  */

			/*  */
			// // 场景
			// scene = new THREE.Scene();
			// //镜头
			// camera = new THREE.PerspectiveCamera(90, canvas.width / canvas.height, 0.1, 100);
			// camera?.position.set(0, 0, 0.01);
			// //渲染器
			// renderer = new THREE.WebGLRenderer({
			// 	canvas
			// });
			// renderer?.setSize();
			// //镜头控制器
			// const controls = new THREE.OrbitControls(camera, renderer?.domElement);

			// //一会儿在这里添加3D物体

			// const materials = [];
			// //根据左右上下前后的顺序构建六个面的材质集
			// const texture_left = new THREE.TextureLoader().load(
			// 	'https://cdn.huodao.hk/upload_img/20220620/3e532822bd445485d27677ca55a79b10.jpg'
			// );
			// materials.push(new THREE.MeshBasicMaterial({ map: texture_left }));

			// const texture_right = new THREE.TextureLoader().load(
			// 	'https://cdn.huodao.hk/upload_img/20220620/cebf6fbcafdf4f5c945e0881418e34ec.jpg'
			// );
			// materials.push(new THREE.MeshBasicMaterial({ map: texture_right }));

			// const texture_top = new THREE.TextureLoader().load(
			// 	'https://cdn.huodao.hk/upload_img/20220620/273081d1896fc66866842543090916d3.jpg'
			// );
			// materials.push(new THREE.MeshBasicMaterial({ map: texture_top }));

			// const texture_bottom = new THREE.TextureLoader().load(
			// 	'https://cdn.huodao.hk/upload_img/20220620/8747f61fd2215aa748dd2afb6dce3822.jpg'
			// );
			// materials.push(new THREE.MeshBasicMaterial({ map: texture_bottom }));

			// const texture_front = new THREE.TextureLoader().load(
			// 	'https://cdn.huodao.hk/upload_img/20220620/722d2bf88f6087800ddf116511b51e73.jpg'
			// );
			// materials.push(new THREE.MeshBasicMaterial({ map: texture_front }));

			// const texture_back = new THREE.TextureLoader().load(
			// 	'https://cdn.huodao.hk/upload_img/20220620/c34262935511d61b2e9f456b689f5c1c.jpg'
			// );
			// materials.push(new THREE.MeshBasicMaterial({ map: texture_back }));

			// const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), materials);
			// scene?.add(box);

			// const loopRender = () => {
			// 	canvas?.requestAnimationFrame(loopRender);
			// 	renderer?.render(scene, camera);
			// };

			// loopRender();
		});
};

const touchmove = (e) => {
	console.log('touchmove', e);

	// 红色代表X轴，绿色代表Y轴，蓝色代表Z轴
	mouse = new THREE.Vector3(); // 三维坐标对象
	// 屏幕坐标到标准化设备坐标(Normalized Device Coordinates, NDC)转换
	mouse.set(
		(e.touches[0].clientX / canvas.width) * 2 - 1,
		-(e.touches[0].clientY / canvas.height) * 2 + 1,
		0.5
	);
	mouse.unproject(camera);

	raycaster = new THREE.Raycaster(camera.position, mouse.sub(camera.position).normalize()); // 投手
	var intersects = raycaster.intersectObjects(scene.children);

	if (intersects.length > 0) {
		var selected = intersects[0]; // 取第一个物体
		console.log('x坐标:' + selected.point.x);
		console.log('y坐标:' + selected.point.y);
		console.log('z坐标:' + selected.point.z);

		// var direction = new THREE.Vector3();
		// camera.getWorldDirection( direction );
		// camera.position.add( direction );
		// camera.position.add(direction.multiplyScalar(selected.point.x, selected.point.y, selected.point.z) );
		// camera.lookAt(new THREE.Vector3(selected.point.x, selected.point.y, selected.point.z)); //让相机指向原点
		camera.position.set(selected.point.x, selected.point.y, selected.point.z);

		// tweenCamera(selected.point, selected.point);
	}
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
