<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">
				flex-direction: row
				<text>\n横向布局</text>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item uni-bg-red">A</view>
				<view class="flex-item uni-bg-green">B</view>
				<view class="flex-item uni-bg-blue">C</view>
			</view>
			<view class="uni-title uni-common-mt">
				flex-direction: column
				<text>\n纵向布局</text>
			</view>
			<view class="uni-flex uni-column">
				<view class="flex-item flex-item-V uni-bg-red">A</view>
				<view class="flex-item flex-item-V uni-bg-green">B</view>
				<view class="flex-item flex-item-V uni-bg-blue">C</view>
			</view>
		</view>
		<view>
			<scroll-view show-scrollbar :scroll-with-animation="true" :scroll-top="scrollTop" scroll-y="true" class="scroll-Y"
			 @scroll="scroll">
				<view id="demo1" class="scroll-view-item uni-bg-red">A</view>
				<view id="demo2" class="scroll-view-item uni-bg-green">B</view>
				<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
			</scroll-view>
			<button type="default" @tap="goTop">滚回到頂部</button>
		</view>
		<scroll-view :scroll-with-animation="true" class="scroll-view_H" scroll-x="true" @scroll="scrollL" :scroll-left="scrollLeft">
			<view id="demo1" class="scroll-view-item_H uni-bg-red">A</view>
			<view id="demo2" class="scroll-view-item_H uni-bg-green">B</view>
			<view id="demo3" class="scroll-view-item_H uni-bg-blue">C</view>
		</scroll-view>
		<button type="default" @tap="goLeft">滚回到左侧</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0,
					scrollLeft: 0
				},
				scrollLeft: 0
			}
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 2000)
		},
		methods: {
			getData() {
				uni.showToast({
					title: "下拉获取数据"
				})
			},
			goLeft() {
				this.scrollLeft = this.old.scrollLeft
				this.$nextTick(function() {

					this.scrollLeft = 0
					console.log(this.scrollLeft)
				})
			},
			goTop() {
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
			},
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			scrollL(e) {
				this.old.scrollLeft = e.detail.scrollLeft
			} 
		}
	}
</script>

<style>
	.scroll-view-item_H,
	.scroll-view_H {
		height: 100px;
	}

	.scroll-Y {
		height: 100px;
	}

	.scroll-view_H {
		white-space: nowrap;
	}

	.scroll-view-item {
		height: 100px;
	}

	.scroll-view-item,
	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
	}

	.uni-row .flex-item {
		width: 100%;
	}

	.flex-item {
		height: 100px;
	}
</style>
