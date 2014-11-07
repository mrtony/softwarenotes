LINQ使用筆記
------


## 使用LINQ查詢一個Array

	using System;
	using System.Linq;
	
	public class Exercise
	{
	    static int Main(string[] args)
	    {
	        var Numbers = new double[] { 12.44, 525.38, 6.28, 2448.32, 632.04 };
	
	        var Number = from n in Numbers select n;
	
	        foreach(var member in Number)
	            Console.WriteLine("Number: {0}", member);
	
	        return 0;
	    }
	}

輸出 12.44, 525.38, 6.28, 2448.32, 632.04

## query出結果後取得資料的方法

	string xml = "<root><User id='2' name='tony'></User><User id='3' name='peter'></User></root>";
	
	XmlDocument doc = new XmlDocument();
	doc.LoadXml(xml);
	
	string json = JsonConvert.SerializeXmlNode(doc);
	json = JsonConvert.SerializeXmlNode(doc, Newtonsoft.Json.Formatting.None, true);
	json = json.Replace("@", string.Empty);
	JObject restoredObject = JObject.Parse(json);
	JArray array = (JArray)restoredObject["User"];
	List<User> myList = array.ToObject<List<User>>();
	var result = from objs in myList
	            select objs;
	
	Console.WriteLine(result.Count());	//output: 2
	Console.WriteLine(result.First<User>().name);	//output: tony
	Console.WriteLine(result.ElementAt(1).name);	//output peter
	
	foreach (var item in result)
	{
	    Console.WriteLine(item.name);	//output: tony, peter
	}

	//找出結果只有1筆的
	var result1 = from objs in myList
	            where objs.name == "tony"
	            select objs;

	result1.Single<User>().name;	//output: tony

另外也可用IEnumerable但不知有什麼差異

	IEnumerable<User> result1 = from objs in myList
	                           where objs.name == "tony"
	                           select objs;


## 參考

* [Querying a List](http://www.functionx.com/csharp3/Lesson36.htm) : 有提供很完整的範例。還有提供物件陣列查詢,orderby
* [逐步解說：在 C# 中撰寫查詢 (LINQ)](http://msdn.microsoft.com/zh-tw/library/bb397900.aspx): MSDN提供的說明, 有提供範例。
* [[C#]LINQ–GroupBy 群組](https://kw0006667.wordpress.com/2013/05/31/clinqgroupby-%E7%BE%A4%E7%B5%84/)
* [Using LINQ Queries](http://www.codeproject.com/Articles/286255/Using-LINQ-Queries#Basic)