<script>
export default {
	onLaunch: function () {
		console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！');
		console.log('App Launch');
		uni.loadFontFace({
			global: true,
			family: 'seaside-resort-nf',
			source: 'url(https://cdn.yyjjfiveone.cn/fonts/seaside-resort-nf/a.ttf)',
			// source: 'url(/static/fonts/seaside-resort-nf/a.ttf)',
			success(a) {}
		});
		uni.loadFontFace({
			global: true,
			family: 'alimama-dongfangdakai',
			source: 'url(https://cdn.yyjjfiveone.cn/fonts/alimama-dongfangdakai/alimama-dongfangdakai.ttf)',
			// source: 'url(/static/fonts/alimama-dongfangdakai/alimama-dongfangdakai.ttf)',
			success(a) {}
		});
		uni.loadFontFace({
			global: true,
			family: 'LXGWWenKaiMono-Medium',
			source: 'url(https://cdn.yyjjfiveone.cn/fonts/LXGWWenKai/LXGWWenKaiMono-Medium.ttf)',
			// source: 'url(/static/fonts/LXGWWenKai/LXGWWenKaiMono-Medium.ttf)',
			success(a) {}
		});
		uni.loadFontFace({
			global: true,
			family: 'LXGWWenKaiMono-Regular',
			source: 'url(https://cdn.yyjjfiveone.cn/fonts/LXGWWenKai/LXGWWenKaiMono-Regular.ttf)',
			// source: 'url(/static/fonts/LXGWWenKai/LXGWWenKaiMono-Regular.ttf)',
			success(a) {}
		});
		uni.loadFontFace({
			global: true,
			family: 'YsabeauInfant-MediumItalic',
			source: 'url(https://cdn.yyjjfiveone.cn/fonts/Ysabeau/YsabeauInfant-MediumItalic.ttf)',
			// source: 'url(/static/fonts/Ysabeau/YsabeauInfant-MediumItalic.ttf)',
			success(a) {}
		});
		uni.loadFontFace({
			global: true,
			family: 'TsangerYuYangT_W04_W04',
			source: 'url(https://cdn.yyjjfiveone.cn/fonts/TsangerYuYangT/TsangerYuYangT_W04_W04.ttf)',
			// source: 'url(/static/fonts/TsangerYuYangT/TsangerYuYangT_W04_W04.ttf)',
			success(a) {}
		});
	},
	onShow: function () {
		console.log('App Show');
	},
	onHide: function () {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
/*每个页面公共css */
@import '@/uni_modules/uni-scss/index.scss';
/* #ifndef APP-NVUE */
@import '@/static/customicons.css';

// @import 'http://cdn.yyjjfiveone.cn/fonts/aaa.css';

// 设置整个项目的背景色
page {
	background-image: linear-gradient(90deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%);

	// background-color: #f5f5f5;
}

/* #endif */
.example-info {
	font-size: 14px;
	color: #333;
	padding: 10px;
}
</style>