LINQ to XML
------


## 使用的類別

參考這一個X* Class的類別關係圖會比較了解要如何使用

![](https://googledrive.com/host/0B7okXOykSneqMGE4TGQzUkY4NW8)


* XDocument
* XElement
* XAttribute

## X* Class的用法

### 存取子節點的差異
存取子節點常用的方法有3種

* Element(XName): 只要找出目前節點下的XName的單一節點，不會去遍歷全部的子節點,孫節點。回傳XElement。
* Elements(XName): 只要找出目前節點下的XName的全部節點，不會去遍歷全部的子節點,孫節點。回傳XElement。
* Descendants(XName)：遍歷全部的子節點,孫節點並回傳IEnumerable型別。

所以只要找出目前節點下的子節點，用Element或Elements。
要找出整篇XML的任意節點，用Descendants。

也可以2個搭配使用：先用Element載入某一節點，再用Descendants找出要處理的所有節點。

### Elements用法

	XElement xmlTree = new XElement("Root",
	    new XElement("Type1", 1),
	    new XElement("Type1", 2),
	    new XElement("Type2", 3),
	    new XElement("Type2", 4),
	    new XElement("Type2", 5)
	);
	IEnumerable<XElement> elements =
	    from el in xmlTree.Elements("Type2")
	    select el;
	foreach (XElement el in elements)
	    Console.WriteLine(el);


## 讀出XML字串輸出到Console
1. XML結構如下

		<!--Starbuzz Customer Loyalty Data-->
		<starbuzzData storeName="Park Slope" location="Brooklyn, NY">
		  <person>
		    <personalInfo Tel="0912123123">
		      <name>Janet Venutian</name>
		      <zip>11215</zip>
		    </personalInfo>
		    <favoriteDrink>Choco Macchiato</favoriteDrink>
		    <moneySpent>255</moneySpent>
		    <visits>50</visits>
		  </person>
		</starbuzzData>
2. 使用XElement.Parse載入XML字串.
3. 使用linq取得所有的person的element並取出資料到List
	
	    var data = from item in doc.Descendants("person")
	               select new
	               {
	                   drink = item.Element("favoriteDrink").Value,
	                   moneySpent = item.Element("moneySpent").Value,
	                   zipCode = item.Element("personalInfo").Element("zip").Value,
	                   tel = item.Element("personalInfo").Attribute("Tel").Value
	               };
        foreach (var p in data)
            Console.WriteLine(p.ToString());
輸出為
drink=Choco Macchiato,moneySpent=225,zipCode=11215,tel=0912123123


## 參考

* 以上部份技術參考 **Programming Microsoft LINQ in Microsoft .NET Framework 4** 這本書。
* 練習的實例參考 [Understanding C#: Simple LINQ to XML examples (tutorial)](http://broadcast.oreilly.com/2010/10/understanding-c-simple-linq-to.html)
* [Mar 24 2011XML 與 Linq 的結合一 之Xelement](http://rhroan.pixnet.net/blog/post/51302096-xml-%E8%88%87-linq-%E7%9A%84%E7%B5%90%E5%90%88%E4%B8%80-------%E4%B9%8Bxelement): 這一篇有寫的比較實務性，也說明了XDocument與XElement最大的差異是在XDoc多了Schema，但實際上用不太到，所以用XElement即可。
* [Elements()與Descendants()的使用差異](http://www.dotblogs.com.tw/pou/archive/2010/10/03/18063.aspx)
* [MSDN-LINQ to XML 類別概觀](http://msdn.microsoft.com/zh-tw/library/bb387023(v=vs.110).aspx)
* [Stack-Overflow-XDocument與XElement的比較](http://stackoverflow.com/questions/3879868/whats-the-difference-between-xelement-and-xdocument)
* [MSDN-查詢 XDocument 與查詢 XElement 之比較](http://msdn.microsoft.com/zh-tw/library/bb675196.aspx)
* [MSDN-System.Xml.Linq 命名空間](http://msdn.microsoft.com/zh-tw/library/system.xml.linq(v=vs.110).aspx)