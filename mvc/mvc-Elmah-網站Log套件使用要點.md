mvc-Elmah-網站Log套件使用要點
------

## 安裝
在.net MVC專案中，使用Nuget加入Elmah.MVC，它會自動加入所需的相依性套件(如Elmah).

參考[ASP.NET MVC + ELMAH 監控並記錄你的網站錯誤資訊 1](http://kevintsengtw.blogspot.tw/2011/10/aspnet-mvc-elmah-1.html#.VGVWF_mUdGY)有詳細的安裝及使用。另外有提到其他如ELMAH on XML Log及ELMAH Core Library(no config)我並沒有安裝。

## 使用技巧

### 如何產生第一個錯誤來做Log?
1. 建立一個標準的MVC 網際網路應用程式
2. 執行並輸入http://localhost:56851/index
3. 因為該路徑不存在，會出現**'/' 應用程式中發生伺服器錯誤。**
4. 到http://localhost:56851/elmah可以取得該error log

### 如何瀏覽Dashboard？

### 是否要允許遠端瀏覽？

### 發生錯誤自動導到Error.aspx
是否可以用類似的方法在MVC專案中導到Error.cshtml?

參考[這一篇](http://www.dotblogs.com.tw/ricochen/archive/2010/03/10/13960.aspx)介紹ELMAH中有提到發生錯誤自動導到Error.aspx

或是在<system.web>中加入

    <customErrors mode="On" defaultRedirect="Index">
      <error statusCode="404" redirect="Index"/>
      <error statusCode="500" redirect="Index"/>
    </customErrors>

只要發生錯誤,就會顯示Error.cshtml的內容，而不會顯示一些系統的資訊。



### Log存到檔案設定
參考[使用 Elmah 來記錄 ASP.NET 網站的錯誤](http://huan-lin.blogspot.com/2013/02/something-about-elmah-error-logging.html)，在使用nuget安裝好Elmah後，會在web.config中加入一個elmah的空區段。將xml及mail的設定加入。
	<?xml version="1.0" encoding="utf-8"?>
	<configuration>
	  <elmah>
	    <security allowRemoteAccess="false" />
	    <errorLog type="Elmah.XmlFileErrorLog, Elmah" logPath="~/Log/Error" />
	  </elmah>
	</configuration>

在發生錯誤後，log會存到網站目錄的Log資料夾中。

也可以指定絕對路徑-參考[如何偵錯--ELMAH 絕妙的偵錯工具安全架設於ASP.NET MVC](http://demo.tc/Post/606)

	<errorLog type="Elmah.XmlFileErrorLog, Elmah" logPath="D:/Elmah_Log" />   

### 發生錯誤時寄信到指定信箱

	<?xml version="1.0" encoding="utf-8"?>
	<configuration>
	  <elmah>
	    <security allowRemoteAccess="false" />
	    <errorMail
	      from="michael@mycompany.com"
	      to="michael@mycompany.com"
	      subject="XX 網站又出包了!"
	      async="true"     
	      smtpServer="mail.mycompany.com"
	      smtpPort="25"
	      />
	  </elmah>
	</configuration>

### Log檔存到SQL
參考[使用Asp.Net MVC打造Web Api (15) - 使用Elmah收集錯誤資訊](http://kirkchen.logdown.com/posts/147650-using-aspnet-mvc-to-build-web-api-15-use-elmah-to-collect-error-messages)

### 設定篩選器來過濾錯誤資訊-todo
並非所有的錯誤資料都需要記錄，所以可以設定篩選器來過濾不要的資訊。 參考[如何為網站錯誤記錄模組 Elmah 設定篩選器來過濾錯誤資訊](http://coding.anyun.tw/2012/02/23/elmah-errorfilter/)

## 其他雜記

### 有用try/catch就無法補捉
參考[使用NLog - Advanced .NET Logging (1)](http://kevintsengtw.blogspot.tw/2011/10/nlog-advanced-net-logging-1.html#.VGqSufmUdGY)


## 參考
* [官方wiki](https://code.google.com/p/elmah/wiki/DotNetSlackersArticle)
* [網站偵錯紀錄-Elmah-設定小記錄](http://www.dotblogs.com.tw/c5todo/archive/2013/10/16/124499.aspx): 有教使用try/catch時如何Elmah做log.

