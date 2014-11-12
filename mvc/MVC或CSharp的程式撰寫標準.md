MVC或CSharp的程式撰寫標準
------


	//Bad!
	if (vaule == string.Empty)
	 {…}
	
	//Good!
	if (vaule.Length == 0) {…}


靜態字串串接時(於當下串接所有內容)，利用”@”來輸入多行文字及避免跳脫字元(escaped string)，
方便閱讀與維護
	//Bad!
	string vaule = “select * from product”
	                   + “where product_name = '1'”;
	
	//Good!
	string vault = @”select * from product
	                            where product_name = '1'”;

動態字串串接時(無法於當下串接所有內容)，避免使用 “+”，改用StringBuilder，效能較佳。

	//Bad!
	string value = “select * from product”;
	value += “where product_id=1”;
	...
	value += " and product_name='xxx'";
	
	//Good!
	StringBuilder value = new StringBuilder();
	value.Append(@“select * from product 
	               where product_id  = 1 ”);
	...
	value.Append(“ and product_name  = 'xxx' ”);


表示空字串時，避免使用 “”改用使用 string.Empty ，效能較佳。

	//Bad!
	string vaule = "";
	
	//Good!
	string vaule = string.Empty;

## 參考
* [Coding Standard (一)：錯誤處理小技巧](http://www.dotblogs.com.tw/asdtey/archive/2010/05/05/exceptionhandle.aspx)
* [Coding Standard (二)：字串處理技巧](http://www.dotblogs.com.tw/asdtey/archive/2010/05/07/codingstandardstring.aspx)