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

1. 建立一個project後會產生一個project ID (在project的主頁),等同於sender id. [Sender ID](http://developer.android.com/google/gcm/gcm.html#senderid)
1. 建立伺服器應用程式的金鑰給App Server: **API和驗證**中的**憑證**畫面中的**公開 API 存取**建立新的金鑰。這裡我們選擇**伺服器金鑰**，它會說明此金鑰可部署在android app中，直接按建立後就會產生一組API Key。
2. 產生一組sender id: **API和驗證**中的**憑證**畫面中的**OATH** --> 建立用戶端ID>服務帳戶，建立後會產生一個.p12的檔及密碼，client ID(用戶端 ID)顯示在畫面上。  --> 與GCM無關??

連結app - [Google Play Developer Console](https://play.google.com/apps/publish/signup/)

1. 建立一個app - crossApp
2. 進入該app的編輯，選擇**服務和API**
3. 在**GOOGLE 雲端通訊 (GCM)**中,點選**連結寄件者編號**，將剛才申請到的API key貼上。 --> 這樣表示android app可以使用 GCM?





Note:

1. App Server是否為自行建立的server,用來發送推播給GCM? 


## 參考

* [](http://oldgrayduck.blogspot.tw/2012/11/android-gcmgoogle-cloud-messaging.html)
* 