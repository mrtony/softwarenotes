LINQ-IEnumerable-IQueryable
------

* [IEnumerable VS IQueryable](http://www.dotnet-tricks.com/Tutorial/linq/I8SY160612-IEnumerable-VS-IQueryable.html)
* [code-project IEnumerable Vs IQueryable](http://www.codeproject.com/Articles/732425/IEnumerable-Vs-IQueryable)

IQueryable繼承自IEnumerable 。IQueryable在查詢database較有效率，而IEnumerable用在in-memory操作較有效率。而IEnumerable不支援Lazy loading

* [List vs IEnumerable vs IQueryable vs ICollection vs IDictionary](http://www.codeproject.com/Articles/832189/List-vs-IEnumerable-vs-IQueryable-vs-ICollection-v)
這篇寫的很好: TODO

* [Fun with Generic Collections](http://www.codeproject.com/Articles/679418/Fun-with-Generic-Collections)
* [IQueryable vs. IEnumerable in terms of LINQ to SQL queries](http://www.codeproject.com/Articles/231163/IQueryable-Vs-IEnumerable-in-terms-of-LINQ-to-SQL)

比較使用IQueryable和IEnumerable來取回LINQ TO SQL的(使用相同查詢方式，只有回傳型別不同)，會看到2者效率的差異：IQueryable快於IEnumerable。但若是in-memory的操作,IEnumerable會比IQueryable好。


