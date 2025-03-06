<template>
	<view>
		<uni-section title="" padding>
			<view style="margin-bottom: 16rpx">
				<text style="font-size: 40rpx">距离婚期</text>
				<text style="font-size: 45rpx; margin: 0 20rpx; border-bottom: 1rpx solid red; border-top: 1rpx solid red">2025年5月3日</text>
				<text style="font-size: 40rpx">还有</text>
			</view>
			<uni-countdown
				:font-size="30"
				:day="countdownDay"
				:hour="countdownHour"
				:minute="countdownMinute"
				:second="countdownSecond"
				:start="start"
				color="#FFFFFF"
				:show-colon="false"
				background-color="red"
				@timeup="handleTimeup"
			/>
		</uni-section>
		<view><uni-calendar :lunar="true" date="2025-05-03" :selected="[{ date: '2025-05-03', info: '婚礼' }]" /></view>
		<view style="margin-top: 16rpx">
			<button type="warn" @click="handleLocationClick">
				<uni-icons color="white" style="vertical-align: middle" type="location-filled" size="30"></uni-icons>
				婚礼地点
			</button>
		</view>
	</view>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from 'vue';

const weddingDate = new Date('2025/05/03');

const countdownDay = ref(100);
const countdownHour = ref(0);
const countdownMinute = ref(0);
const countdownSecond = ref(1);
const start = ref(false);

const calculateTimeDifference = (startDate, endDate) => {
	// 确保输入的是 Date 对象
	if (!(startDate instanceof Date) || !(endDate instanceof Date)) {
		throw new Error('Both arguments must be Date objects');
	}
	// 获取两个日期的时间戳（以毫秒为单位）
	const startTimestamp = startDate.getTime();
	const endTimestamp = endDate.getTime();
	// 计算时间差（以毫秒为单位）
	const timeDifference = endTimestamp - startTimestamp;
	// 定义时间单位的毫秒数
	const millisecondsPerSecond = 1000;
	const millisecondsPerMinute = millisecondsPerSecond * 60;
	const millisecondsPerHour = millisecondsPerMinute * 60;
	const millisecondsPerDay = millisecondsPerHour * 24;
	// 计算天数差
	const days = Math.floor(timeDifference / millisecondsPerDay);
	// 计算剩余的毫秒数
	let remainingMilliseconds = timeDifference % millisecondsPerDay;
	// 计算小时数差
	const hours = Math.floor(remainingMilliseconds / millisecondsPerHour);
	// 计算剩余的毫秒数
	remainingMilliseconds %= millisecondsPerHour;
	// 计算分钟数差
	const minutes = Math.floor(remainingMilliseconds / millisecondsPerMinute);
	// 计算剩余的毫秒数
	remainingMilliseconds %= millisecondsPerMinute;
	// 计算秒数差
	const seconds = Math.floor(remainingMilliseconds / millisecondsPerSecond);
	// 返回结果对象
	return {
		days: days,
		hours: hours,
		minutes: minutes,
		seconds: seconds
	};
};

// 点击婚礼地点
const handleLocationClick = () => {
	uni.navigateTo({
		url: '/pages/wedding/weddingLocation'
	});
};

// 时间到
const handleTimeup = () => {
	setTimeout(() => {
		uni.showToast({
			title: '时间到'
		});
	}, 0);
};

onMounted(() => {
	const now = new Date();
	if (weddingDate.getTime() < now.getTime()) {
		// 倒计时已经结束了
		countdownDay.value = 0;
		countdownHour.value = 0;
		countdownMinute.value = 0;
		countdownSecond.value = 0.5;
		start.value = true;
		return;
	}
	const result = calculateTimeDifference(now, weddingDate);
	countdownDay.value = result.days;
	countdownHour.value = result.hours;
	countdownMinute.value = result.minutes;
	countdownSecond.value = result.seconds;
	start.value = true;
});
</script>

<style></style>
