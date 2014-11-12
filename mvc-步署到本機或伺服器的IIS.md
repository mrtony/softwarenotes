mvc-步署到本機或伺服器的IIS
------

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
2. 再到DefaultSite的站台新增一個虛擬目錄，假設命名為ContactMaintain，並將實體目錄指向 C:\Temp\ContactMaintain
![](https://googledrive.com/host/0B7okXOykSneqZWF0OVEzUks2MUk)
3. 再到這個目錄下新增一個目錄，因為版本為1，將其命名為1，並將實體目錄指向 C:\Temp\ContactMaintain\1，並將應用程式集區指向先前建立好的集區ContactMaintain
![](https://googledrive.com/host/0B7okXOykSneqQ3hLS1FKbmpWM2M)

如此就大功告成，可以在使用本機上的IIS來使用網站。而要實際步署到伺服器端的IIS也是相同的步驟，只是會先將檔案輸出到本機的目錄，再輸出到Server端。
