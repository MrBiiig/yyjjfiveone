<template>
  <view>
		<uni-grid :column="2" :highlight="true" :showBorder="false"  @change="change">
				<uni-grid-item v-for="(item, index) in images" :index="index" :key="index">
					<view class="grid-item-box" style="background-color: #cccccc;width: 100%;height: 100%;padding: 8rpx;">
						<image style="width: 100%;height: 100%;" mode="aspectFill" :src="item"></image>
					</view>
				</uni-grid-item>
			</uni-grid>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const images = [
  "https://gd-hbimg.huaban.com/ede93cf241ce93df1f824022ce1bc6dd042879819162e-fvCJH6",
  "https://gd-hbimg.huaban.com/2d14622d76dbcd036cc47f240c80d5f1b9e6481da3430-r5cTIt",
  "https://gd-hbimg.huaban.com/824306750839c34939b4345039e7425740598dd510a9c1-ewh29L",
  "https://gd-hbimg.huaban.com/824306750839c34939b4345039e7425740598dd510a9c1-ewh29L",
  "https://gd-hbimg.huaban.com/ce90e5b734b0c9933335d962a02ae6e8227965b6a984c-Gg1vRz",
  "https://gd-hbimg.huaban.com/9fa5103953d1b3f2a70984f17395c1cf1eddc8db2af38-Q2fm1x",
  "https://gd-hbimg.huaban.com/ce90e5b734b0c9933335d962a02ae6e8227965b6a984c-Gg1vRz"
];


onMounted(() => {

});

</script>

<style>
</style>