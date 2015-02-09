# AngularJS non-blocking notification - toaster

1. 功用: 用來顯示在程式執行過程中顯示訊息
2. 相依套件: angularJS animate (angular-animate.js)
3. modue來源: [AngularJS-Toaster](https://github.com/jirikavi/AngularJS-Toaster)
4. [可客製化顯示的style](http://codeseven.github.io/toastr/demo.html)
5. 架構設計: 參考John PaPa的design pattern, 將toaster整合在blocks中
6. 使用方式
	- 在app module中相依core module.
	- 在core module中,注入toaster module
7. 建立logger factory,並提供info,warn,error等的服務
8. 使用時要引入的檔案
	- angular.js
	- angular-animate.js
	- toaster.js
	- toaster.css
9. 使用時要在View中(通常是在index.html中的body tag中的第一行)加入tag才能顯示notification

```
<toaster-container toaster-options="{'time-out': 0, 'close-button':true, 'animation-class': 'toast-top-center', 'mouseover-timer-stop':true}"></toaster-container>
```
10. 將time-out屬性設為0則會一直顯示不會消失.
11. API使用方式

```
        logger.info('message:Test View is displayed','data:only can see in console','title:TEST');
        logger.error('message:Test View is displayed','data:only can see in console','title:TEST');
        logger.warning('message:Test View is displayed','data:only can see in console','title:TEST');
        logger.success('message:Test View is displayed','data:only can see in console','title:TEST');
        logger.wait('message:Test View is displayed','data:only can see in console','title:TEST');
```