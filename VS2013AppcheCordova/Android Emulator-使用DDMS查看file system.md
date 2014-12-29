Android Emulator-使用DDMS查看file system
------

## 步驟
1. 以系統管理員身份執行SDK manager
2. 將Tools>Android SDK Tools升級到最新版 (24.0.2)
3. 以VS2013運行Andriod Emulator
4. 程式執行後, 執行C:\Program Files (x86)\Android\android-sdk\tools\ddms.bat
5. 在DDMS中選擇Device>File Explorer,即可看到檔案目錄.
6. 以af為例,將下載的檔案放在 cordova.file.dataDirectory (參考file plugin),會指向file system的root的 *data\data\com.crossappdev\files*


## 參考

* [Using DDMS](http://developer.android.com/tools/debugging/ddms.html)  - Android官方介紹DDMS