MVC-字串_物件_List轉換
------


## 利用LINQ將字串中特定符號的左右2邊的值分別取出

	//string format is "ApplyDate=103/01/01&ApplyTime=103/01/01&Comp1234=&Sett=5678"
	IEnumerable<string> paras = stringArray.Select(x => x.Substring(x.IndexOf("=") + 1));
	//output list is : 103/01/01, 103/01/01,1234,5678

## 利用stringBuilder和string.Format建立dynamic LINQ查詢字串

	sb.Append(string.Format("(ApplyDate >= \"{0}\" and ApplyDate <= \"{1}\")", AppQueryContact.Date, AppQueryContact.Date1));
因為查詢的字串中，其條件要用double quote包起來，所以需要這樣處理。

## String.Format

### 轉換日期為yyyy/mm/dd

	string.Format("{0:yyyy\\/MM\\/dd}", DateTime.Today)


### 參考

* [string.Format 格式整理](http://www.dotblogs.com.tw/marcus116/archive/2012/03/11/70655.aspx)
* [string.Format輸出格式](http://goodlucky.pixnet.net/blog/post/30233497-%5Bc%23%5D-string.format%E8%BC%B8%E5%87%BA%E6%A0%BC%E5%BC%8F)

## 常用類別

* stringBuilder
* string.Format
* Convert
* Encoding