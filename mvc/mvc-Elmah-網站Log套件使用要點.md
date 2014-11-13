mvc-Elmah-網站Log套件使用要點
------

## 安裝
在.net MVC專案中，使用Nuget加入Elmah.MVC，它會自動加入所需的相依性套件(如Elmah).

## 使用技巧

### 發生錯誤自動導到Error.aspx
是否可以用類似的方法在MVC專案中導到Error.cshtml?

參考[這一篇](http://www.dotblogs.com.tw/ricochen/archive/2010/03/10/13960.aspx)介紹ELMAH中有提到發生錯誤自動導到Error.aspx

或是在<system.web>中加入

    <customErrors mode="On" defaultRedirect="Index">
      <error statusCode="404" redirect="Index"/>
      <error statusCode="500" redirect="Index"/>
    </customErrors>

只要發生錯誤,就會顯示Error.cshtml的內容。