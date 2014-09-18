appFramework - 如何用intelXDK Debug
------


## 安裝手機的驅動程式
在Windows7環境下安裝Sony Xperia L C2105的驅動程式

* 可以到Android OEM USB Drivers去下載驅動程式, 若沒有找到,可以用以下的方式安裝
* 開始功能表 > 電腦 > 按右鍵 > 內容 > 裝置管理員 > USB裝置 > Android > 更新驅動程式
* 安裝完畢後顯示安裝成功
* 到IntelXDK的Debug TAB可看到有顯示裝置
![](https://googledrive.com/host/0B7okXOykSneqSER0enBJNTJ5Q1k/af-2014-09-18_10-56-30.png)

* 點選小蟲圖樣就會自動去啟動安裝在手機中對應的app, 然後就可以用chrome的debug console來除錯.


## 參考資料
* [intel - Debug TAB](https://software.intel.com/en-us/html5/xdkdocs#496098)
* [android - OEM USB Drivers](http://developer.android.com/tools/extras/oem-usb.html)
