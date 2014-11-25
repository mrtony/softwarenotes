MVC-File StreamIO檔案相關
------

## 以TextWriter寫入資料到一個檔案

使用System.IO的StreamWriter開啟一個檔案寫入LINQ to SQL的Log

	using (System.IO.StreamWriter sw = new System.IO.StreamWriter(@"c:\temp\tempdatacontext.log"))
	{
	    StudentDataContext db = new StudentDataContext();
	    db.Log = sw;
	}

使用System.IO的StreamWriter開啟一個檔案並以LINQ to XML寫入XML檔

	using (System.IO.StreamWriter file = new System.IO.StreamWriter(@"C:\Temp\linqXml.xml"))
	new XElement("Employees",.....).Save(file);