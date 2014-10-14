jqgrid - tips
------

## 增加Add,Edit,Delete的按鈕
假設table id = list47, pager = plist47。要在下方的toolbar建立Add,Edit,Delete的按鈕的方式如下(前提是要先建好list47的jqgrid)：

	$('#list47').navGrid('#plist47{edit:true,add:true,del:true})



## 參考

* [jqgrid 单击事件获取数据](http://blog.csdn.net/xiguame/article/details/11191719)
* [JqGrid相關操作方法列表備忘重點講解(超重要)](http://blog.csdn.net/hurryjiang/article/details/6891115)