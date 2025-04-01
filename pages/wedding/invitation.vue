<template>
	<scroll-view scroll-y="true" class="invitation-page">
		<!-- 顶部图片 -->
		<view class="header-img-block bgcolor">
			<view class="header-img-background-container">
				<view class="header-img-background-mask">
					<view class="header-img-background"></view>
				</view>
			</view>
			<view class="header-img-container">
				<view class="header-img-mask">
					<view class="header-img-wrapper">
						<image
							src="/static/invitation/header.jpg"
							mode="widthFix"
							class="header-img"
						></image>
					</view>
				</view>
			</view>
			<text
				class="fix-text-overlap-img"
				style="
					font-family: seaside-resort-nf;
					color: white;
					font-size: 1.8rem;
					position: absolute;
					left: 0.5rem;
					top: 8rem;
				"
			>
				WEDDING
			</text>
			<text class="fix-text-overlap-img" style="position: absolute; left: 3rem; top: 12rem">
				<text
					style="
						font-size: 1.1rem;
						font-family: LXGWWenKaiMono-Medium;
						color: white;
						letter-spacing: 0.1rem;
					"
				>
					喜+喜=囍
				</text>
			</text>

			<text class="fix-text-overlap-img" style="position: absolute; left: 1.5rem; top: 14rem">
				<text
					style="
						font-size: 0.9rem;
						font-family: TsangerYuYangT_W04_W04;
						color: white;
						letter-spacing: 0.1rem;
					"
				>
					时间为媒，青春为聘
				</text>
			</text>
			<text class="fix-text-overlap-img" style="position: absolute; left: 3rem; top: 16rem">
				<text
					style="
						font-size: 1.1rem;
						font-family: LXGWWenKaiMono-Medium;
						color: white;
						letter-spacing: 0.1rem;
					"
				>
					圆满礼成
				</text>
			</text>
		</view>
		<!-- 章节标题 -->
		<view class="chapter-header circle-on-left">
			<image class="circle-style" :src="circleSvg"></image>
			<view class="header-title-wrapper">
				<view class="ch-header-title-wrapper">
					<text>初见 即倾心</text>
				</view>
				<view class="en-header-title-wrapper">
					<text>/ Love story about us /</text>
				</view>
			</view>
		</view>
		<!-- 照片展示区 - 1 -->
		<view style="width: 100%">
			<view style="background-color: #dbbc9b; width: 85%; height: 15rem; margin: auto"></view>
			<view
				style="
					width: 85%;
					margin-left: auto;
					margin-right: auto;
					margin-top: 1rem;
					display: flex;
					flex-direction: row;
				"
			>
				<view style="flex: 1; height: 15rem; position: relative">
					<view
						style="
							width: 6rem;
							height: 9rem;
							position: absolute;
							top: 0;
							left: 0;
							background-color: #dbbcff;
						"
					></view>
					<view
						style="
							width: 7rem;
							height: 11rem;
							position: absolute;
							top: 1rem;
							left: 1rem;
							background-color: #ffbc9b;
						"
					></view>
				</view>
				<view style="flex: 1; height: 15rem; background-color: #db229b"></view>
			</view>
		</view>
		<view style="width: 100%">
			<view style="width: 85%; margin: auto">
				<view style="font-family: LXGWWenKaiMono-Regular">
					<text>2025.05.03</text>
				</view>
				<view style="font-family: LXGWWenKaiMono-Regular">
					<text>/</text>
				</view>
				<view style="font-family: YsabeauInfant-MediumItalic">
					<text>When you first meet someone,</text>
				</view>
				<view style="font-family: YsabeauInfant-MediumItalic">
					<text>you fall in love</text>
				</view>
			</view>
			<view
				style="
					width: 85%;
					margin: auto;
					margin-top: 1rem;
					display: flex;
					flex-direction: row;
				"
			>
				<view style="flex: 1rem 1rem 0; width: 5.2rem; height: 7.35rem">
					<view style="width: 100%; height: 100%">
						<image style="width: 100%; height: 100%" :src="verticalLineSvg"></image>
					</view>
				</view>
				<view
					style="
						flex: auto;
						height: 7.35rem;
						display: flex;
						flex-direction: column;
						justify-content: center;
						font-size: 0.8rem;
						font-family: LXGWWenKaiMono-Medium;
						letter-spacing: 0;
						line-height: 2;
					"
				>
					<view>
						<text>兴许是觉得风和日丽，天气晴好，</text>
					</view>
					<view>
						<text>想要写些悄悄话给你</text>
					</view>
					<view>
						<text>又不好意思让大海知道。</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 章节标题 -->
		<view class="chapter-header circle-on-right">
			<image class="circle-style" :src="circleSvg"></image>
			<view class="header-title-wrapper">
				<view class="ch-header-title-wrapper">
					<text>眉眼弯弯 星河皆你</text>
				</view>
				<view class="en-header-title-wrapper">
					<text>/ Love story about us /</text>
				</view>
			</view>
		</view>
		<view style="width: 100%">
			<view style="width: 85%; margin: auto; display: flex; justify-content: space-between">
				<view style="flex: 1; padding-right: 0.3rem">
					<view style="height: 14rem; background-color: #db229b"></view>
					<view>
						<view style="font-size: 1.3rem; font-family: YsabeauInfant-MediumItalic">
							<text>BRIDE</text>
						</view>
						<view style="font-size: 0.9rem; font-family: LXGWWenKaiMono-Regular">
							<text>/</text>
						</view>
						<view style="font-size: 0.9rem; font-family: LXGWWenKaiMono-Regular">
							<text>贾银银</text>
						</view>
					</view>
				</view>
				<view style="flex: 1; padding-left: 0.3rem">
					<view style="height: 14rem; background-color: #dbbc9b"></view>
					<view>
						<view style="font-size: 1.3rem; font-family: YsabeauInfant-MediumItalic">
							<text>GROOM</text>
						</view>
						<view style="font-size: 0.9rem; font-family: LXGWWenKaiMono-Regular">
							<text>/</text>
						</view>
						<view style="font-size: 0.9rem; font-family: LXGWWenKaiMono-Regular">
							<text>鞠文大</text>
						</view>
					</view>
				</view>
			</view>
			<view style="width: 85%; margin: auto; margin-top: 3rem; min-height: 10rem">
				<view style="position: relative">
					<view
						style="
							width: 20rem;
							height: 10rem;
							background-color: #dbbcff;
							position: absolute;
							left: 0.6rem;
							top: 0.6rem;
						"
					></view>
					<view
						style="
							width: 20rem;
							height: 10rem;
							background-color: red;
							position: absolute;
						"
					></view>
				</view>
			</view>
			<view style="width: 85%; margin: auto; margin-top: 1rem">
				<view
					style="
						text-align: right;
						font-size: 0.8rem;
						font-family: LXGWWenKaiMono-Medium;
						letter-spacing: 0;
						line-height: 2;
					"
				>
					<view>
						<text>一切亘古不变的都是爱你的痕迹，</text>
					</view>
					<view>
						<text>比如月亮阴晴圆缺，</text>
					</view>
					<view>
						<text>比如太阳从东方升起，</text>
					</view>
					<view>
						<text>比如牛顿第一定律，</text>
					</view>
					<view>
						<text>比如我爱你。</text>
					</view>
				</view>

				<view style="width: 5.2rem; height: 5.35rem; margin-left: 3rem">
					<view style="width: 100%; height: 100%">
						<image style="width: 100%; height: 100%" :src="verticalLineSvg"></image>
					</view>
				</view>
			</view>
		</view>
		<!-- 章节标题 -->
		<view class="chapter-header circle-on-left">
			<image class="circle-style" :src="circleSvg"></image>
			<view class="header-title-wrapper">
				<view class="ch-header-title-wrapper">
					<text>伴你长久 长长久久</text>
				</view>
				<view class="en-header-title-wrapper">
					<text>/ Love story about us /</text>
				</view>
			</view>
		</view>
		<view>
			<view style="width: 85%; margin: auto">
				<view style="width: 100%; height: 12rem; position: relative">
					<view
						style="
							width: 20rem;
							height: 10rem;
							background-color: #db229b;
							position: absolute;
							left: 0.6rem;
							top: 0.6rem;
						"
					></view>
					<view
						style="
							width: 20rem;
							height: 10rem;
							background-color: red;
							position: relative;
						"
					></view>
				</view>
			</view>
			<view style="width: 85%; margin: auto; display: flex; flex-direction: row">
				<view style="flex: 4; padding-right: 0.3rem">
					<view style="width: 100%; height: 15rem; background-color: #db229b"></view>
				</view>
				<view style="flex: 3; padding-left: 0.3rem">
					<view style="width: 100%; height: 15rem; background-color: #dbbc9b"></view>
				</view>
			</view>
			<view style="width: 85%; margin: auto; margin-top: 1rem">
				<view
					style="
						text-align: right;
						font-size: 0.8rem;
						font-family: LXGWWenKaiMono-Medium;
						letter-spacing: 0;
						line-height: 2;
					"
				>
					<view>
						<text>那就折一些阔些的荷叶，</text>
					</view>
					<view>
						<text>包一片月光回去，</text>
					</view>
					<view>
						<text>回去夹在唐诗里扁扁的，像压过的相思。</text>
					</view>
					<view style="margin-top: 1rem">
						<text>我和你就像两个小孩子，</text>
					</view>
					<view>
						<text>围着一个神秘的果酱罐，</text>
					</view>
					<view>
						<text>一点一点地尝它，</text>
					</view>
					<view>
						<text>看看里面有多少甜。</text>
					</view>
				</view>
			</view>
			<view style="width: 85%; margin: auto; margin-top: 2rem">
				<view class="wedding-date">
					<view class="calendar-wrapper">
						<view class="calendar">
							<view class="year-month-row">
								<text class="year-num">2025</text>
								<text class="month-text">
									<text class="month-num">5</text>
									<text class="month-label">月</text>
								</text>
							</view>
							<view class="week-row">
								<view class="bgcolor-wrapper">
									<view
										v-for="(week, idx) in [
											'一',
											'二',
											'三',
											'四',
											'五',
											'六',
											'日'
										]"
										:key="idx"
										class="week-item"
									>
										<text>{{ week }}</text>
									</view>
								</view>
							</view>
							<view class="day-area">
								<view
									v-for="(dayLine, lineIdx) in [
										[null, null, null, 1, 2, 3, 4],
										[5, 6, 7, 8, 9, 10, 11],
										[12, 13, 14, 15, 16, 17, 18],
										[19, 20, 21, 22, 23, 24, 25],
										[26, 27, 28, 29, 30, 31]
									]"
									:key="lineIdx"
									class="day-line"
								>
									<view v-for="(day, idx) in dayLine" :key="idx" class="day-item">
										<uni-icons
											style="
												position: absolute;
												left: 50%;
												top: 50%;
												transform: translate(-50%, -50%);
											"
											:size="'1.3rem'"
											v-if="day === 3"
											type="heart-filled"
											color="rgb(184, 175, 160)"
										></uni-icons>
										<text
											:style="{ color: day === 3 ? 'white' : 'inherit' }"
											style="position: relative"
										>
											{{ day }}
										</text>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="countdown-wrapper">
						<view class="countdown-item">
							<view class="num">
								<text>{{ countdownData?.day }}</text>
							</view>
							<view class="label">
								<text>天</text>
							</view>
						</view>
						<view class="countdown-item">
							<view class="num">
								<text>{{ countdownData?.hour }}</text>
							</view>
							<view class="label">
								<text>时</text>
							</view>
						</view>
						<view class="countdown-item">
							<view class="num">
								<text>{{ countdownData?.minute }}</text>
							</view>
							<view class="label">
								<text>分</text>
							</view>
						</view>
						<view class="countdown-item">
							<view class="num">
								<text>{{ countdownData?.second }}</text>
							</view>
							<view class="label">
								<text>秒</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view
			style="
				margin-top: 2rem;
				text-align: center;
				font-family: LXGWWenKaiMono-Regular;
				font-size: 0.9rem;
			"
		>
			<view>
				<text>2025年5月3日 星期六</text>
			</view>
			<view>
				<text>农历二月廿四 12:00PM</text>
			</view>
		</view>
	</scroll-view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import circleSvg from '/static/invitation/circle.svg';
