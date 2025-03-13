<template>
	<view>
		<text>=====Ysabeau_arr</text>
		<view v-for="fontName in Ysabeau_arr">
			<text :style="{ fontFamily: fontName }">{{ fontName }}</text>
		</view>
		<text>=====LXGWWenKai_arr</text>
		<view v-for="fontName in LXGWWenKai_arr">
			<text :style="{ fontFamily: fontName }">喜+喜=囍{{ fontName }}</text>
		</view>
		<text>=====FusionKai_arr</text>
		<view v-for="fontName in FusionKai_arr">
			<text :style="{ fontFamily: fontName }">喜+喜=囍{{ fontName }}</text>
		</view>
		<text>=====TsangerYuYangT_arr</text>
		<view v-for="fontName in TsangerYuYangT_arr">
			<text :style="{ fontFamily: fontName }">时间为媒，青春为聘{{ fontName }}</text>
		</view>
	</view>
</template>

<script setup>
import { onMounted } from 'vue';

const LXGWWenKai_arr = [
	'LXGWWenKaiMono-Medium',
	'LXGWWenKai-Light',
	'LXGWWenKaiMono-Light',
	'LXGWWenKaiMono-Regular',
	'LXGWWenKai-Medium',
	'LXGWWenKai-Regular'
];
const FusionKai_arr = ['FusionKaiJ-Regular', 'FusionKaiT-Regular'];
const TsangerYuYangT_arr = [
	'TsangerYuYangT_W01_W01',
	'TsangerYuYangT_W02_W02',
	'TsangerYuYangT_W03_W03',
	'TsangerYuYangT_W04_W04',
	'TsangerYuYangT_W05_W05'
];
const Ysabeau_arr = [
	'Ysabeau-Extralight',
	'YsabeauInfant-MediumItalic',
	'Ysabeau-SemilightItalic',
	'YsabeauInfant-Italic',
	'YsabeauSC-Semibold',
	'YsabeauInfant-Extralight',
	'YsabeauSC-Hairline',
	'Ysabeau-Regular',
	'Ysabeau-Light',
	'YsabeauInfant-ThinItalic',
	'Ysabeau-HairlineItalic',
	'YsabeauInfant-SemiboldItalic',
	'Ysabeau-Ultrabold',
	'Ysabeau-BoldItalic',
	'YsabeauInfant-Medium',
	'Ysabeau-Semilight',
	'YsabeauInfant-HairlineItalic',
	'YsabeauSC-Regular',
	'YsabeauInfant-BoldItalic',
	'YsabeauSC-Extralight',
	'Ysabeau-MediumItalic',
	'Ysabeau-Italic',
	'YsabeauInfant-Thin',
	'Ysabeau-Hairline',
	'YsabeauInfant-Semibold',
	'Ysabeau-ThinItalic',
	'Ysabeau-Bold',
	'YsabeauInfant-LightItalic',
	'YsabeauSC-Thin',
	'Ysabeau-SemiboldItalic',
	'YsabeauInfant-Hairline',
	'YsabeauSC-Medium',
	'YsabeauInfant-Bold',
	'YsabeauSC-Bold',
	'Ysabeau-Medium',
	'YsabeauInfant-SemilightItalic',
	'Ysabeau-ExtralightItalic',
	'YsabeauInfant-Regular',
	'Ysabeau-Thin',
	'Ysabeau-Black',
	'YsabeauInfant-Light',
	'YsabeauSC-Semilight',
	'Ysabeau-Semibold',
	'YsabeauInfant-ExtralightItalic',
	'YsabeauSC-Light',
	'Ysabeau-LightItalic',
	'Ysabeau-Heavy',
	'YsabeauInfant-Semilight'
];

onMounted(() => {
	LXGWWenKai_arr.forEach((fontName) => {
		uni.loadFontFace({
			global: true,
			family: fontName,
			source: `url(/static/fonts/LXGWWenKai/${fontName}.ttf)`,
			success(a) {}
		});
	});
	FusionKai_arr.forEach((fontName) => {
		uni.loadFontFace({
			global: true,
			family: fontName,
			source: `url(/static/fonts/FusionKai/${fontName}.ttf)`,
			success(a) {}
		});
	});

	TsangerYuYangT_arr.forEach((fontName) => {
		uni.loadFontFace({
			global: true,
			family: fontName,
			source: `url(/static/fonts/TsangerYuYangT/${fontName}.ttf)`,
			success(a) {}
		});
	});

	Ysabeau_arr.forEach((fontName) => {
		uni.loadFontFace({
			global: true,
			family: fontName,
			source: `url(/static/fonts/Ysabeau/${fontName}.ttf)`,
			success(a) {}
		});
	});
});
</script>

<style></style>
