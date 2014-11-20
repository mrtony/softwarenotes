MVC泛型 - List Dictionary
------

## List 用法
### List的幾種宣告

	List<int> list = new List<int>() { 1, 3, 5, 7, 9, 2, 4, 6, 8, 0 };
	List<Card> cards = new List<Card>();



### List Example

參考教學文章

* [Part 74 - List collection class in c#](http://csharp-video-tutorials.blogspot.tw/2013/08/part-74-list-collection-class-in-c.html) 
* [Part 75 - List collection class in c# continued](http://csharp-video-tutorials.blogspot.tw/2013/08/part-75-list-collection-class-in-c.html)

學習過程中將範例作一次練習，並放到github - [Part-74-我的練習](https://github.com/mrtony/softwarenotes/blob/master/mvc/example/%E6%B3%9B%E5%9E%8B_List%E7%AF%84%E4%BE%8B/Part%2074%20-%20List%20collection%20class-Program.cs)

此練習包含：

* AddItemToList: Add()
* 以foreach遍歷List的內容
* Add可加入衍生類別的物件
* Insert值到List的任一個Index
* IndexOf:取得符合條件的索引值 (3個多載)


### 加入物件到List
參考 [How to: Initialize Objects by Using an Object Initializer (C# Programming Guide)](http://msdn.microsoft.com/en-us/library/bb397680.aspx)

產生一個List

	List<StudentName> students = new List<StudentName>()
	{
	  new StudentName {FirstName="Craig", LastName="Playstead", ID=116},
	  new StudentName {FirstName="Shu", LastName="Ito", ID=112},
	  new StudentName {FirstName="Gretchen", LastName="Rivas", ID=113},
	  new StudentName {FirstName="Rajesh", LastName="Rotti", ID=114}
	};

	//output: Craig
    Console.WriteLine(students[0].FirstName);

	//output: Craig,Shu,Gretchen,Rajesh
    foreach (var item in students)
    {
        Console.Write(item.FirstName);
    }

### Insert物件到List

	list.Insert(1, new ClassName() { lino=i.ToString()});

### DataTable與List互轉
在C#中沒有DataTabel轉成List的Method，所以大部份的資料都顯示要自己寫。

### List常用的Method和attribute

* Add()
* Remove()
* IndexOf()
* Count
* 

參考 C# in a nutshell 5th edition

## Dictionary的用法

### 以 Dictionary來建立格式化的輸出
Dictionary<string, string> sbcFieldName = new Dictionary<string, string>()
{
    {"SBCEmail", "電子郵件："},
    {"SBCTel1No", "通訊電話："}
};
Dictionary<string, string> sbcFieldVal = new Dictionary<string, string>();

sbcFieldVal.Add("SBCEmail", "test@mail.com");
sbcFieldVal.Add("SBCTel1No", "1234567");

foreach (var pair in sbcFieldName)
{
    if (string.IsNullOrEmpty(sbcFieldVal[pair.Key]) == false)
        sbChangeList.Append("<li>").Append(sbcFieldName[pair.Key]).Append(sbcFieldVal[pair.Key]).Append("</li>");
}

//output:
<li>電子郵件：test@mail.com</li>
<li>通訊電話：：1234567</li>

### 用法2
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

## IEnumerable


## 其他List議題

### List<>與IList<T>有什麼不同？
讀了幾篇網路上的文章後，我自己歸納如下
* IList = Interface + List。也就是說只要I開頭的就只是Interface，所以不能實例化，而List是個Class所以可以實例化。

	IList<Employee> EmpList = new List<Employee>();	//合法
	List<Employee> EmpList = new List<Employee>();	//合法
	IList<Employee> EmpList = new IList<Employee>();	//不合法

而使用時機就是說，若不需要實例化List，則使用IList。

## Book

* c#5.0 in a nutshell 5th edition: Ch7 - Collections
* 

## Q&A

* [why use IList or List?](http://stackoverflow.com/questions/8717582/why-use-ilist-or-list)
* [Difference between IList<T\\> and List<T\\>](http://stackoverflow.com/questions/12369570/difference-between-ilistt-and-listt)

## 參考資料
* [MSDN關於LIST的文件](http://msdn.microsoft.com/zh-tw/library/6sh2ey19(v=vs.110).aspx)
* Headfirst C#原文，page#359
* [如何使用C#將DataTable轉為自訂物件List<class>](http://kyleap.blogspot.tw/2014/01/cdatatablelist.html)
* [Dictionary的一些簡單用法範例](http://www.dotnetperls.com/dictionary)
* [C# Generic Method](http://www.dotnetperls.com/generic-method)：說明如何使用List<T\>作為回傳值的用法
* [C# IList](http://www.dotnetperls.com/ilist): 範例說明IList的用法。
* [C# IEnumerable](http://www.dotnetperls.com/ienumerable): 範例說明IEnumerable的用法。
* [善用 IEnumerable 讓方法通吃 array 與 List](http://www.dotblogs.com.tw/city7/archive/2013/11/29/131970.aspx)
* [IEnumerable、IEnumerator 與 IEnumerable<T>、IEnumerator<T>](http://xingulin.tumblr.com/post/48831985749/ienumerable-ienumerator)