PUSH
------

好像錯了....
1. 到[到Google Developers ConsolE](https://console.developers.google.com/project)中拿到API Key
	* 建立一個Project
	* 將這個Project的Google Cloud Messaging for Android的API設定為啟用。
	* 替這個專案加入一個能讓App Server使用的Public API Key --> 在**API和驗證**中的**憑證**畫面中的**公開 API 存取**建立新的金鑰。這裡我們選擇**Android金鑰**，它會說明此金鑰可部署在android app中，直接按建立後就會產生一組API Key.
	* 替這個專案加入一個Client ID --> 在**API和驗證**中的**憑證**畫面中的**OAuth**建立新的用戶端ID。這裡我們選擇*已安裝的應用程式*，輸入產品名稱(??應不需綁定?)後，需要建立**用戶端ID (client ID)**.
	* 將API Key存到App Server(**這個要自己建?**)中，再將Client ID(或是Project number)存到要接收推播的Android App中，作為Sender ID



重新再來

產生api key及sender ID(project ID) - [Google developer API](https://console.developers.google.com/project)
https://drive.google.com/file/d/0B7okXOykSneqdHdWdWswazdKeUk/view?usp=sharing
1. 建立一個project後會產生一個project ID (在project的主頁). 

![](https://googledrive.com/host/0B7okXOykSneqdHdWdWswazdKeUk)
參考說明[Sender ID](http://developer.android.com/google/gcm/gcm.html#senderid)

2. 點選該Project後，在Overview page可以看到project ID及Project number.

![](https://googledrive.com/host/0B7okXOykSneqT2xROXpNZ1dJVFU)

3. 將Google Cloud Messaging for Android的API設定為啟用。在左邊的API頁面中，找到該選項並將它設為開啟。

![](https://googledrive.com/host/0B7okXOykSneqY2Z4WjVLQ0pvcmc)


4. 建立伺服器應用程式的金鑰給App Server: 在左邊的Credentials頁面中的**Public API access**選項選擇**Create New Key**, 再選擇**Server Key**後，可以設定App Server存取的IP位址。這裡先不設定,所以任何IP皆可存取. 按下Create按鈕後即產生一組API Key. 這就是提供給app使用的api key,稍後在在google play console中建立的app就可以透過這個api key產生連結.

![](https://googledrive.com/host/0B7okXOykSneqUllaVGdxcjQwMkU)

![](https://googledrive.com/host/0B7okXOykSneqUTg1S1FVZFRtYVE)

![](https://googledrive.com/host/0B7okXOykSneqLWlRcldEZDQ0WVE)

![](https://googledrive.com/host/0B7okXOykSneqTUlmV2I2ZFdnaFU)

5. 建立Oath2.0: 在左邊的Credentials頁面中的**Public API access**選項選擇**Create New Client ID**, 再選擇**Server Account**後，在畫面中選點選建立,然後會自動下載一個.p12的檔案,並給予一組密碼,並且產生一組Client ID (還不知這有何用途!!)

![](https://googledrive.com/host/0B7okXOykSneqakFLTXl5M1JEdE0)

![](https://googledrive.com/host/0B7okXOykSneqWDNOMHMtV0MwRnM)


6. 到[Google Play Console](https://play.google.com/apps/publish/signup/)中建立好一個App。然後進入該app的設定畫面並點選**服務和API**,在**GCM**的設定部份點選**連結寄件者編號**。依google的文件說明,這只是用來取得GCM的統計資料?? 與GCM無關?

![](https://googledrive.com/host/0B7okXOykSneqRGI1bk5OZkFXQ3c)

輸入剛才取得的API key

![](https://googledrive.com/host/0B7okXOykSneqT05oeVFLQTAyMmM)


基本上就設定完成，再來就是如何在app中將sender ID (project number?)送給GCM,並取得GCM傳送的registration ID後再傳送給app server,然後app server再發送push notification給特定的android device.




## 問題

1. Project Number與Project ID有何不同
2. 


Note:

1. App Server是否為自行建立的server,用來發送推播給GCM? 


## 參考

* [](http://oldgrayduck.blogspot.tw/2012/11/android-gcmgoogle-cloud-messaging.html)