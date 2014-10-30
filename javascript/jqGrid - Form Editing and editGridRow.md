jqGrid - Form Editing and editGridRow
------

## 建立方式
Form Edit共有幾種模式

* Add (C)
* View (R)
* Edit (U)
* Delete (D)

以下為Edit的建立方式

        jQuery("#list47").jqGrid('editGridRow',selectedRow,{
            height:640,
            width: 480,
            reloadAfterSubmit:false, closeAfterEdit:true,
            editCaption: "同意變更確認",
            bSubmit: "同意",
            viewPagerButtons: false,
            editData: {myparam:function(){return "approve"}},
            recreateForm: true,
            url: appGrid.editurl,
        });

或用function的方式也可建立

	jQuery("#grid_id").editGridRow( rowid, properties );

另外Add/View/Delete的建立方式如下

	//Add
	jQuery("#grid_id").editGridRow( "new", properties );

	//View
	jQuery("#grid_id").viewGridRow( rowid, properties );

	//Delete
	jQuery("#grid_id").delGridRow( row_id_s, options );


## 配置edit form中資料行為
Edit form建立後的行為會套用在colModel中定義的行為。以下舉2個例子

* readonly:  editoptions:{readonly:true}
* require:  editrules:{required:true}

## 如何檢查資料
jqgrid已提供部份標準資料檢查的功能(editrules{date:true}檢查日期格式)。但若是有些沒有提供的部份要怎麼檢查？ 假如我們要對某個col在輸入後做檢查，可以這樣配置：

	editrules:{custom:true, custom_func:mypricecheck, required:true}
之後若有輸入資料到該col中，並執行送出則callback會被執行。 而回傳的參數格式為array：

	[false, "error message"] or [true, "message"] 

## 項目太多時，submit按鍵會消失
解決方法如下：

* [jqGrid editGridRow submit button disappears gap between last field and submit](http://stackoverflow.com/questions/24389529/jqgrid-editgridrow-submit-button-disappears-gap-between-last-field-and-submit)

		recreateForm: true

## afterSubmit的用法
在click送出後，會執行的callback。[jqGrid afterSubmit](http://stackoverflow.com/questions/13191183/jqgrid-aftersubmit)

也就是說server端回應的資料會傳入此callback的參數：

	function (response, postdata)

* response: server回應的json或其他資料
* postdata: client送出的資料(不是由server送出的)

## 如何設定required=true時未輸入資料按submit錯誤訊息？

	$.jgrid.edit.msg.required = "is missing";

## checkOnSubmit
設為true時，在按送出鍵後會跑出是否同意變更的確認window。

## closeOnEscape
按escape建可關閉modal window。

## closeAfterEdit
修改資料按送出後，會自動將dialog關閉。 

## topinfo and bottominfo
可在top或bottom顯示指定的字串內容，比如說一些警語。

## viewPagerButtons
將modal中的next/prev icon取消或顯示。

## 參考
* 參考jqgrid demo的Live Data Manipulation-EditRow
* [參考jqgrid wiki](http://www.trirand.com/jqgridwiki/doku.php?id=wiki:form_editing)
* jqgrid demo 3.5 form Navigation：有說明進階用法,如加入require要求一定要輸入。
* [jqgrid-實用技巧-四-form-edit](http://www.misterngan.com/987/jqgrid-%E5%AF%A6%E7%94%A8%E6%8A%80%E5%B7%A7-%E5%9B%9B-form-edit/)