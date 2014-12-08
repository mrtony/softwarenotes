mvc-步署到本機或伺服器的IIS
------
此文件說明如何在Visual Studio下將網站步署到IIS

## 以檔案系統方式步署到本機IIS

### 在Windows7下安裝IIS

1. 在控制台>程式集>程式和功能(在右邊的frame的上方)>開啟或關閉Windows功能
2. 將IIS的功能點選安裝
![](https://googledrive.com/host/0B7okXOykSneqLURnaGoxUUx0YUE)

### 為IIS安裝Asp.net 4.0的ISAPI filter
在步署asp.net mvc4後會發生錯誤，主要是因為裝好IIS後只有安裝.net 2.0的ISAPI filter。所以要手動安裝。

1. 以系統管理員身份執行cmd
2. 進到 C:\Windows\Microsoft.NET\Framework64\v4.0.30319
3. 執行 .\aspnet_regiis.exe -i
接下來就會自動安裝ISAPI for .net 4.0。再度執行mvc網站即可正常執行。
![](https://googledrive.com/host/0B7okXOykSneqczV2RHdLNUJaLVU)

## 以檔案步署的方式將mvc網站步署到本機IIS

### 設定好實體路徑
假設我們要將網站內容的實體路徑設在 C:\Temp\ContactMaintain\1中，先新增發行設定檔

![](https://googledrive.com/host/0B7okXOykSneqamJMMzcxRXFNdGc)

再點選發行後即可將網站內容輸出到C:\Temp\ContactMaintain\1的目錄中。

### 在IIS中的設定

1. 先新增一個應用程式集區ContactMaintain，並將.net的版本設為4.0
2. 再到DefaultSite的站台新增一個虛擬目錄，假設命名為ContactMaintain，並將實體目錄指向 C:\Temp\ContactMaintain\1

![](https://googledrive.com/host/0B7okXOykSneqR2QzT1ZCOVR6RHM)
![](https://googledrive.com/host/0B7okXOykSneqNWVuYWlFblFKSzA)

如此就大功告成，可以在使用本機上的IIS來使用網站。而要實際步署到伺服器端的IIS也是相同的步驟，只是會先將檔案輸出到本機的目錄，再輸出到Server端。

## 為何在部署到IIS伺服器後會發生缺少檔案的錯誤
在使用預設的MVC專案建置好之後,使用VS的檔案部署方式部署到IIS server後去開啟網站會發生缺少檔案的問題(要在server端開啟網頁做測試),最常發生的就是少了 **System.Web.Http.WebHost**這個檔。 後來找到原因是在專案建置好後,在參考中的dll檔案的一個屬性:複製到本機被設為false. 所以只要將該屬性設為true即可解決檔案部署時缺少檔案的問題。

![](https://googledrive.com/host/0B7okXOykSneqRUZkcFM4dW1JbzQ)

## 如何建立多個版本的網站供測試

## 如何建立備緩切換版本
在網站的第一個版本上線後，通常會繼續開發第2個版本，一旦第2個版本開發完成後，會希望有一段時間可以來測試，在測試完成並上線後，很有可能在第2版會發生問題，必需快速的切換回舊版本。 因此我們可以利用IIS中切換實體目錄的方式來解決這個問題。

1. 第一個正式版本發行到某資料夾的 SiteName/1，建立的虛擬目錄名稱為SiteName，實體路徑指向 SiteName/1，並建立一個 SiteName的應用程式集區並指向該集區。
2. 第二個正式版本發行到某資料夾的 SiteName/2，不需要再建立虛擬目錄，將實體路徑指向 SiteName/2，並建指向同一個 SiteName的應用程式集區。
3. 一旦第二版發生問題需要切回第一版，只要再將實體路徑設為 SiteName/2 就可以將網站切回第一版了。
