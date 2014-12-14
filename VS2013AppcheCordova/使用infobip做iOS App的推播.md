使用infobip做iOS App的推播
------

## 取得SSL certificate for notification server(for infobip)

1. 進入apple developer center,並選擇App IDs
![](https://googledrive.com/host/0B7okXOykSneqQmQ0d1RRSWFqREE)

2. 選擇要做推播的那個app後點Edit
![](https://googledrive.com/host/0B7okXOykSneqX1R5UmlOMzViZG8)


3. 選擇Development SSL Certificate的Create Certificate
![](https://googledrive.com/host/0B7okXOykSneqdVc2NUFIMFE2UU0)

4. 要在MAC本機先建立CSR才可以申請SSL certificate
  - 參考[製作xcode憑證，讓開發的APP可以安裝到iOS裝置做測試](http://app-island.com/app/2560/%E8%A3%BD%E4%BD%9Cxcode%E6%86%91%E8%AD%89%EF%BC%8C%E8%AE%93%E9%96%8B%E7%99%BC%E7%9A%84APP%E5%8F%AF%E4%BB%A5%E5%AE%89%E8%A3%9D%E5%88%B0iOS%E8%A3%9D%E7%BD%AE%E5%81%9A%E6%B8%AC%E8%A9%A6)製作Certificate Signing Request (CSR)
  - 做好CSR後上傳
![](https://googledrive.com/host/0B7okXOykSneqbkNVX2JleVRIZGs)
![](https://googledrive.com/host/0B7okXOykSneqalhMeTJwcGVzMUk)

5. 上傳好CSR後即可得到SSL certificate
![](https://googledrive.com/host/0B7okXOykSneqNElhU24wZWYwZ1E)

6. 下載並執行該檔案後會自動匯到key tool.
![](https://googledrive.com/host/0B7okXOykSneqeTAyUk1hLVVjU28)
![](https://googledrive.com/host/0B7okXOykSneqOG1FNmpaVFM2aTQ)

7. 在key tool中選擇憑證類別並選到APN的憑證
![](https://googledrive.com/host/0B7okXOykSneqXzdYUHV3X3I3RzA)

8. 按右鍵選擇匯出
![](https://googledrive.com/host/0B7okXOykSneqZnk4SFY4X3NLamM)

9. 選擇P12格式後,輸入檔名選儲存. 之後可輸入憑證密碼
![](https://googledrive.com/host/0B7okXOykSneqTEVONlFFcmlzOWM)

10. 用這個p12的檔案產生.pem檔. 在MAC terminal下產生.pem檔 (follow infobip guide). 貼上這一行指令

	openssl pkcs12 -in apnComCrossappdevafkitchenskin.p12 -out apnComCrossappdevafkitchenskin.pem -nodes

![](https://googledrive.com/host/0B7okXOykSneqZzhrTFVaNWx6OGM)

## 加入infobip plugin

在VS2013中加入infobip git, 本來以為只要在config.xml中的custom tab加入https://github.com/infobip/push-plugin-cordova.git即可,但每次加入都會導致VS2013當掉. 所以用手動的方式加入:

1. 打開config.xml的程式碼檢視
2. 加入以下

	<vs:plugin name="com.infobip.push.cordova" version="0.2.5" />
3. 在專案的plugins目錄中手動建立com.infobip.push.cordova, 並將將https://github.com/infobip/push-plugin-cordova.git下載後放入該目錄中.
4. 進到infobip push專案, 因為之前已建立了for android的專案,所以不需再加入新app, 點選左邊Platforms, 將iOS打勾, 加入ios的certificate (.p12)後選update即可.
5. 完成後會顯示app已支援iOS的圖案.
6. 加入infobip提供的sample code來註冊device. 然後選擇要使用來測試的iphone手機平台來做build. 在build完成後,以xcode打開該專案,然後選擇連到MAC的iphone裝置, 然後按play標誌後即可在手機上上看到註冊訊息.
7. 到infobip上可以看statistics看到已有一台裝置註冊. 將該app在背景執行, 傳送推播到該裝置即可看到訊息中心跳出推播訊息.


## 參考

* [Infobip Apple iOS library](https://push.infobip.com/docs/platforms/ios#apns)
* [Manage Plugins for Apps Built with Visual Studio Tools for Apache Cordova](http://msdn.microsoft.com/en-us/library/dn757051.aspx#List)
