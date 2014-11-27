LINQ-Dynamic Query
------

一開始對這個主題還不是很了解，今天終於知道為什麼要有它了!! 狀況是Web API提供一個查詢的界面，查詢條件會動態的依使用者的身份會得到不同的結果。 使用SQL的command就沒有問題，因為它可以提供動態查詢(如Srtr=""或Srtr="3")。


## 使用Dynamic query

### 簡單說明
找出Status為10的字串的資料,只取2筆。


	var result = db.SbcApplyChange.Where("Status == @0", "10").Take(2);

若要再加參數Sett=xxx

	var result = db.SbcApplyChange.Where("Status == @0 and Sett == @1", "10", "xxx").Take(2);

依序號@0, @1, @2加下去增加查詢條件

### 模擬出between

	var result = db.SbcApplyChange.Where("(pplyDate >= @0 and ApplyDate <= @1", "103/11/01", "103/11/30");
要注意的是@1和@2不可為空字串。

### between加上另一個條件

	var result = db.SbcApplyChange.Where("(ApplyDate >= @0 and ApplyDate <= @1) and Srtr==@2", "103/11/01", "103/11/30", "3");
第3個條件@2可以為空白，找出的資料會忽略掉該條件

	var result = db.SbcApplyChange.Where("(ApplyDate >= @0 and ApplyDate <= @1) and Srtr==@2", "103/11/01", "103/11/30", "");


## Nuget套件

[Nuget網址](https://www.nuget.org/packages/System.Linq.Dynamic/)

安裝命令

	Install-Package System.Linq.Dynamic


## 參考

*[Dynamic LINQ 組合查詢條件救星](http://weisnote.blogspot.tw/2013/03/dynamic-linq.html)

