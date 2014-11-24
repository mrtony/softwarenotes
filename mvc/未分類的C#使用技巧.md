未分類的C#使用技巧
------

## using 陳述式在實務應用上的基本觀念

有實做 IDisposable 介面的物件，可以使用using 陳述式來讓該物件所佔用的資源可全部釋放。

	using (Sstem.IO.StreamReader sr = 
         new System.IO.StreamReader(@"C:\test.txt"))

而且sr的使用範圍僅在該using陳述式所包含的大/小括號。

* [using 陳述式在實務應用上的基本觀念](http://blog.miniasp.com/post/2009/10/13/About-CSharp-using-Statement-misunderstanding-on-try-catch-finally.aspx)
* [using 陳述式 (C# 參考)](http://msdn.microsoft.com/zh-tw/library/yh598w02.aspx)
* [使用 using 或 try/finally 清理資源](http://www.dotblogs.com.tw/yc421206/archive/2011/06/09/27445.aspx)

## 以字串方式取得類別物件中的Property的值 
typeof(ClassName).GetProperty(PropertyName).GetValue(Instance, null);

## 類似JS for in作法取得物件中的Property的名字

	foreach (PropertyInfo propertyInfo in oCacliais.GetType().GetProperties())
	{
	    if (propertyInfo.Name == "NameOfProperty")
	        strPara = strPara + "&" + Attribute + "1=" + Data;
	    else
	    {
	        strPara = strPara + "&" + propertyInfo.Name + "1=" + tmpLino4.First<JObject>()[propertyInfo.Name].ToString();
	    }
	}

* [Looping through Object's properties in C#](http://www.codeproject.com/Articles/206999/Looping-through-Objects-properties-in-C-Sharp)
* [Loop Through An Objects Properties In C#](http://stackoverflow.com/questions/957783/loop-through-an-objects-properties-in-c-sharp)
* [Iterate through properties and values of an object returned via a linq query on a domain model](http://stackoverflow.com/questions/9724247/iterate-through-properties-and-values-of-an-object-returned-via-a-linq-query-on)
* [loop through object and get properties](http://stackoverflow.com/questions/15586123/loop-through-object-and-get-properties)
* [Reflection Property](http://www.dotnetperls.com/reflection-property)
* [PropertyInfo.GetValue(myObject, null).GetType() returns “Object reference not set to an instance of an object.”](http://stackoverflow.com/questions/5748931/propertyinfo-getvaluemyobject-null-gettype-returns-object-reference-not-se)

## 設定物件的Property的值

	using System.Reflection;
	MyObject obj = new MyObject();
	PropertyInfo prop = obj.GetType().GetProperty("Name", BindingFlags.Public | BindingFlags.Instance);
	if(null != prop && prop.CanWrite)
	{
	    prop.SetValue(obj, "MyName", null);
	}

[Set object property using reflection](http://stackoverflow.com/questions/619767/set-object-property-using-reflection)

## 查詢目前系統的語系的encoding
目的是為了知道Encoding.Default的預設語系，要先查詢目前使用的語系。

	string path = @"c:\temp\MyTest.txt";
	StreamReader oStreamReader = new StreamReader(path, true);
	System.Diagnostics.Debug.WriteLine(oStreamReader.CurrentEncoding);

[過StreamReader.CurrentEncoding判斷檔案的編碼](http://www.dotblogs.com.tw/rainmaker/archive/2013/05/20/104547.aspx)

## 設算程式執行時間
使用Stopwatch類別

        Stopwatch sw = new Stopwatch();

        ContactDataContext db = new ContactDataContext();

        var result = from contact in db.SbcApplyChange
                     where contact.Sett == "9802398"
                     select contact;
        sw.Stop();
        Console.WriteLine("Test 1: {0}ms",
            sw.ElapsedMilliseconds);