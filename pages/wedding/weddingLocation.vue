<template>
	<view>
		<map
			style="width: 100%; height: 900rpx"
			:min-scale="3"
			:max-scale="20"
			:enable-satellite="true"
			:enable-traffic="true"
			:enable-building="true"
			:show-location="true"
			:latitude="latitude"
			:longitude="longitude"
			:markers="covers"
		></map>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const latitude = ref(36.783954);
const longitude = ref(121.205125);

const covers = ref([
	{
		id: 1,
		width: 24,
		height: 36,
		latitude: 36.783954,
		longitude: 121.205125
	}
]);
</script>

<style></style>
