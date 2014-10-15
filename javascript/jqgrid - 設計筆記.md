jqgrid - 設計筆記
--------



## 使用XML為datatype的設計 - todo
要定義xmlReader來設定資料格式才可以取得資料

## GetMethods

* ondblClickRow
在某一行row點2下會執行的callback

		ondblClickRow: function(id){ alert("You double click row with id: "+id);},
* onSortCol
在某一個項目上點擊做sort會執行的callback

		onSortCol: function(name,index){ alert("Column Name: "+name+" Column Index: "+index);},
* loadComplete
載入table完成後會執行的callback

		loadComplete: function(){
			var ret;
			alert("This function is executed immediately after\n data is loaded. We try to update data in row 13.");
			ret = jQuery("#list15").jqGrid('getRowData',"13");
			if(ret.id == "13"){
				jQuery("#list15").jqGrid('setRowData',ret.id,{note:"<font color='red'>Row 13 is updated!</font>"})
			}
		}

* 取得選取的row(1個或多個)
		//1個row
		$('#list47').jqGrid('getGridParam','selrow')
		//多個row
		$('#list47').jqGrid('getGridParam','selarrrow')


* onCellSelect在cell上點擊時會執行的callback



* 5



## 資料列處理

* setRowData 設定選定列的資料

		//將第2列的Orcl欄位的資料設為123
		$("#list47").jqGrid('setRowData', 2, {Orcl: "123"})


* RowEditing
Row Editing (new)
Live Data Manipulation - Edit Row
* 11 

## 參考資料
* [jqgrid demo](http://www.trirand.com/blog/jqgrid/jqgrid.html)
* [jqgrid wiki](http://www.trirand.com/jqgridwiki/doku.php?id=wiki:jqgriddocs)
* [ok-soft,可供參考](http://www.ok-soft-gmbh.com/jqGrid/Admin3.htm)
* [jqGrid - submit buttons in each row: 點選row時按鈕才可以按](http://stackoverflow.com/questions/16717459/jquery-jqgrid-submit-buttons-in-each-row)
* [簡睿隨筆：第4個jqGrid範例: 資料列處理](http://jdev.tw/blog/1640/jqgrid-data-manipulation)