MVC-發行到網站遇到的問題
------


## System.Web.Http.WebHost找不到

1. 問題

Could not load file or assembly 'System.Web.Http.WebHost, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35' or one of its dependencies. 系統找不到指定的檔案。

2. 解決方式
	* 用nuget強制移除System.Web.Http.WebHost: Uninstall-Package Microsoft.AspNet.WebApi.WebHost -Force
	* 再安裝一次:Install-Package Microsoft.AspNet.WebApi.WebHost -Version 4.0.30506
	* 再重建後發行即可