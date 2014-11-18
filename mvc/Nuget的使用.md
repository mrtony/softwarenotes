Nuget的使用
------


## 列出已安裝
Get-Package

## 如何強制移除

	Uninstall-Package jQuery -Force
其中山**jQuery是所謂的識別碼**，可在nuget的套件管理中看到。

![](http://blog.miniasp.com/image.axd?picture=image_2127.png)

## 如何手動安裝指定版本的套件

	Install-Package jQuery -Version 1.8.3
	Install-Package jQuery -Version 1.11.1

## 如何手動更新套件

	Update-Package NLog

## 常用套件ID

* jQuery: Install-Package jQuery
* jquery UI: Install-Package jQuery.UI.Combined
* jquery mobile: Install-Package jquery.mobile
* Datatables: Install-Package jquery.datatables
* jqGrid: Install-Package Trirand.jqGrid [jQuery jqGrid 4.6.0](https://www.nuget.org/packages/Trirand.jqGrid/)
* json.net: Install-Package Newtonsoft.Json
* http client: Install-Package Microsoft.Net.Http

## 如何作套件還原且不要commit套件進SVN
建立方案後，在方案總管中的方案按右鍵，在選項中選擇**啟用套件還原**，會在方案中建立.nuget的資料夾並含有3個檔案

![](https://googledrive.com/host/0B7okXOykSneqd0VoRWxNVGd5Z1k)

接下來將方案闗閉後，可以刪除package的目錄然後將整個目錄commit到SVN中。之後再checkout專案並以VS2010開啟後，可以使用nuget管理員，它會自動偵測並還原遺漏的套件。 這裡要注意的是像jquery ui或jquery mobile並不會自動還原js, css檔，只有.dll的套件會自動還原。 另外記得要將nuget的設定如下：

![](https://googledrive.com/host/0B7okXOykSneqQUtCZ3MxQkNmaUk)


## 參考資料
* [Nuget Home](https://www.nuget.org/)
* [Package Manager Console Powershell Reference](http://docs.nuget.org/docs/reference/package-manager-console-powershell-reference)
* [保哥教如何強制移除](http://blog.miniasp.com/post/2013/06/11/Downgrading-jQuery-version-with-NuGet.aspx)