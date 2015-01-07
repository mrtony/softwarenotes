jqGrid-如何與MVC搭配作整批更新
------

## 會使用到的jqGrid API

* getRowData : 依rowid取得資料

		$("#list47").jqGrid('getRowData', rowid);

* getGridParam: 取得目前選取的row

		var s = $("#list47").jqGrid('getGridParam', selarrrow);
回傳的型態為array. 所以可以用.each來作loop.

## MVC接口

	[AcceptVerbs(HttpVerbs.Post)]
	public JsonResult BatchUpdate(List<ViewModel> viewModelsBatch)
	{
	  //Update your data storage here
	  ...
	}

## 以jQuery ajax傳送 object array 的技巧

        $.ajax({
            type: 'POST',
            //contentType: 'application/json; charset=utf-8',
            url: '/api/update',
            dataType: 'json',
            data: { '': batchUpdate },
            success: function(result) {
                $("#"+gridMap.mainGrid).trigger('reloadGrid');
            }
        });
其中batchUpdate為 oject array. 其中最為奇怪的是data的部份要用sample code的特殊作法才可以做到.

## Cross Domain 跨域

* IE沒有跨域問題
* IE中的Iframe的jQuery ajax有跨域問題, 要加上 $.support.cors = true;
* Chrome有跨域問題,在server端的 Global.asax.cs中加入以下的程式,即可解決跨域

        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", "*");
        }

## 參考

* [jqGrid and ASP.NET MVC – Batch updates](http://tpeczek.blogspot.tw/2011/05/jqgrid-and-aspnet-mvc-batch-updates.html)