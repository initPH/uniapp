<template>
	<view class="page">
		<video class="video" id="demoVideo" :show-fullscreen-btn="disable" :show-play-btn="disable" :enable-progress-gesture="disable"
		 @fullscreenchange="fullscreenchange" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4">
			<cover-view class="controls-title">简单的自定义 controls</cover-view>
			<cover-image class="controls-play img" @click="play" src="../../static/logo.png"></cover-image>
			<cover-image class="controls-pause img" @click="pause" src="../../static/logo.png"></cover-image>
		</video>
		<text :selectable="false" space="emsp">我 是一串不可选择的文字;\n</text>
		<text :selectable="true">我是一串可&nbsp;选择的文字</text>
		<view class="uni-padding-wrap uni-common-mt uni-flex uni-column">
			<view class="progress-box">
				<progress percent="20" show-info stroke-width="3" />
			</view>
			<view class="progress-box">
				<progress percent="40" active stroke-width="3" />
			</view>
			<view class="progress-box">
				<progress percent="60" active stroke-width="3" backgroundColor="#999" />
			</view>
			<view class="progress-box">
				<progress percent="80" activeColor="red" active stroke-width="8" />
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				videoCtx: null,
				disable: false
			}
		},
		mounted() {
			this.videoCtx = uni.createVideoContext('demoVideo')
		},
		methods: {
			play(event) {
				this.videoCtx.play();
				uni.showToast({
					title: '开始播放',
					icon: 'none'
				});
			},
			pause(event) {
				this.videoCtx.pause();
				uni.showToast({
					title: '暂停播放',
					icon: 'none'
				});
			}
		}
	}
</script>
<style>
	.page {
		/* display: flex;
		justify-content: center; */
	}

	.video {
		position: relative;
		width: 100%;
	}

	cover-view,
	cover-image {
		display: inline-block;
	}

	.img {
		position: absolute;
		width: 100rpx;
		height: 100rpx;
		top: 50%;
		margin-top: -50rpx;
	}

	.controls-play {
		left: 50rpx;
	}

	.controls-pause {
		right: 50rpx;
	}

	.controls-title {
		width: 100%;
		text-align: center;
		color: #FFFFFF;
	}
	.uni-padding-wrap {
		height: 300px;
		justify-content: space-around;
	}
</style>