import verticalLineSvg from '/static/invitation/vertical-line.svg';

const countdownData = ref({
	day: '00',
	hour: '00',
	minute: '00',
	second: '00'
});

const handleCountDown = () => {
	// 设置目标时间：2025年5月3日12:00:00
	const targetDate = new Date('2025-05-03T12:00:00');

	// 获取当前时间
	const now = new Date();

	// 计算时间差（以毫秒为单位）
	const timeDifference = targetDate - now;

	// 如果目标时间已经过去，返回提示信息
	if (timeDifference <= 0) {
		uni.showToast({
			title: '吉时已到！'
		});
	}

	// 计算天、时、分、秒
	const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
	const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

	countdownData.value = {
		day: days && `${days}`.length > 1 ? days : `0${days || 0}`,
		hour: hours && `${hours}`.length > 1 ? hours : `0${hours || 0}`,
		minute: minutes && `${minutes}`.length > 1 ? minutes : `0${minutes || 0}`,
		second: seconds && `${seconds}`.length > 1 ? seconds : `0${seconds || 0}`
	};
};

onMounted(() => {
	setInterval(() => {
		handleCountDown();
	}, 250);
});
</script>

<style lang="scss" scoped>
/* 页面总容器样式 */
.invitation-page {
	height: 100vh;
	box-sizing: border-box;
	padding-bottom: constant(safe-area-inset-bottom);
	padding-bottom: env(safe-area-inset-bottom);
	background-color: white;
}

