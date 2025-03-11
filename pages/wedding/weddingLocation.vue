<template>
	<view
		style="
			height: 100vh;
			box-sizing: border-box;
			padding-bottom: constant(safe-area-inset-bottom);
			padding-bottom: env(safe-area-inset-bottom);
			background-color: #ffffff;
		"
	>
		<view>
			<uni-segmented-control
				:current="segmentedCurrent"
				:values="segmentedItems"
				style-type="text"
				active-color="red"
				@clickItem="onClickItem"
			/>
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
				:enable-traffic="false"
				:enable-building="true"
				:show-location="true"
				:markers="covers"
				:polyline="polyline"
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
const scale = ref(5);

// 分段器 项
const segmentedItems = ['山东省', '海阳市', '方圆大酒店'];
const segmentedCurrent = ref(null);

// 地图路径线分段颜色
const polylineColorList = [
	'#33A8FF',
	'#A8FF33',
	'#FFB733',
	'#33FFB7',
	'#B733FF',
	'#FF5733',
	'#33FF57',
	'#3357FF',
	'#FF33A8',
	'#33FFF5',
	'#F5FF33',
	'#FF8C33',
	'#33FF8C',
	'#8C33FF',
	'#FF3333'
];

// 地图标记点
const covers = ref([
	{
		id: 1,
		width: 48,
		height: 48,
		latitude: latitudeTarget,
		longitude: longitudeTarget,
		iconPath: '/static/corgi.png',
		callout: {
			content: '山东省海阳市方圆大酒店',
			/* ALWAYS or BYCLICK */
			display: 'BYCLICK',
			fontSize: 13,
			color: '#ffffff',
			bgColor: '#FF3333cc',
			borderRadius: 8,
			padding: 4
		}
	}
]);

const polyline = ref([]);

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
	moveToLocation({ latitude: latitudeTarget, longitude: longitudeTarget });
};

/**
 * 移动地图中心点到指定经纬度
 */
const moveToLocation = ({ latitude: la, longitude: lo }) => {
	// 支持真机端
	latitude.value = la;
	longitude.value = lo;
	// 如下语句 没支持真机端
	if (!mapCtx.value) {
		console.error(mapCtx.value);
	}
	mapCtx.value?.moveToLocation({
		latitude: la,
		longitude: lo
	});
};
// 根据地图路径线起点终点 计算共有几个点的经纬度
const generateCoordinates = (start, end) => {
	const coordinates = [];
	const steps = polylineColorList.length; // We need 8 points including start and end, so 6 intermediate points

	coordinates.push(start);

	const latStep = (end.latitude - start.latitude) / (steps + 1);
	const lonStep = (end.longitude - start.longitude) / (steps + 1);

	for (let i = 1; i <= steps; i++) {
		const latitude = start.latitude + latStep * i;
		const longitude = start.longitude + lonStep * i;
		coordinates.push({ latitude, longitude });
	}

	coordinates.push(end);

	return coordinates;
};

onMounted(() => {
	mapCtx.value = uni.createMapContext('mapRef');
	uni.getLocation({
		type: 'gcj02',
		success: function (res) {
			console.log(res);

			setTimeout(() => {
				moveToLocation({ latitude: res.latitude, longitude: res.longitude });
			}, 200);
			polyline.value = [
				{
					points: generateCoordinates(
						{ latitude: res.latitude, longitude: res.longitude },
						{ latitude: latitudeTarget, longitude: longitudeTarget }
					),
					width: 12,
					// color: '#FFC0CB',
					colorList: polylineColorList,
					arrowLine: true,
					arrowIconPath: '/static/twi-heart.png',
					borderColor: '#ffffff',
					borderWidth: 2
				}
			];
		},
		fail: function (err) {
			console.error(err);
		}
	});
});
</script>

<style></style>
