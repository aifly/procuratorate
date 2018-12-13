<template>
	<div class="zmiti-index-ui lt-full">
		<header>
			<span v-tap='[showImg,"zhuce"]'></span>
			<img :src="imgs.header" alt="">
		</header>
		<div class='zmiti-index-main' :style="{height:viewH - 128+'px'}" ref='page'>
			<div>
				<div class='zmiti-index-search zmiti-center'>
					<img :src="imgs.searchIco" alt="">
					<div>
						<input placeholder="请输入关键词进行搜索" />
					</div>
					<img :src="imgs.audio" alt="">
				</div>
				<div class='zmiti-banner zmiti-center'>
					<img :src="imgs.banner" alt="">
				</div>

				<div class='zmiti-center zmiti-hot-line'>
					<div>
						<img :src="imgs.videoOnline" alt="">
					</div>
					<div v-tap='[showTelPage]'>
						<img :src="imgs.hotline" alt="">
					</div>
				</div>

				<div class='zmiti-btns zmiti-color1 zmiti-center'>
					<div><a href="#/konggao">控告</a></div>
					<div><a href='#/shensu'>刑事申诉</a></div>
				</div>
				<div class='zmiti-btns zmiti-color1 zmiti-center'>
					<div><a href='#/shensu'>民事申诉</a></div>
					<div><a href='#/shensu'>行政申诉</a></div>
				</div>
				<div class='zmiti-btns zmiti-color1 zmiti-center'>
					<div v-tap='[showImg,"guojiapeichang"]'>国家赔偿申请</div>
					<div v-tap='[showImg,"sifajiuzhu"]'>司法救助申请</div>
				</div>
				<div class='zmiti-btns zmiti-color1 zmiti-center'>
					<div>公益诉讼举报</div>
					<div>咨询建议</div>
				</div>
				<div class='zmiti-btns zmiti-color1 zmiti-center'>
					<div v-tap='[showImg,"yuejianjianchaguan"]'>约见检察官</div>
					<div>律师服务</div>
				</div>
				<div class='zmiti-btns zmiti-color2 zmiti-center'>
					<div><a href="http://weixin.12309.gov.cn/serviceCenter/weChat/lawList">法律文书公开</a></div>
					<div><a href='http://wx.ajxxgk.jcy.gov.cn/weixin/login.php?l=2&id=%27%27'>案件程序性信查询</a> </div>
				</div>
				<div class='zmiti-btns zmiti-color2 zmiti-center'>
					<div><a href='http://weixin.12309.gov.cn/serviceCenter/weChat/casesList'>重要案件信息公开</a></div>
					<div><a href='http://m.bjjc.gov.cn/web/html/map/bj/jcdt.html'>检察地图</a></div>
				</div>
				<div class='zmiti-btns zmiti-color3 zmiti-center'>
					<div v-tap='[showImg,"zhinengjieshao"]'>职能介绍</div>
					<div><a href='http://m.bjjc.gov.cn/web/html/jcynsjg.html'>内设机构</a></div>
				</div>
				<div class='zmiti-btns zmiti-color3 zmiti-center'>
					<div><a href='http://m.bjjc.gov.cn/web/html/jcyyld.html?type=0'>院领导</a></div>
					<div><a href='http://m.bjjc.gov.cn/web/html/jcyyld.html?type=1'>检察官</a></div>
				</div>
				<div class='zmiti-btns zmiti-color4 zmiti-center'>
					<div>文书格式</div>
					<div>参阅案例</div>
				</div>
				<div class='zmiti-btns zmiti-color4 zmiti-center'>
					<div>司法解释</div>
					<div><a href='http://m.bjjc.gov.cn/web/html/jcyzywj.html?type=4'>重要文件</a></div>
				</div>
			</div>
		</div>
		<Toast :msg="toastMsg"></Toast>
		<div class="zmiti-mask lt-full" v-if='showTel' >
			<div class='header' @touchend='showTel =false'>
				
			</div>
			<div class="tel" ref='tel'>
				<div>
					<a href="tel:12309"><img :src="imgs.tel12309" alt=""></a>
				</div>
			</div>
		</div>

		<div class="zmiti-mask lt-full" v-if='key' >
			<div class='header' @touchend='key = ""'>
				
			</div>
			<div class="tel" ref="tel1">
				<div>
					<img :src="imgs[key]" alt="">
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import './index.css';
	import symbinUtil from '../lib/util';
	import Toast from '../toast/toast';
	import IScroll from 'iscroll';
	export default {
		props: ['obserable'],
		data() {
			return {
				imgs,
				viewW: window.innerWidth,
				viewH:window.innerHeight,
				toastMsg: '',
				mobile: '',
				code: "",
				key:'',

				showTel:false,
				seconds:60,
				isSend:false,
				isAgree:false
	
			}
		},
		components: {
			Toast
		},
		watch:{
			showTel(val){
				if(!val){
					this.tel.destroy();
				}
			},
			key(val){
				if(!val){
					this.tel1.destroy();
				}
			}
		},
		methods: {
			toast(msg, time = 1500) {
				this.toastMsg = msg;
				setTimeout(() => {
					this.toastMsg = '';
				}, time);
			},
			showImg(key){
				this.key = key;

				setTimeout(()=>{
					this.tel1 = new IScroll(this.$refs['tel1'],{
						preventDefault:false,
						scrollbars:true
					});
						
					setTimeout(() => {
						this.tel1.refresh()
					}, 1000);
				},100)
			},
			showTelPage(){
				this.showTel = true;
				setTimeout(()=>{
					this.tel = new IScroll(this.$refs['tel'],{
						preventDefault:false,
						scrollbars:true
					});
						
					setTimeout(() => {
						this.tel.refresh()
					}, 1000);
				},100)
			}
	
		},
		mounted() {
			this.scroll = new IScroll(this.$refs['page'],{
				preventDefault:false,
				scrollbars:true
			});
		
			
			setTimeout(() => {
				this.scroll.refresh()
				
			}, 1000);
		}
	}
</script>
 