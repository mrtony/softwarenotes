VS2013 Apache Cordova相關開發環境設定
------

### 設定Android模擬器

參考[在 Android 上執行多重裝置混合式應用程式](http://msdn.microsoft.com/zh-tw/library/dn757059.aspx)有說明如何設定Android模擬器:

1. 安裝好VS2013 CM及Apache Cordova後,會自動安裝好android SDK及模擬器.
2. 執行應用程式中的 Android SDK Tools的SDK manager

### 更新Android SDK package

要以系統管理員身份執行SDK manager再執行安裝package即可.要安裝的更新

1.  Intel x86 Emulator Accelerator (HAXM Installer) - CPU要支援Intel® VT-x, Intel® EM64T (Intel® 64), and Execute Disable (XD) Bit functionality. [Installation Instructions for Intel® Hardware Accelerated Execution Manager - Microsoft Windows*](https://software.intel.com/en-us/android/articles/installation-instructions-for-intel-hardware-accelerated-execution-manager-windows). 接下來要手動安裝. 在C:\Program Files (x86)\Android\android-sdk\extras\intel\Hardware_Accelerated_Execution_Manager中, 執行intelhaxm-android.exe安裝.

### 務必要將模擬器的CPU設成Intel就可以加速

在安裝Intel x86 Emulator Accelerator後,必需在將Android SDK Tools的AVD manager中,將模擬器的CPU改為Intel, 並開啟Use Host CPU功能.

## 參考

* [SDK Manager官方網站](http://developer.android.com/tools/help/sdk-manager.html)