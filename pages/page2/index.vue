<template>
	<view class="content">
		<view class="data">
			<text>{{val}}</text>
		</view>

		<button type="primary" @click="startSpy">
			開始監聽
		</button>
		<button type="primary" @click="comunicationOff">结束监听</button>
		<uni-badge text="123132"></uni-badge>
		<uni-badge type="purple" text="123132"></uni-badge>
		<uni-badge type="success" text="123132"></uni-badge>
		<uni-badge type="primary" text="123132" inverted></uni-badge>
		<uni-badge type="error" text="123132"></uni-badge>

		<movable-area class="move-container">
			<movable-view direction="all" @change="onChange" class="custom-movearea-view" :x="x" :y="y">123</movable-view>
		</movable-area>
		<view @tap="tap" class="uni-link uni-center uni-common-mt">
			点击这里移动至 (30px, 30px)
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				val: 0,
				customInterval: undefined,
				x: 0,
				y: 0,
				old: {
					x: 0,
					y: 0
				}
			}
		},
		components: {},
		onLoad() {


		},
		methods: {
			tap: function(e) {
				this.x = this.old.x
				this.y = this.old.y
				this.$nextTick(function() {
					this.x = 30
					this.y = 30
					console.log(this.x)
				})
			},
			onChange: function(e) {
				// this.old.x = e.detail.x
				// this.old.y = e.detail.y
			},
			comunicationOff() {
				uni.$off('add', this.add)
			},
			startSpy() {
				uni.$off('add', this.add)
				uni.$on('add', this.add)
				if (this.customInterval) {
					console.log('clear')
					clearInterval(this.customInterval)
				}
				this.customInterval = setInterval(() => {
					uni.$emit('add', {
						data: 2
					})
				}, 1000)
			},
			add(e) {
				this.val += e.data
			}
		}
	}
</script>
<style lang="less">
	.move-container {
		width: 100%;
		height: 300px;
		background: #aaa;
	}

	.custom-movearea-view {
		width: 100px;
		height: 100px;
		background: red;
	}
</style>
