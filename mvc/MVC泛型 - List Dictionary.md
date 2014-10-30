MVC泛型 - List Dictionary
------


## List的幾種宣告

	List<int> list = new List<int>() { 1, 3, 5, 7, 9, 2, 4, 6, 8, 0 };
	List<Card> cards = new List<Card>();



## List的用法1
參考 [How to: Initialize Objects by Using an Object Initializer (C# Programming Guide)](http://msdn.microsoft.com/en-us/library/bb397680.aspx)

產生一個List

	List<StudentName> students = new List<StudentName>()
	{
	  new StudentName {FirstName="Craig", LastName="Playstead", ID=116},
	  new StudentName {FirstName="Shu", LastName="Ito", ID=112},
	  new StudentName {FirstName="Gretchen", LastName="Rivas", ID=113},
	  new StudentName {FirstName="Rajesh", LastName="Rotti", ID=114}
	};

## List常用的Method和attribute

* Add()
* Remove()
* IndexOf()
* Count
* 


## Dictionary的用法1
參考 [How to: Initialize a Dictionary with a Collection Initializer (C# Programming Guide)](http://msdn.microsoft.com/en-us/library/bb531208.aspx)

產生一個key pair，其中一個為類別

	Dictionary<int, StudentName> students = new Dictionary<int, StudentName>()
	{
	    { 111, new StudentName {FirstName="Sachin", LastName="Karnik", ID=211}},
	    { 112, new StudentName {FirstName="Dina", LastName="Salimzianova", ID=317}},
	    { 113, new StudentName {FirstName="Andy", LastName="Ruth", ID=198}}
	};


自訂一個dictionary，以webapi回傳

    var result = new Dictionary<string, string>();
    result.Add("insertStatus", "success");
    return result;

另一種寫法

    var result = new Dictionary<string, string>()
    {
        {"insertStatus", "success"}
    };

    return result;

## 參考資料
* [MSDN關於LIST的文件](http://msdn.microsoft.com/zh-tw/library/6sh2ey19(v=vs.110).aspx)
* Headfirst C#原文，page#359
* [如何使用C#將DataTable轉為自訂物件List<class>](http://kyleap.blogspot.tw/2014/01/cdatatablelist.html)
* [Dictionary的一些簡單用法範例](http://www.dotnetperls.com/dictionary)