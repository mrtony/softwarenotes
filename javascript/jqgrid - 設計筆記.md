jqgrid - 設計筆記
--------



## 使用XML為datatype的設計 - todo
要定義xmlReader來設定資料格式才可以取得資料


## 要如何建立一個jqgrid table
分為2個部份: HTML和javascript

* HTML
在HTML中建立一個table給grid table和div給分頁(不是必要)

		<table id="list6"></table>
		<div id="pager6"></div>

* Javascript
	
		jQuery("#list6").jqGrid({        
		   	url:'server.php?q=2&nd='+new Date().getTime(), //為了不要讓browser作cache
			datatype: "json",
		   	colNames:['Inv No'],
		   	colModel:[
		   		{name:'id',index:'id', width:55},
		   	],
		   	rowNum:10,
		   	pager: '#pager6',
		   	sortname: 'id',
		    viewrecords: true,
		    sortorder: "desc",
			onSortCol: function(name,index){ alert("Column Name: "+name+" Column Index: "+index);},
			ondblClickRow: function(id){ alert("You double click row with id: "+id);},
			loadComplete: function(){
				var ret;
				alert("This function is executed immediately after\n data is loaded. We try to update data in row 13.");
				ret = jQuery("#list6").jqGrid('getRowData',"13");
				if(ret.id == "13"){
					jQuery("#list6").jqGrid('setRowData',ret.id,{note:"<font color='red'>Row 13 is updated!</font>"})
				}
			}
			caption:" Get Methods",
			height: 200
		});

