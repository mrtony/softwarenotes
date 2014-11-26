LINQ - YouTube training01
------

## 從YouTube的學習

### Part1

參考來源
* [Part 1 What is LINQ](https://www.youtube.com/watch?v=z3PowDJKOSA)
* [Part 1 - What is LINQ - Blog](http://csharp-video-tutorials.blogspot.tw/2014/06/part-1-what-is-linq.html)

課程重點

1. LINQ的好處: 不必學會各種不同DB的語言，可透過LINQ To SQL, Linq To XML等來操作資料
2. LINQ可協助檢查語法，不像ADO.net或SQL，如果query string下錯了，就會導致錯誤。
3. 範例:可使用GridView的DataSource, DataBind簡單可做出table.
	* 連結到某一SQL DB的table
	* 使用windows form的DataGridView
	* 將DataSource連結到LINQ的query結果，但因為DataGridView需要List型別，需要再轉一次。

	        var result = from contact in db.SbcApplyChange
	                     where contact.SBCZipcode == "300"
	                     select contact;
	
	        dataGridView1.DataSource = result.ToList();
4. 可使用 *SQL ServerProfiler* 來追蹤由LINQ TO SQL的命令下到SQL Server是執行了什麼樣的命令。以上面的例子為例，實際的SQL命令長這個樣子：

		exec sp_executesql N'SELECT [t0].[ApplyDate], [t0].[ApplyTime], [t0].[Comp], [t0].[Sett], [t0].[Sena], [t0].[IDNo], [t0].[SBCTel1Area], [t0].[SBCTel1No], [t0].[SBCTel1Ext], [t0].[SBCTel2Area], [t0].[SBCTel2No], [t0].[SBCTel2Ext], [t0].[SBCAddr], [t0].[SBCZipcode], [t0].[SBCMobileInt1], [t0].[SBCMobile1], [t0].[SBCMobileInt2], [t0].[SBCMobile2], [t0].[SBCEmail], [t0].[ApplyUnit], [t0].[Orcl], [t0].[IP], [t0].[Status], [t0].[SalesProcessDate], [t0].[SalesProcessTime], [t0].[Srtr], [t0].[SalesEmna], [t0].[SalesIP], [t0].[SalesResolution], [t0].[SalesMemo], [t0].[CreateDate], [t0].[UpdateDate]
		FROM [dbo].[SbcApplyChange] AS [t0]
		WHERE [t0].[SBCZipcode] = @p0',N'@p0 nvarchar(4000)',@p0=N'300'
實際貼到SQL中去執行，會得到與LINQ查詢相同的結果。
5. 在app.config中會有設定SQL server的資料
    <connectionStrings>
        <add name="WindowsFormsApplication1Linq.Properties.Settings.SSAHConnectionString"
            connectionString="Data Source=192.168.10.10;Initial Catalog=SSAH;User ID=zzzzzz;Password=xxxxxx"
            providerName="System.Data.SqlClient" />
    </connectionStrings>

### Part2 Writing LINQ Queries
有2種LINQ Query的方式
1. LINQ query using Lambda Expressions

	IEnumerable<Student> students = Student.GetAllStudents()
	    .Where(student => student.Gender == "Male");

2. LINQ query using using SQL like query expressions

		IEnumerable<Student> students = from student in Student.GetAllStudents()
		                                where student.Gender == "Male"
		                                select student;

這2種方式沒有Performance上的差異，基本上就看個人喜好比較喜歡哪一種寫法。不過要記住，實際上用SQL Like的query寫法，最後還是會被轉換成Lambda的方式。

11/26: 看了更多文件後，在用法想定調: 查SQL用SQL Like, LINQ to Object用Lambda。

### Part4 Aggregate - Sum,Min,Max,Average

    int[] Numbers = { 2, 3, 4, 5 };
    int sum = Numbers.Sum();
    double avg = Numbers.Average();
    int min = Numbers.Min();
    int max = Numbers.Max();

	//sum=14,avg=3.5,min=2,max=5




