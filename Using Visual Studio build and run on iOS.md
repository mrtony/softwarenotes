Using Visual Studio build and run on iOS
------

參考MSDN的這一篇[Run Your Apache Cordova App on iOS](http://msdn.microsoft.com/en-us/library/dn757056.aspx)來開始建置iOS app.

1. 說要先看另一篇來安裝所需的工具 [Install Tools to Build for iOS](http://msdn.microsoft.com/en-us/library/dn771551.aspx).
  - 要先在MAC上安裝vs-mda-remote工具. [vs-mda-remote](https://www.npmjs.org/package/vs-mda-remote).  指令為:  `sudo npm install -g vs-mda-remote --user=$USER` ($USER為MAC中的使用者名稱)
  - 另外要安裝 *Visual Studio Tools for Apache Cordova.* 參考這一篇[Install Visual Studio Tools for Apache Cordova](http://msdn.microsoft.com/en-us/library/dn757054.aspx)
  - MAC電腦需具備4個要素: Mac OS X Mavericks, XCode6, Xcode command-line tools (from Terminal app, use xcode-select --install), Node.js, [Installing node.js on OSX 10.9 Mavericks](http://coolestguidesontheplanet.com/installing-node-js-osx-10-9-mavericks/)
  - 還要有2個條件: An active iOS Developer Program account with Apple(開發者帳號), An iOS provisioning profile configured in Xcode (download the provisioning profile and run the downloaded *.cer file). 關於cer的處理可看這篇[Maintaining Your Signing Identities and Certificates](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingCertificates/MaintainingCertificates.html)
2. 23423


------

1. 在[Nodejs官網](http://nodejs.org/)點選Install下載最新的pkg
2. 安裝nodejs
3. 更新OSX到10.9.5
4. [XCode6.1.1](https://developer.apple.com/xcode/downloads/)
5. 執行xcode並同意授權
6. sudo npm install -g vs-mda-remote --user=chenchihho
7. 執行 vs-mda-remote
8. VS中設定remote build的參數
9. 選擇Simulator iPhone5然後build,會看到遠端機器在build code.
10. 到OSX中的使用者資料夾,選擇remote builds中的cordovaApp/platforms/ios


## vs-mda-remote的一些用法
參考 [Install Tools to Build for iOS](http://msdn.microsoft.com/en-us/library/dn771551.aspx#RemoteAgentStartSimulator)並整理部份如下

1. 如果忘了vs-mda-remote的security ID, 可以下這行指令關閉security mode,且在VS 2013 community中將security ID留空白即可.

	vs-mda-remote --secure false

2. 產生新的security ID

	vs-mda-remote generateClientCert


## Run app in iOS

1. 安裝好VS 2013 community並完成apache cordova (CTP4)的安裝
2. MAC已裝好XCode 6.1.1, vs-mad-remote,且vs-mad-remote已在執行中.
3. Make sure that the iOS device has been provisioned with the same provisioning profile as the remote build server that you have configured. [Package Your App Built with Visual Studio Tools for Apache Cordova](http://msdn.microsoft.com/en-us/library/dn757048.aspx)
4. 使用VS2013打開建置好的af kitchen skin project.並將Configure general app package settings在VS的config.xml中,將參數設定好 [link](http://msdn.microsoft.com/en-us/library/dn757048.aspx) 
  - Application ID: 要獨一無二. 此先用: com.crossappdev.afkitchenskin (這個ID需與申請ios development的APP ID相同)
5. 參考本文後面的 *建立cert及provisioning的過程* , 安裝好provisioning profile.
6. 在VS2013中建置
7. 在MAC中開啟專案 (使用者/username/remote-builds/617/cordovaApp/platforms/ios)
8. 先插入已註冊的iphone,XCode啟動後,執行build,完成後會自動裝入已註冊的開發裝置(iphone)中

## Package Your App Built with Visual Studio Tools for Apache Cordova

準備發生iOS image時的準備事項 [link](http://msdn.microsoft.com/en-us/library/dn757048.aspx)

1. Configure general app package settings
在VS的config.xml中,將參數設定好
  - Application ID: 要獨一無二. 此先用: com.crossappdev.afkitchenskin (這個ID需與申請ios development的APP ID相同)
2. Sign iOS app
  - 經由Developer portal建立provisioning profile
  - 下載並安裝provisioning profile到MAC build machine.



## iOS的文件

[App Distribution Guide](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40012582-CH1-SW1)


## 建立cert及provisioning的過程

1. 開啟xcode, 在XCODE > Preference中選擇account
2. 以開發者帳號的ID加入account
3. 加入account後,Click "View Detail"按鈕
4. 在此可新增ios development及ios distribution的signing Identities.
5. 到apple的[member center](https://developer.apple.com),登入後可以看到剛剛在xcode中申請的2個signing ID已經建好了. 點選ios development, 就可以下載cer檔了.
6. 申請APP ID. 在member center中的左邊選擇App IDs
  - App ID Description: 描述app
  - App ID Suffix: 使用Explicit App ID才可以用推播. 但只能用在一個app. 使用正規模式的 com.crossappdev.afkitchenskin
7. 加入device. 在member center中的左邊選擇devices.然後加入device的UUID. (也可以用匯入的方式加入100台 devices)
7. 接下來申請provisioning profile. 這個檔案就是將cer, App ID, Device ID組合起來的檔案.
8. 產生後將它下載下來. 點擊2下會啟動XCode. 在XCODE > Preference中選擇account,Click "View Detail"按鈕,可以看到provisioning profiles中已加入.



以上參考以下這三篇

* [如何將自行開發的App丟進iOS裝置](http://blog.xuite.net/sphjlc062218/thinking/165021718-%5BiOS,+Xcode%5D+%E5%A6%82%E4%BD%95%E5%B0%87%E8%87%AA%E8%A1%8C%E9%96%8B%E7%99%BC%E7%9A%84App%E4%B8%9F%E9%80%B2iOS%E8%A3%9D%E7%BD%AE%EF%BC%88iPhone,+iPad%EF%BC%89%E5%9F%B7%E8%A1%8C%EF%BC%882013%E5%B9%B4%E6%96%B0%E7%89%88iOS%E9%96%8B%E7%99%BC%E8%80%85%E7%AE%A1%E7%90%86%E9%A0%81%E9%9D%A2%EF%BC%89)
* [[iOS] App 上架憑證流程筆記](http://andyyou.logdown.com/posts/216618-ios-app-shelves-certificate-process-notes)
* [製作xcode憑證，讓開發的APP可以安裝到iOS裝置做測試  ](http://app-island.com/app/2560/%E8%A3%BD%E4%BD%9Cxcode%E6%86%91%E8%AD%89%EF%BC%8C%E8%AE%93%E9%96%8B%E7%99%BC%E7%9A%84APP%E5%8F%AF%E4%BB%A5%E5%AE%89%E8%A3%9D%E5%88%B0iOS%E8%A3%9D%E7%BD%AE%E5%81%9A%E6%B8%AC%E8%A9%A6)
* [關於 Provisioning Profiles 這些事](http://lamb-mei.com/7/ios-provisioning-profiles/)
