MVC開發指南學習
------

## Viewbag
ViewBag是一個動態型別的物件,可以設置任意型別的值進去,所指定的屬性與值都可以在View中讀取。

	//In controller
	Viewbag.Message = "test";

	//In View
	<h2>@ViewBag.Message</h2>

