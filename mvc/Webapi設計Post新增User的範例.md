Webapi設計Post新增User的範例
------

設計需求如下
* 在網頁端有一個按鈕執行post一個使用者名稱和帳號的物件
* webapi分析網址後會routing到一個api controller並執行對應的post函數


index.html

	<button id="btnAjaxPost" onclick="processAjaxPost()">Run Ajax Post</button>


Javascript

    function processAjaxPost() {
    $.post("/api/values", { name: "John", sett: "9802398" });    
    }

ValuesController.cs

	public void Post(SbcApplyChangeInfoTest myTest)
	{
		System.Diagnostics.Debug.WriteLine("blah1");
	}


測試用宣告的類別
    
	namespace DataInfoTest
	{
		public class SbcApplyChangeInfoTest
		{
			public string name { get; set; }//公司編號
			public string sett { get; set; }//客戶帳號
			public string mail { get; set; }//客戶帳號
		}
	}
