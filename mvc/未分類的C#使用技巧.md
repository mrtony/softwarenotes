未分類的C#使用技巧
------

## using 陳述式在實務應用上的基本觀念

有實做 IDisposable 介面的物件，可以使用using 陳述式來讓該物件所佔用的資源可全部釋放。

	using (Sstem.IO.StreamReader sr = 
         new System.IO.StreamReader(@"C:\test.txt"))

而且sr的使用範圍僅在該using陳述式所包含的大/小括號。

* [using 陳述式在實務應用上的基本觀念](http://blog.miniasp.com/post/2009/10/13/About-CSharp-using-Statement-misunderstanding-on-try-catch-finally.aspx)
* [using 陳述式 (C# 參考)](http://msdn.microsoft.com/zh-tw/library/yh598w02.aspx)

## 以字串方式取得類別物件中的Property的值 
typeof(ClassName).GetProperty(PropertyName).GetValue(Instance, null);

## 查詢目前系統的語系的encoding
目的是為了知道Encoding.Default的預設語系，要先查詢目前使用的語系。

	string path = @"c:\temp\MyTest.txt";
	StreamReader oStreamReader = new StreamReader(path, true);
	System.Diagnostics.Debug.WriteLine(oStreamReader.CurrentEncoding);

[過StreamReader.CurrentEncoding判斷檔案的編碼](http://www.dotblogs.com.tw/rainmaker/archive/2013/05/20/104547.aspx)