在DOM ready後去call js就可以在畫面上建立。另外也可以用local array建立：

	jQuery("#list4").jqGrid({
		datatype: "local",
		height: 250,
	   	colNames:['Inv No','Date', 'Client', 'Amount','Tax','Total','Notes'],
	   	colModel:[
	   		{name:'id',index:'id', width:60, sorttype:"int"},
	   		{name:'invdate',index:'invdate', width:90, sorttype:"date"},
	   		{name:'name',index:'name', width:100},
	   		{name:'amount',index:'amount', width:80, align:"right",sorttype:"float"},
	   		{name:'tax',index:'tax', width:80, align:"right",sorttype:"float"},		
	   		{name:'total',index:'total', width:80,align:"right",sorttype:"float"},		
	   		{name:'note',index:'note', width:150, sortable:false}		
	   	],
	   	multiselect: true,
	   	caption: "Manipulating Array Data"
	});
	var mydata = [
			{id:"1",invdate:"2007-10-01",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
			{id:"2",invdate:"2007-10-02",name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"}
			];
	for(var i=0;i<=mydata.length;i++)
		jQuery("#list4").jqGrid('addRowData',i+1,mydata[i]);

## 在某一個row點擊2下要做處理
可以使用ondblClickRow的method。 參考建立grid的程式。

	ondblClickRow: function(id){ alert("You double click row with id: "+id);},

## 對某一個colume做sort後要做處理
可以使用onSortCol的method。 參考建立grid的程式。

	onSortCol: function(name,index){ alert("Column Name: "+name+" Column Index: "+index);},

## 載完grid後要做處理
我們希望在載入完成jqgrid table後，做後續處理，比如說加button, 加行為等，可以使用loadComplete callback。參考jqgrid demo的**New since beta 3.0 - After Load Callback**範例。 可以使用ondblClickRow的method。 參考建立grid的程式。

## 如何取得被選取的row id

		//1個row
		$('#list47').jqGrid('getGridParam','selrow')
		//多個row
		$('#list47').jqGrid('getGridParam','selarrrow')



## 如何設定某個row中的cell資料
使用setRawData參數。
		//將第2列的Orcl欄位的資料設為123
		$("#list47").jqGrid('setRowData', 2, {Orcl: "123"})

## 如何取得已建立的grid的url或重新設定url
使用時機: grid建立時若已提供URL，除非手動去設定它，否則不管做reloadGrid或refresh，都會以當前的URL去向server要資料。
* 取得url的方式
 
	jQuery('#list6').jqGrid('getGridParam','url')

* 手動的設定url方式
通查會去設定url就是希望去重新載入資料，所以都會在設完url後去做reload動作

		jQuery("#list7").jqGrid('setGridParam',{url:"server.php?q=2"}).trigger("reloadGrid")

## 使用toolbar的refresh的動作原理為何
若grid上有refresh icon，在click後會以之前設定的url以ajax的方式去要資料，但會使用原本設定的url。


## 增加Add,Edit,Delete的按鈕
jqGrid本身有自己設計好的按鈕。假設table id = list47, pagereditData = plist47。要在下方的toolbar建立Add,Edit,Delete的按鈕的方式如下(前提是要先建好list47的jqgrid和pager id)：

	$('#list47').navGrid('#plist47{edit:true,add:true,del:true})


## 重新查詢的方式

	$("#tbYourGrid").setGridParam({url:newUrl,page:1});
	$("#tbYourGrid").trigger("reloadGrid");

但畫面上的資料不會清掉...
	jQuery('#dataTable').jqGrid('clearGridData')
	jQuery('#dataTable').jqGrid('setGridParam', {data: data, page: 1})
	jQuery('#dataTable').trigger('reloadGrid');

## jsonreader的使用
有試過拿掉jsonreader參數，在colModel中使用jsonmap可正常取得及顯示資料，所以有使用jsonmap時，應該不用再使用jsonreader。 但很奇怪的是在使用arcgis的example時，用了jsonmap卻還是要jsonreader，還沒弄懂個中原因。

## 如何動態設定colModel中的Editrule
參考 [jqgrid method](http://www.trirand.com/jqgridwiki/doku.php?id=wiki:methods) 中的getColProp()取得要控制的col name的設定。 然後用setColProp()來設定該col的參數。比如說我們要設定某個col name的require為true，方式為：

	$(”#grid_id”).setColProp('colname',{editrule:{require:true}); 

## 使用內定的修改editGridRow改變資料
* 參考jqgrid demo的Live Data Manipulation-EditRow
* [參考jqgrid wiki](http://www.trirand.com/jqgridwiki/doku.php?id=wiki:form_editing)

其他的項目

* 項目太多時，submit按鍵會消失 [jqGrid editGridRow submit button disappears gap between last field and submit](http://stackoverflow.com/questions/24389529/jqgrid-editgridrow-submit-button-disappears-gap-between-last-field-and-submit)

		recreateForm: true

* afterSubmit的用法： 在click送出後，會執行的callback。[jqGrid afterSubmit](http://stackoverflow.com/questions/13191183/jqgrid-aftersubmit)
* closeAfterEdit：修改資料按送出後，會自動將dialog關閉。 

## Hide/Show Colume
Hide colume

	$('#list47').hideCol("Comp")
	$('#list47').jqGrid('hideCol', ["Comp"])

Show Colume

	$('#list47').showCol("Comp")
	$('#list47').jqGrid('showCol', ["Comp"])

在建立colume時就hide

	{name: 'Comp', label: 'Comp', width: 170, jsonmap: 'Comp', editable:true, hidden: true}

[Hidden Columns in jqGrid](http://stackoverflow.com/questions/1661800/hidden-columns-in-jqgrid)

## Disable Row

	$('#list47 input').attr("disabled", "disabled")

## 太長的字換行
在custom css中加入

	.ui-jqgrid tr.jqgrow td {
		white-space: normal !important;
	}

* [Wrapping Text lines in JqGrid](http://stackoverflow.com/questions/1730061/wrapping-text-lines-in-jqgrid)
* [Wrapping text in a jQuery jqGrid cell](http://adayinthepit.com/2011/08/02/wrapping-text-in-a-jquery-jqgrid-cell/)


## 將col設為readonly

	editoptions:{readonly:true}



## 參考資料
* [jqgrid demo](http://www.trirand.com/blog/jqgrid/jqgrid.html)
* [jqgrid wiki](http://www.trirand.com/jqgridwiki/doku.php?id=wiki:jqgriddocs)
* [ok-soft,可供參考](http://www.ok-soft-gmbh.com/jqGrid/Admin3.htm)
* [jqGrid - submit buttons in each row: 點選row時按鈕才可以按](http://stackoverflow.com/questions/16717459/jquery-jqgrid-submit-buttons-in-each-row)
* [簡睿隨筆：第4個jqGrid範例: 資料列處理](http://jdev.tw/blog/1640/jqgrid-data-manipulation)
* [jqGrid工具使用心得分享](http://newsletter.ascc.sinica.edu.tw/news/read_news.php?nid=1643)
* [jqgrid 单击事件获取数据](http://blog.csdn.net/xiguame/article/details/11191719)
* [JqGrid相關操作方法列表備忘重點講解(超重要)](http://blog.csdn.net/hurryjiang/article/details/6891115)
* [jqgrid post](http://stackoverflow.com/questions/4063682/jqgrid-post-data-to-server-to-fetch-row-data-filtering-and-searching)

## jqgrid wiki參考資料
* [ColModel API](http://www.trirand.com/jqgridwiki/doku.php?id=wiki:colmodel_options)
* [Data Manipilation (可使用的資料)](http://www.trirand.com/jqgridwiki/doku.php?id=wiki:retrieving_data) : 說明支援xml, json,jsonp等格