MVC-View
------


## _ViewStart.cshtml檔案是做什麼的?
預設的主版頁面會在「_ViewStart.cshtml」這個檔案裡做設定

	@{
	    Layout = "~/Views/Shared/_Layout.cshtml";
	}

如果在每個cshtml中自行定義,可以用以下方式

	@{ 
	  ViewBag.Title = "Index"; 
	  Layout = "~/Views/Shared/_MyLayout.cshtml" ; 
	}

## RenderSection的用法
在_Layout.cshtml中定義

	<div data-role="header" data-theme="b">
	    @RenderSection("Header", required: false)
	</div><!-- /header -->
	@RenderSection("Scripts", required: false)

在Index.cshtml中加入區塊Header

	@section Header { 
	  <h1 style="font-size:2em;text-align:center">@ViewBag.Title</h1>
	}
加入自定義的js檔

	@section Scripts { 
	  <script type="text/javascript"src="@Url.Content("~/Scripts/appjs/index.js")"></script>
	}

這樣會定義主版面預留的section, 在index.html載入時會含入**Header**區塊.
而設定*required=false*設定這個section不必在每個頁面實作, 所以大部份的應用場合這個設定都是false.

## 參考文件
[mrkt 的程式學習筆記-給 ASP.NET MVC 初學者 - 兩種主要 View Engine 的對照](http://kevintsengtw.blogspot.tw/2013/03/aspnet-mvc-view-engine.html#.VA-W2vmSyCk)