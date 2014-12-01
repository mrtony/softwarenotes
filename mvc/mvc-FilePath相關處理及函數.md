mvc-FilePath相關處理及函數
------


## 字串及路徑處理

### @符號
參考這一篇[@(at) sign in file path/string](http://stackoverflow.com/questions/5179389/at-sign-in-file-path-string)提到在處理路徑字串時，若在前面加入 **@** 符號，則路徑中則不需加入 **\** 的跳脫字元。看一下範例：

	//沒加@
	string path = "\\Temp\\Test";

	//有加@
	string path = @"\Temp\Test";