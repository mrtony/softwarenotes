LINQ-資料轉換或轉型
------


## 將選出的資料轉為可以改變資料內容的List<物件>型別

假設有一個物件如下

	class Student
	{
		public string ID {get;set;}
		public string Name {get;set;}
	}
	
	另外XML如下
	<STUDENTS>
	<STUDENT>
		<ID>1</ID>
		<NAME>Tony</NAME>
	</STUDENT>
	</STUDENTS>

要將XML轉換為物件

	XElement xstudent = XElement.Parse(studentXml);
    List<Student> students = from item in xstudent.Descendants("STUDENT")
                            select new Student
                            {
                                ID = item.Element("ID").Value,
								Name = item.Element("NAME").Value,
                            }
因為是轉換到List，所以可以對它做修改插入的動作。

## 將資料轉為匿名型別的物件

使用相同的studentXml，但不指定轉換型別

    var students = from item in xstudent.Descendants("STUDENT")
                            select new
                            {
                                ID = item.Element("ID").Value,
								Name = item.Element("NAME").Value,
                            }
只要將變型別改為var, 將new後面的類別名稱拿掉即可。

另外轉換後產生的匿名物件還可印出物件中的屬性名稱

	var result = db.SbcApplyChange.Where("Sett==\"123456\"").Select(item => new {Comp=item.Comp, Sett=item.Sett, ApplyDate=item.ApplyDate});

	//output <Comp=567890,Sett=123456,ApplyDate=103/01/01>
