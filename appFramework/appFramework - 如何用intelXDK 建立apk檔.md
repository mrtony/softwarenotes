appFramework - 如何用intelXDK 建立apk檔
------

## build的步驟
1. 由appframework的github下載zip檔後解壓,
2. 打開index.html, 並將以下的code包含進來

	    <script type="text/javascript" charset="utf-8" src="intelxdk.js"></script>
	    <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
	    <script type="text/javascript" charset="utf-8" src="xhr.js"></script>
3. 執行intelXDK並Import an Existing HTML5 Project.
4. 選擇build Cordova Android. 接下來就是自動上傳檔案, 去連build server, 然後選擇*Build App Now*的按鈕. 

![](https://googledrive.com/host/0B7okXOykSneqSER0enBJNTJ5Q1k/af-2014-09-18_09-33-58.png)

5. Build完成後會顯示build的結果
![](https://googledrive.com/host/0B7okXOykSneqSER0enBJNTJ5Q1k/af02-2014-09-18_09-50-45.png)

6. 然後下載apk到local端.將.apk檔放到手機中, 執行該apk檔就可以安裝並執行.


## 參考資料
* [intel - Using the Build Tab](https://software.intel.com/en-us/html5/article/using-the-build-tab)
