<template>
	<view style="height: 100vh; box-sizing: border-box; padding-bottom: constant(safe-area-inset-bottom); padding-bottom: env(safe-area-inset-bottom); background-color: #ffffff">
		<view>
			<uni-segmented-control :current="segmentedCurrent" :values="segmentedItems" style-type="text" active-color="red" @clickItem="onClickItem" />
		</view>
		<view>
			<map
				style="width: 100%; height: calc(100vh - 70rpx)"
				id="mapRef"
				:scale="scale"
				:latitude="latitude"
				:longitude="longitude"
				:min-scale="3"
				:max-scale="20"
				:enable-satellite="true"
				:enable-traffic="true"
				:enable-building="true"
				:show-location="true"
				:markers="covers"
			></map>
		</view>
	</view>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const mapCtx = ref();

// 目标经纬度
const latitudeTarget = 36.78395;
const longitudeTarget = 121.205125;

const latitude = ref(latitudeTarget);
const longitude = ref(longitudeTarget);

// 地图缩放程度
const scale = ref(6);

// 分段器 项
const segmentedItems = ['山东省', '海阳市', '方圆大酒店'];
const segmentedCurrent = ref(0);

// 地图标记点
const covers = ref([
	{
		id: 1,
		width: 42,
		height: 42,
		latitude: latitudeTarget,
		longitude: longitudeTarget,
		iconPath: '/static/wedding.png'
	}
]);

const onClickItem = ({ currentIndex }) => {
	if (currentIndex === 0) {
		// 省
		scale.value = 6;
	} else if (currentIndex === 1) {
		// 市
		scale.value = 8;
	} else if (currentIndex === 2) {
		// 精确地点
		scale.value = 15;
	}

	/* 中心点矫正 */
	// 支持真机端
	latitude.value = latitudeTarget;
	longitude.value = longitudeTarget;
	// 如下语句 没支持真机端
	if (!mapCtx.value) {
		console.error(mapCtx.value);
	}
	mapCtx.value?.moveToLocation({
		latitude: latitudeTarget,
		longitude: longitudeTarget
	});
};

onMounted(() => {
	mapCtx.value = uni.createMapContext('mapRef');

	// uni.getLocation({
	// 	type: 'gcj02',
	// 	success: function (res) {
	// 		console.log('当前位置的经度：' + res.longitude);
	// 		console.log('当前位置的纬度：' + res.latitude);
	// 	}
	// });
});
</script>

<style></style>
