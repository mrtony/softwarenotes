Cordova設計-系統開機及初始化
------

### document.ready和deviceready誰先發生

以下面的這段code來測試, document ready比device ready早發生

	$(document).ready(function () {
	    alert("document ready!");
	    $.ui.launch();
	});
	
	var onDeviceReady = function () {
	    alert("Device ready!");
	};
	document.addEventListener("deviceready", onDeviceReady, false);