mvc-Elmah-網站Log套件使用要點
------

## 安裝
在.net MVC專案中，使用Nuget加入Elmah.MVC，它會自動加入所需的相依性套件(如Elmah).

參考[ASP.NET MVC + ELMAH 監控並記錄你的網站錯誤資訊 1](http://kevintsengtw.blogspot.tw/2011/10/aspnet-mvc-elmah-1.html#.VGVWF_mUdGY)有詳細的安裝及使用。另外有提到其他如ELMAH on XML Log及ELMAH Core Library(no config)我並沒有安裝。

## 使用技巧

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

### 發生錯誤時寄信到指定信箱


### Log要存到檔案或SQL？

