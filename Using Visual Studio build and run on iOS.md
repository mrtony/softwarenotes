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
