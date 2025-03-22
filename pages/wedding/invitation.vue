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
									<text class="month-num">11</text>
									<text class="month-label">月</text>
								</text>
							</view>
							<view class="week-row">
								<view class="bgcolor-wrapper">
									<text class="week-item">一</text>
									<text class="week-item">二</text>
									<text class="week-item">三</text>
									<text class="week-item">四</text>
									<text class="week-item">五</text>
									<text class="week-item">六</text>
									<text class="week-item">日</text>
								</view>
							</view>
							<view class="day-area">
								<view class="day-line">
									<view
										v-for="day in [null, null, null, null, 1, 2, 3]"
										class="day-item"
									>
										<text>{{ day }}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import circleSvg from '/static/invitation/circle.svg';
import verticalLineSvg from '/static/invitation/vertical-line.svg';

onMounted(() => {});
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
		padding: 1.7325rem 0 1.7325rem;

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
			// 周度标记这一行
			.week-row {
				.bgcolor-wrapper {
					.week-item {
					}
				}
			}
			// 日期区域
			.day-area {
				.day-line {
				}
			}
		}
	}
}
</style>
