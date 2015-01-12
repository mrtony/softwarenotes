oData使用Webapi
------

## 專案環境

VS2010 with MVC4 update

## 環境及程式碼
1. 安裝相關Nuget套件

Install-Package Microsoft.Data.OData

Install-Package Microsoft.AspNet.WebApi.OData

![](https://googledrive.com/host/0B7okXOykSneqVVRYUWg4WWNLVE0)

2. 以LINQ to SQL加入資料表
3. 以Values的API controller的Get()修改如下

        [Queryable]
        public IQueryable<AuditPermission> Get()
        {
            sampleDataContext db = new sampleDataContext();
            var list = db.AuditPermission.Select(x => x);
            return list;
        }

## 測試及使用

1. top

		//取出第一筆
		http://localhost:50568/api/values?$top=1

2. skip

		//忽略前10筆
		http://localhost:50568/api/myapi?$skip=10

3. 排序 (orderby)

		//遞減
		http://localhost:50568/api/myapi?$orderby=Emno desc

		//遞增
		http://localhost:50568/api/myapi?$orderby=Emno asc

4. 過濾(filter)(像Select)

		//取出Emno=111959的那一筆
		http://localhost:50568/api/values?$filter=Emno eq '111959'


## 參考資料

* [oData官網-URI Conventions](http://www.odata.org/documentation/odata-version-2-0/uri-conventions/)
* [微軟提供oData V3的Webapi的應用教學-Supporting OData Query Options in ASP.NET Web API 2](http://www.asp.net/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options): 必看!! 我的sample code是參考這篇寫出來的.
* [Open Data Protocol 簡述](http://www.dotblogs.com.tw/jaigi/archive/2013/05/21/104660.aspx)