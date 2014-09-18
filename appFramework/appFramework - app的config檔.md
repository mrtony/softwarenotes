appFramework - app的config檔
------

在新版的intelXDK, 已經將不同平台的config檔分開

* intelxdk.config.android.xml
* intelxdk.config.ios.xml
* intelxdk.config.windows8.xml
* intelxdk.config.crosswalk.xml
* intelxdk.config.additions.xml

## Build Process
IntelXDK 會使用自己的build server以Cordova CLI建置應用程式.

## intelxdk.config.<platform>.xml
這些檔案是intelXDK自動產生的. 只要開啟project後, 選擇build的TAB, 會自動產生以下檔案
intelxdk.config.android.xml,intelxdk.config.ios.xml,intelxdk.config.windows8.xml,intelxdk.config.crosswalk.xml

所有在XDK IDE中所設定的參數都會放進對應的平台的xml檔.

## intelxdk.config.additions.xml
對於需要在不同平台下,在IDE預設的設定中所沒有的參數, 就需要加入到這個檔案中. IDE不會自動產生這個檔案,需要自己手動加入,放在專案的根目錄下.

## intelxdk.config.xml
這個檔案目前已經不再使用了, 但可以做為參考來加入intelxdk.config.additions.xml

## 參考資料
* [Understanding the Intel® XDK Cordova Build Options](https://software.intel.com/en-us/html5/articles/using-the-cordova-for-android-ios-etc-build-option)
* [Adding Build Options to Your Intel® XDK Cordova App Using intelxdk.config.additions.xml](https://software.intel.com/en-us/html5/articles/adding-special-build-options-to-your-xdk-cordova-app-with-the-intelxdk-config-additions-xml-file)