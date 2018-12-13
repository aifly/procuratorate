<template>
	<div class="zmiti-konggao-ui lt-full">
		<div class='zmiti-konggao-main' ref='page'>
			<div>
				<div class='zmiti-form-item zmiti-center'>
					<div><img :src="imgs.house" alt=""></div>
					<div>
						<select v-model='jianchayuan'>
							<option value="北京市人民检察院">北京市人民检察院</option>
							<option value="北京市人民检察院第一分院">北京市人民检察院第一分院</option>
							<option value="北京市人民检察院第二分院">北京市人民检察院第二分院</option>
							<option value="北京市人民检察院第三分院">北京市人民检察院第三分院</option>
							<option value="北京市人民检察院第四分院（北京铁路分院）">北京市人民检察院第四分院（北京铁路分院）</option>
							<option value="北京市东城区人民检察院">北京市东城区人民检察院</option>
							<option value="北京市西城区人民检察院">北京市西城区人民检察院</option>
							<option value="北京市朝阳区人民检察院">北京市朝阳区人民检察院</option>
							<option value="北京市海淀区人民检察院">北京市海淀区人民检察院</option>
							<option value="北京市丰台区人民检察院">北京市丰台区人民检察院</option>
							<option value="北京市石景山区人民检察院">北京市石景山区人民检察院</option>
							<option value="北京市门头沟区人民检察院">北京市门头沟区人民检察院</option>
							<option value="北京市房山区人民检察院">北京市房山区人民检察院</option>
							<option value="北京市通州区人民检察院">北京市通州区人民检察院</option>
							<option value="北京市顺义区人民检察院">北京市顺义区人民检察院</option>
							<option value="北京市大兴区人民检察院">北京市大兴区人民检察院</option>
							<option value="北京市昌平区人民检察院">北京市昌平区人民检察院</option>
							<option value="北京市怀柔区人民检察院">北京市怀柔区人民检察院</option>
							<option value="北京市平谷区人民检察院">北京市平谷区人民检察院</option>
							<option value="北京市密云区人民检察院">北京市密云区人民检察院</option>
							<option value="北京市延庆区人民检察院">北京市延庆区人民检察院</option>
							<option value="北京铁路运输检察院">北京铁路运输检察院</option>
							<option value="天津铁路运输检察院">天津铁路运输检察院</option>
							<option value="石家庄铁路运输检察院">石家庄铁路运输检察院</option>
							<option value="北京市清河人民检察院">北京市清河人民检察院</option>
							<option value="刑事执行检察院">刑事执行检察院</option>
							<option value='北京市人民检察院'>北京市人民检察院</option>
							<option value='北京市人民检察院第一分院'>北京市人民检察院第一分院</option>
							<option value='北京市人民检察院第二分院'>北京市人民检察院第二分院</option>
							<option value='北京市人民检察院第三分院'>北京市人民检察院第三分院</option>
							<option value='北京市人民检察院第四分院（北京铁路分院）'>北京市人民检察院第四分院（北京铁路分院）</option>
							<option value='北京市东城区人民检察院'>北京市东城区人民检察院</option>
							<option value='北京市西城区人民检察院'>北京市西城区人民检察院</option>
							<option value='北京市朝阳区人民检察院'>北京市朝阳区人民检察院</option>
							<option value='北京市海淀区人民检察院'>北京市海淀区人民检察院</option>
							<option value='北京市丰台区人民检察院'>北京市丰台区人民检察院</option>
							<option value='北京市石景山区人民检察院'>北京市石景山区人民检察院</option>
							<option value='北京市门头沟区人民检察院'>北京市门头沟区人民检察院</option>
							<option value='北京市房山区人民检察院'>北京市房山区人民检察院</option>
							<option value='北京市通州区人民检察院'>北京市通州区人民检察院</option>
							<option value='北京市顺义区人民检察院'>北京市顺义区人民检察院</option>
							<option value='北京市大兴区人民检察院'>北京市大兴区人民检察院</option>
							<option value='北京市昌平区人民检察院'>北京市昌平区人民检察院</option>
							<option value='北京市怀柔区人民检察院'>北京市怀柔区人民检察院</option>
							<option value='北京市平谷区人民检察院'>北京市平谷区人民检察院</option>
							<option value='北京市密云区人民检察院'>北京市密云区人民检察院</option>
							<option value='北京市延庆区人民检察院'>北京市延庆区人民检察院</option>
							<option value='北京铁路运输检察院'>北京铁路运输检察院</option>
							<option value='天津铁路运输检察院'>天津铁路运输检察院</option>
							<option value='石家庄铁路运输检察院'>石家庄铁路运输检察院</option>
							<option value='北京市清河人民检察院'>北京市清河人民检察院</option>
							<option value='刑事执行检察院'>刑事执行检察院</option>
							<option value='北京市人民检察院'> 北京市人民检察院</option>
							<option value='北京市人民检察院第一分院'> 北京市人民检察院第一分院</option>
							<option value='北京市人民检察院第二分院'> 北京市人民检察院第二分院</option>
							<option value='北京市人民检察院第三分院'> 北京市人民检察院第三分院</option>
							<option value='北京市人民检察院第四分院（北京铁路分院）'> 北京市人民检察院第四分院（北京铁路分院）</option>
							<option value='北京市东城区人民检察院'> 北京市东城区人民检察院</option>
							<option value='北京市西城区人民检察院'> 北京市西城区人民检察院</option>
							<option value='北京市朝阳区人民检察院'> 北京市朝阳区人民检察院</option>
							<option value='北京市海淀区人民检察院'> 北京市海淀区人民检察院</option>
							<option value='北京市丰台区人民检察院'> 北京市丰台区人民检察院</option>
							<option value='北京市石景山区人民检察院'> 北京市石景山区人民检察院</option>
							<option value='北京市门头沟区人民检察院'> 北京市门头沟区人民检察院</option>
							<option value='北京市房山区人民检察院'> 北京市房山区人民检察院</option>
							<option value='北京市通州区人民检察院'> 北京市通州区人民检察院</option>
							<option value='北京市顺义区人民检察院'> 北京市顺义区人民检察院</option>
							<option value='北京市大兴区人民检察院'> 北京市大兴区人民检察院</option>
							<option value='北京市昌平区人民检察院'> 北京市昌平区人民检察院</option>
							<option value='北京市怀柔区人民检察院'> 北京市怀柔区人民检察院</option>
							<option value='北京市平谷区人民检察院'> 北京市平谷区人民检察院</option>
							<option value='北京市密云区人民检察院'> 北京市密云区人民检察院</option>
							<option value='北京市延庆区人民检察院'> 北京市延庆区人民检察院</option>
							<option value='北京铁路运输检察院'> 北京铁路运输检察院</option>
							<option value='天津铁路运输检察院'> 天津铁路运输检察院</option>
							<option value='石家庄铁路运输检察院'> 石家庄铁路运输检察院</option>
							<option value='北京市清河人民检察院'> 北京市清河人民检察院</option>
							<option value='刑事执行检察院'> 刑事执行检察院</option>
						</select>
						<span>{{jianchayuan||"请选择检察院"}}</span>
					</div>
					<div>
					</div>
				</div>
				<div class='zmiti-form-item zmiti-center'>
					<div><img :src="imgs.eye" alt=""></div>
					<div>
						<select v-model="isNM">
							<option :value="1">是</option>
							<option :value="0">否</option>
						</select>
						<span>{{isNM===''?'是否匿名':isNM === 1 ? '是':'否'}}</span>
					</div>
					<div>
					</div>
				</div>
				<div class='zmiti-form-item zmiti-center'>
					<div><img :src="imgs.user" alt=""></div>
					<div>
						<input type="text" placeholder="控告人姓名">
					</div>
					<div style='opacity:0'>
					</div>
				</div>
				<div class='zmiti-form-item zmiti-center'>
					<div><img :src="imgs.phone" alt=""></div>
					<div>
						<input type="text" placeholder="联系电话">
					</div>
					<div style='opacity:0'>
					</div>
				</div>
				<div class='zmiti-form-item zmiti-center'>
					<div><img :src="imgs.users" alt=""></div>
					<div>
						<select v-model="relation">
							<option value="当事人">当事人</option>
							<option value="当事人近亲属">当事人近亲属</option>
							<option value="代理人">代理人</option>
							<option value="律师">律师</option>
						</select>
						<span>{{relation||'控告人与案件关系'}}</span>
					</div>
					<div>
					</div>
				</div>
				<div class='zmiti-form-item zmiti-center'>
					<div><img :src="imgs.user" alt=""></div>
					<div>
						<input type="text" placeholder="被控告人姓名">
					</div>
					<div style='opacity:0'>
					</div>
				</div>
				<div class='zmiti-form-item zmiti-center'>
					<div><img :src="imgs.company" alt=""></div>
					<div>
						<input type="text" placeholder="被控告人单位">
					</div>
					<div style='opacity:0'>
					</div>
				</div>
				<div class='zmiti-form-item zmiti-center zmiti-form-upload'>
					<div><img :src="imgs.upload" alt=""></div>
					<div>
						<select disabled>
						
						</select>
						<span>上传控告材料</span>
					</div>
					<div style="opacity:0">
					</div>
					<div class='zmiti-upload-input'>
						<img :src="imgs.upload1" alt="">
						<input type="file">
					</div>
					
				</div>
				<div class='zmiti-form-item zmiti-center zmiti-form-upload'>
					<div><img :src="imgs.upload" alt=""></div>
					<div>
						<select disabled>
						</select>
						<span>法律文书或其他证据材料</span>
					</div>
					<div style="opacity:0">
					</div>
					<div class='zmiti-upload-input'>
						<img :src="imgs.upload1" alt="">
						<input type="file">
					</div>
				</div>
				<div class='zmiti-konggao-submit'>
					<img :src='imgs.check'/>
					提交
				</div>
			</div>
		</div>
		<Toast :msg="toastMsg"></Toast>
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
				toastMsg: '',
				mobile: '',
				isNM:'',
				relation:'',
				code: "",
				jianchayuan:"",
				seconds:60,
				isSend:false,
				isAgree:false
	
			}
		},
		components: {
			Toast
		},
	
		methods: {
			toast(msg, time = 1500) {
				this.toastMsg = msg;
				setTimeout(() => {
					this.toastMsg = '';
				}, time);
			},
			
	
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
 