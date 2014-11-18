mvc-NLog-Log套件使用要點
------

## 安裝
在.net MVC專案中，使用Nuget安裝3個套件

* NLog
* NLog Configuration (可以手動安裝: [NLog @ CodePlex](http://nlog.codeplex.com/releases/))
* NLog Schema for IntelliSense(TM)

參考[使用NLog - Advanced .NET Logging](http://kevintsengtw.blogspot.tw/2011/10/nlog-advanced-net-logging-1.html#.VGqgS_mUdGZ)有詳細的安裝及使用。

![](https://googledrive.com/host/0B7okXOykSneqbmd4aXdNZzhMQ1E)

## 設定

安裝完成後，在方案總管會多出一個NLog.Config(要安裝NLog Configuration套件才會有)的檔案：

![](https://googledrive.com/host/0B7okXOykSneqUDBfTHBiRWVadTA)

### 修改NLog.config內容
首先要先了解兩個部分，一個是「targets」另一個是「rules」，這兩個設定缺一不可:

* **targets**，是用來讓我們定義Log要存放的媒體為何，定義Log的格式內容。
* **rules**，用來定義各種Level的Log的處理方式，依據各種level所定義要使用哪一個taget來存放資料。

		<?xml version="1.0" encoding="utf-8" ?>
		<nlog xmlns="http://www.nlog-project.org/schemas/NLog.xsd"
		      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
		
		  <!-- 
		  See https://github.com/nlog/nlog/wiki/Configuration-file 
		  for information on customizing logging rules and outputs.
		   -->
		  <targets>
		    <!-- add your targets here -->
		    <target name="file" xsi:type="File"
		            fileName="C:/Temp/NLog_SSAH_Log/${shortdate}.txt" 
		            layout="${longdate} ${uppercase:${level}} ${message}" />
		    <target name="FatalFile" xsi:type="File"
		          fileName="C:/Temp/NLog_SSAH_Log/${shortdate}_FatalFile.txt"
		          layout="${longdate} | ${level:uppercase=true} | ${logger} | ${message} ${newline}" />
	
		  </targets>
		
		  <rules>
		    <!--
		    <logger name="*" levels="Trace, Debug, Info, Warn" writeTo="file" />
			<logger name="*" level="Fatal" writeTo="FatalFile" />
		    -->
		    <logger name="*" maxlevel="Warn" writeTo="file" />
		    <logger name="*" minlevel="Error" writeTo="FatalFile" />
		  </rules>
		</nlog>

在target中可以定義要寫入的檔案或寫到其他如SQL中。我們先以寫到檔案為例：
* 第1個target定義給Trace，Debug，Info，Warn的錯誤等級時寫入的檔案及檔名。
* 第2個target定義給Error，Faltal的錯誤等級時寫入的檔案及檔名。

## 各種不同層級錯誤的使用
參考[log4j](http://en.wikipedia.org/wiki/Log4j)的介紹，我的理解如下：

* Info:通常是在runtime去丟出訊息到console.
* Debug: 通常用在開發時期，只記錄到Log檔
* Trace: 用來記錄程式流程，要儘可能詳細，只記錄到Log檔
* Warring: 通常用來記錄API錯誤

有一篇[Log levels: Would you consider DEBUG finer than TRACE?](http://stackoverflow.com/questions/11185872/log-levels-would-you-consider-debug-finer-than-trace)說到，在.net的世界，Debug和trace應視為相同，那就統一使用**Trace**好了。

## 如何在程式中記錄Log
在每個Class中加入這一行

	private static Logger logger = LogManager.GetCurrentClassLogger();
然後在程式中加入以下的Log

      logger.Trace("我是Trace");
      logger.Debug("我是Debug");
      logger.Info("我是Info");
      logger.Warn("我是Warn");
      logger.Error("我是Error");
      logger.Fatal("我是Fatal");
再來開啟Log檔就可以看到不同的錯誤等級會記錄到不同的檔案。

## 參考
* [官方wiki](https://github.com/nlog/NLog/wiki/Configuration-file)

