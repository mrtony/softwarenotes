LINQ-IEnumerable-IQueryable
------


在學習LINQ的過程中，常會被查詢結果為IEnumerable或IQueryable弄得有點混淆。在看過一些文章並作了實驗後，發現不同的查詢來源，C#會自動去使用不同的型別。使用database context就會去使用IQueryable的型別，而使用一般in-memory (像是List<string>)就會去使用IEnumerable型別來回傳。

## 範例

以下為2個比較範例。

範例1: 使用一般in-memory回傳型別會自動套用IEnumerable

	List<string> list = new List<string>()
	{
	    "aaa",
	    "bbb"
	};
	var result1 = list.Where(item => item.Contains("b"));
	Console.WriteLine(result.First());	//output bbb

範例2: 使用database context回傳型別會自動套用IQueryable

	db = new ContactDataContext();	
	var result = db.SbcApplyChange.Where(a => a.Status == "10").Take(1);	
	Console.WriteLine(result.First());




## 參考
* [IEnumerable VS IQueryable](http://www.dotnet-tricks.com/Tutorial/linq/I8SY160612-IEnumerable-VS-IQueryable.html)
* [code-project IEnumerable Vs IQueryable](http://www.codeproject.com/Articles/732425/IEnumerable-Vs-IQueryable)

IQueryable繼承自IEnumerable 。IQueryable在查詢database較有效率，而IEnumerable用在in-memory操作較有效率。而IEnumerable不支援Lazy loading

* [List vs IEnumerable vs IQueryable vs ICollection vs IDictionary](http://www.codeproject.com/Articles/832189/List-vs-IEnumerable-vs-IQueryable-vs-ICollection-v)
這篇寫的很好: TODO

* [Fun with Generic Collections](http://www.codeproject.com/Articles/679418/Fun-with-Generic-Collections)
* [IQueryable vs. IEnumerable in terms of LINQ to SQL queries](http://www.codeproject.com/Articles/231163/IQueryable-Vs-IEnumerable-in-terms-of-LINQ-to-SQL)

比較使用IQueryable和IEnumerable來取回LINQ TO SQL的(使用相同查詢方式，只有回傳型別不同)，會看到2者效率的差異：IQueryable快於IEnumerable。但若是in-memory的操作,IEnumerable會比IQueryable好。


