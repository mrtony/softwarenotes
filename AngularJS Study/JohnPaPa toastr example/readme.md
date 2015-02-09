# Add toastr(jQuery) non-blocking notification to AngularJS

1. 功用: 用來顯示在程式執行過程中顯示訊息
2. 相依套件: jquery
3. modue來源: [toastr](https://github.com/CodeSeven/toastr)
4. 架構設計: 參考John PaPa的design pattern, 將toaster整合在blocks中
5. 使用方式
	- 在app module中相依core module.
	- 在core module中,注入toastr module (要用constant來加入toastr服務)
6. 建立logger factory,並提供info,warn,error等的服務
7. 使用時要引入的檔案
	- angular.js
	- jquery.js
	- toastr.js
	- toastr.css
8. API使用方式
```
logger.error("message","data","title");
logger.warning("message","data","title");
logger.info("message","data","title");
logger.success("message","data","title");