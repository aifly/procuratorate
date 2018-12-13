var imgs = {
	audio :"./assets/images/audio.png",
	banner :"./assets/images/banner.png",
	house :"./assets/images/house.png",
	eye :"./assets/images/eye.png",
	user :"./assets/images/user.png",
	users :"./assets/images/users.png",
	phone :"./assets/images/phone.png",
	company :"./assets/images/company.png",
	upload :"./assets/images/upload.png",
	upload1 :"./assets/images/upload1.png",
	check :"./assets/images/check.png",

	hotline :"./assets/images/hotline.png",
	searchIco :"./assets/images/search-ico.png",
	videoOnline :"./assets/images/video-online.png",
	
}
window.config = {
	baseUrl:'https://api.symbin.cn/v1'
};



(function () {

	if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
		handleFontSize();
	} else {
		if (document.addEventListener) {
			document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
		} else if (document.attachEvent) {
			document.attachEvent("WeixinJSBridgeReady", handleFontSize);
			document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
		}
	}

	function handleFontSize() {
		// 设置网页字体为默认大小
		WeixinJSBridge.invoke('setFontSizeCallback', {
			'fontSize': 0
		});
		// 重写设置网页字体大小的事件
		WeixinJSBridge.on('menu:setfont', function () {
			WeixinJSBridge.invoke('setFontSizeCallback', {
				'fontSize': 0
			});
		});
	}
})();