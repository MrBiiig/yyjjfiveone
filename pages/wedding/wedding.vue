<template>
	<!-- <view>
		<text style="font-family: cangeryuyangti-W03">仓耳渔阳体 W01</text>
	</view> -->
	<view
		style="
			height: 100vh;
			box-sizing: border-box;
			padding-bottom: constant(safe-area-inset-bottom);
			padding-bottom: env(safe-area-inset-bottom);
			background-image: linear-gradient(0deg, #ffe53b 0%, #ff2525 74%);
			padding: 24rpx;
		"
	>
		<view style="margin-bottom: 16rpx">
			<uni-icons color="#FFD700" type="calendar" size="26"></uni-icons>
			<text style="font-size: 40rpx; color: #ffffff; font-weight: bold">2025年5月3日</text>
		</view>
		<view style="margin-bottom: 32rpx">
			<uni-countdown
				:font-size="14"
				:day="countdownDay"
				:hour="countdownHour"
				:minute="countdownMinute"
				:second="countdownSecond"
				:start="start"
				color="#FFFFFF"
				:show-colon="false"
				@timeup="handleTimeup"
			/>
		</view>

		<view><uni-calendar :lunar="true" date="2025-05-03" :selected="[{ date: '2025-05-03', info: '婚礼' }]" /></view>

		<view style="margin-top: 64rpx">
			<button
				size="mini"
				style="width: 100%; color: #ffffff; background-color: #ff6347"
				@click="handleLocationClick"
			>
				<view style="display: flex; flex-direction: row; align-items: center; justify-content: center">
					<uni-icons color="#FFD700" type="location" size="20"></uni-icons>
					<text style="font-size: 32rpx">山东省海阳市方圆大酒店</text>
				</view>
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

<style>
.uni-countdown__splitor {
	color: #ffd700 !important;
}

.uni-calendar__content {
	background-color: rgba(255, 240, 245, 0.8) !important;
}
.uni-calendar-item--checked {
	background-color: #ffd700 !important;
}

.uni-calendar-item__weeks-box-circle {
	width: 0 !important;
	height: 0 !important;
	top: 0 !important;
	right: 19px !important;
}
.uni-calendar-item__weeks-box-circle::after {
	content: '♥';
	color: #ff6347;
}
</style>