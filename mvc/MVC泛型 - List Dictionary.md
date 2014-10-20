MVC泛型 - List Dictionary
------


## List的用法
參考 [How to: Initialize Objects by Using an Object Initializer (C# Programming Guide)](http://msdn.microsoft.com/en-us/library/bb397680.aspx)

產生一個List

	List<StudentName> students = new List<StudentName>()
	{
	  new StudentName {FirstName="Craig", LastName="Playstead", ID=116},
	  new StudentName {FirstName="Shu", LastName="Ito", ID=112},
	  new StudentName {FirstName="Gretchen", LastName="Rivas", ID=113},
	  new StudentName {FirstName="Rajesh", LastName="Rotti", ID=114}
	};

## Dictionary的用法1
參考 [How to: Initialize a Dictionary with a Collection Initializer (C# Programming Guide)](http://msdn.microsoft.com/en-us/library/bb531208.aspx)

產生一個key pair，其中一個為類別

	Dictionary<int, StudentName> students = new Dictionary<int, StudentName>()
	{
	    { 111, new StudentName {FirstName="Sachin", LastName="Karnik", ID=211}},
	    { 112, new StudentName {FirstName="Dina", LastName="Salimzianova", ID=317}},
	    { 113, new StudentName {FirstName="Andy", LastName="Ruth", ID=198}}
	};