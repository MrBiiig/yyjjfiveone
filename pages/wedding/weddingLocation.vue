<template>
	<view class="uni-padding-wrap uni-common-mt">
		<uni-segmented-control :current="segmentedCurrent" :values="segmentedItems" style-type="text" active-color="#FF4500" @clickItem="onClickItem" />
	</view>
	<view>
		<map
			style="width: 100%; height: 900rpx"
			id="mapRef"
			:scale="scale"
			:min-scale="3"
			:max-scale="20"
			:enable-satellite="true"
			:enable-traffic="true"
			:enable-building="true"
			:show-location="true"
			:markers="covers"
		></map>
	</view>
	<view style="margin-top: 16rpx">
		<text style="font-size: 50rpx; margin: 0 40rpx; color: #ff4500; font-weight: bold">山东省海阳市方圆大酒店</text>
	</view>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const mapCtx = ref(uni.createMapContext('mapRef'));

// 目标经纬度
const latitudeTarget = 36.78395;
const longitudeTarget = 121.205125;

// 地图缩放程度
const scale = ref(16);

// 分段器 项
const segmentedItems = ['山东省', '海阳市', '方圆大酒店'];
const segmentedCurrent = ref(0);

// 地图标记点
const covers = ref([
	{
		id: 1,
		width: 24,
		height: 36,
		latitude: latitudeTarget,
		longitude: longitudeTarget
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
		scale.value = 16;
	}
	// 中心点矫正
	mapCtx.value?.moveToLocation({
		latitude: latitudeTarget,
		longitude: longitudeTarget
	});
};

onMounted(() => {
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