/* 顶部图片区域 */
.header-img-block {
	/* 顶部图片变量 */
	$bgcolor: #dbbc9b;
	$bgcolor-opacity: transparentize($bgcolor, 0.4);
	$header-img-top: 2em;
	$header-img-left: 8.5rem;
	$header-img-width: 14rem;
	$header-img-height: 20rem;

	width: 100%;
	height: 25rem;
	position: relative;

	// 该区域背景色
	.bgcolor,
	&.bgcolor {
		background-color: $bgcolor;
	}

	// 处理文字与图片重合的样式
	.fix-text-overlap-img {
		background-color: $bgcolor-opacity;
		border-radius: 6px;
		padding: 0.05rem 0.4rem;
	}

	.header-img-background-container {
		position: absolute;
		left: $header-img-left;
		top: calc($header-img-top - 0.3rem);
		width: calc($header-img-width + 0.5rem);
		height: calc($header-img-height + 0.7rem);
		transform: rotate(0deg);
		.header-img-background-mask {
			width: 100%;
			height: 100%;
			-webkit-mask-box-image-source: url('/static/invitation/header-mask.png');
			-webkit-mask-box-image-slice: 0 fill;
			border-radius: 0rem;
			.header-img-background {
				width: 100%;
				height: 100%;
				background-color: white;
			}
		}
	}
	.header-img-container {
		position: absolute;
		left: $header-img-left;
		top: $header-img-top;
		width: $header-img-width;
		height: $header-img-height;
		transform: rotate(0deg);
		.header-img-mask {
			width: 100%;
			height: 100%;
			-webkit-mask-box-image-source: url('/static/invitation/header-mask.png');
			-webkit-mask-box-image-slice: 0 fill;
			border-radius: 0rem;
			.header-img-wrapper {
				width: 100%;
				height: 100%;
				.header-img {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}
/* 章节头 标题区域 */
.chapter-header {
	width: 100%;
	height: 9rem;
	background-color: #eeeeee;
	position: relative;

	.circle-style {
		width: 3.5rem;
		height: 3.5rem;
		position: absolute;
		top: 50%;
		transform: translate(0, -50%);
	}
	.header-title-wrapper {
		width: 14rem;
		height: 2rem;
		position: absolute;
		top: 50%;
		transform: translate(0, -50%);
		font-size: 1.1rem;
		.ch-header-title-wrapper {
			font-family: LXGWWenKaiMono-Regular;
			position: absolute;
		}
		.en-header-title-wrapper {
			font-family: YsabeauInfant-MediumItalic;
			position: absolute;
			top: 1.6rem;
		}
	}

	// 圆居左的样式处理
	&.circle-on-left {
		.circle-style {
			left: 6rem;
		}
		.header-title-wrapper {
			left: 7rem;
			.ch-header-title-wrapper {
				left: 1.8rem;
			}
			.en-header-title-wrapper {
				left: 1.8rem;
			}
		}
	}
	// 圆居右的样式处理
	&.circle-on-right {
		.circle-style {
			right: 6rem;
		}
		.header-title-wrapper {
			right: 7rem;
			.ch-header-title-wrapper {
				right: 1.8rem;
			}
			.en-header-title-wrapper {
				right: 1.8rem;
			}
		}
	}
}

/* 婚礼日历及倒计时样式 */
.wedding-date {
	// 左侧倒计时的宽度
	$countDownWidth: 3.4rem;
	$themeColor: rgb(184, 175, 160);

	position: relative;

	.calendar-wrapper {
		margin-left: $countDownWidth;

		border-color: $themeColor;
		border-style: solid;
		border-width: 0.157rem;
		padding: 0.7rem 0 0.7rem;

		color: $themeColor;
		.calendar {
			// 年和月这一行
			.year-month-row {
				padding: 0 2.2rem 1.2rem 2.2rem;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.year-num {
					font-size: 1.4rem;
				}
				.month-text {
					.month-num {
						font-size: 3rem;
					}
					.month-label {
						font-size: 1.4rem;
					}
				}
			}

			$dayWeekLineWidth: calc(100% - 2 * 1.2rem);
			$dayWeekLinePaddingH: 0.7rem;

			// 周度标记这一行
			.week-row {
				$weekFontSize: 0.7rem;
				.bgcolor-wrapper {
					width: $dayWeekLineWidth;
					margin: auto;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					background-color: $themeColor;
					padding: 0.2rem $dayWeekLinePaddingH;
					box-sizing: border-box;
					border-radius: $weekFontSize;
					.week-item {
						width: 1rem;
						text-align: center;

						font-size: $weekFontSize;
						color: white;
					}
				}
			}
			// 日期区域
			.day-area {
				$dayFontSize: 0.6rem;

				.day-line {
					width: $dayWeekLineWidth;
					margin: auto;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					padding: 0 $dayWeekLinePaddingH;
					margin: 0.9rem auto;
					box-sizing: border-box;
					.day-item {
						width: 1rem;
						text-align: center;

						font-size: $dayFontSize;
						color: rgb(102, 102, 102);

						position: relative;
					}
				}
			}
		}
	}

	.countdown-wrapper {
		position: absolute;
		top: 0;
		left: 1rem;
		height: 100%;
		width: 3rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 1rem 0;
		box-sizing: border-box;

		.countdown-item {
			background-color: $themeColor;
			color: white;

			padding: 0.3rem 0;
			border-radius: 8px;

			.num {
				font-size: 1rem;
			}
			.label {
				font-size: 0.7rem;
				margin-top: 0.1rem;
			}
		}
	}
}
</style>
