<template>
	<view>
		<uni-section title="" padding>
			<view style="margin-bottom: 16rpx">
				<text style="font-size: 40rpx; color: #b22222">距离婚期</text>
				<text style="font-size: 50rpx; margin: 0 40rpx; color: #ffd700; font-weight: bold">2025年5月3日</text>
				<text style="font-size: 40rpx; color: #b22222">还有</text>
			</view>
			<view style="margin-bottom: 32rpx">
				<uni-countdown
					:font-size="24"
					:day="countdownDay"
					:hour="countdownHour"
					:minute="countdownMinute"
					:second="countdownSecond"
					:start="start"
					color="#FFFFFF"
					:show-colon="false"
					background-color="#FF4500"
					@timeup="handleTimeup"
				/>
			</view>
		</uni-section>
		<view><uni-calendar :lunar="true" date="2025-05-03" :selected="[{ date: '2025-05-03', info: '婚礼' }]" /></view>
		<view style="margin-top: 32rpx">
			<button style="color: #ffffff; background-color: #ff6347; border-color: #ffffff; border-width: 2px; border-style: solid" @click="handleLocationClick">
				<uni-icons color="#FFD700" style="vertical-align: middle" type="location-filled" size="30"></uni-icons>
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

<style>
.uni-calendar__content {
	background-color: #fff0f5 !important;
}
.uni-calendar-item--checked {
	background-color: #87cefa !important;
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
