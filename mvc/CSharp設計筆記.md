C#的設計筆記
----------



* [類別陣列](#複類別陣列)
* [靜態類別與方法](#靜態類別與方法)
* [複製檔案](#複製檔案)
* [建構式](#建構式)
* [Debug技巧](#Debug技巧)
* [PATH的使用方式](#PATH的使用方式)
* [參考資料](#參考資料)



## 使用List<T>


## SQL回傳的DataInfo使用方式
可使用foreach加上\[ \]運算子來存取內容

	DataTable oDataTable = _oCertInfoTable.Query(sComp, sSett, sSeno);
    if (oDataTable.Rows.Count > 0)
    {
        foreach (DataRow oRecord in oDataTable.Rows)
		{
			sXML += "Comp=\"" + oRecord["Comp"].ToString() + "\" ";
		}
	}

<a name="類別陣列"/>
## 類別陣列

## IEnumerable介面和foreach
可列舉並遍歷物件內容

	private void ListAllElement(IEnumerable<int> elements)
	{
	    foreach (int element in elements)
	    {
	        Console.WriteLine(element);
	    }
	}</int>
	
	int[] a = { 1, 2, 3 };
	List<int> b = new List<int> { 4, 5, 6 };
	List<string> c = new List<string> { "email", "cellPhone1", "cellPhone2", "tel", "address"};
	
	ListAllElement(a);
	ListAllElement(b);
	ListAllElement(c);


<a name="靜態類別與方法案"/>
## 靜態類別與方法
如果將類別宣告為static,那麼就不需要宣告實驗即可使用. 通常我會用這個方法來做系統設定,這個範例是我在小幫手加的server config, 主要是用來指向不同的主機,以應付不同測試環境的需求,只要有新的測試主機要加,只要修改這個檔案即可.

[static class範例](https://bitbucket.org/tony62101/skis/src/c5b5d811bad270c1eb9b9766bc0c1e9168d3fcf0/%E7%AF%84%E4%BE%8B%E7%A8%8B%E5%BC%8F/static%20class%E7%AF%84%E4%BE%8B/ServerConfig.cs?at=master)

<a name="複製檔案"/>
## 複製檔案

可以學到幾個重點

- 檔案路徑的使用
- 複製檔案

之前在設定檔案路徑時,會使用的方式為字串,然後要用特殊的方式來表式路徑. 但實際上C#的路徑設法有一定的方法,在結合檔名時也提供另一個方法來使用.

```
private string _sLocalPath = @"c:\skis\tampcheck";
private string _sFilename = "capicom.dll";
console.write(Path.Combine(_sLocalPath,_sFilename))
//output = c:\\skis\\tampcheck\\capicom.dll
```

其他可看[範例程式](https://github.com/mrtony/mvc/blob/master/example/%E8%A4%87%E8%A3%BD%E6%AA%94%E6%A1%88%E7%9A%84%E7%AF%84%E4%BE%8B/FileCopy.cs)

<a name="建構式"/>
## 建構式

<a name="Debug技巧"/>
## Debug技巧

可以在主控台印出log

	System.Diagnostics.Debug.WriteLine
可以用DEBUG/RELEASE來做assert

	using System.Diagnostics;
	Debug.Assert(1 == 0, "Impossible!!");
可以用DEBUG/RELEASE來決定哪些代碼要不要編譯

	#if DEBUG
	#else
	#endif


<a name="PATH的使用方式"/>
## PATH的使用方式
我們很常會使用到路徑表示,以及存取檔案,所以可以用Path class來做操作. 假設一些設定如下：

	string dir  = @"c:\mydir";
	string file = "myfile.txt";
	string path = @"c:\mydir\myfile.txt";

切換到目錄k:\demo

	Directory.SetCurrentDirectory (@"k:\demo");

結合目錄與檔名

	Path.Combine (dir, file)	//output=c:\mydir\myfile.txt


取得目前目錄
Directory.GetCurrentDirectory()	//output=k:\demo\

來源參考C#5.0 in a Nutshell, page#673, *Path* section


<a name="參考資料"></a>
## 參考資料
[C#的自動屬性 get/set](http://alansong.pixnet.net/blog/post/55999534-c%23-get-set-%E5%8F%8A%E8%87%AA%E5%8B%95%E5%B1%AC%E6%80%A7)

