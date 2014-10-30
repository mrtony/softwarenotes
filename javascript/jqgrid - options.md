jqgrid - options
------

## altclass and altRows
2個可以搭配使用顯示出多個列的zebra效果。

	<style type="text/css">
	  .altClass {
	    background: lightYellow;
	    color: red;
	  }
	</style>
	{
	    altRows: true,
	    altclass: "altClass",
	}

## gridview
預設為false。 設為true可以加快performance，但有個event無法使用：treeGrid, subGrid, afterInsertRow。


## hiddengrid and hidegrid
hiddengrid為true時 (caption不為空字串才會有作用)，只會顯示caption字串，沒有顯示資料的grid。在hidegrid=false的狀態下，caption的右邊會有一個可以shvieow/hide的符號來hide/show grid資料，在選show時會去server要資料來顯示。 將hidegrid設為false會將show/hide的符號拿掉。

建議將hidegrid設為false，因為我們不需要hide grid。 


## search相關: ignoreCase
ignoreCase: false, 搜尋時忽略大小寫


## inline editing相關
inlineData: 在執行inline editing時，可以將額外的資料送到server


## 載入過程相關的參數
* loadtext:執行ajax過程中顯示的字串，如載入中
* loadui:執行ajax過程中可以處理的模式。 有disable,enable,block. 選擇block時，在ajax過程中任何按鍵都不可按。

## page相關
* page:載入grid後第1頁要顯示的頁數。預設為1。
* pager: 定義要顯示的page bar。不設這個參數就不會顯示page bar.
* pagerpos: 可定義page bar顯示的位置.
* pgbuttons: 預設為true。設為false後,page bar的下一頁/上一頁不會顯示。
* pginput: 可輸入變更頁面的文字框。預設為true有顯示 
* pgtext: 取代pginput的位置並顯示指定的文字

## postData
可帶在網址列的參數。

    postData: {
        where: "1=1",
        returnGeometry: testPostData(),
        outFields: "ObjectID,NAME,STATE_NAME,CNTY_FIPS",
        f: "json"
    }

## Row相關

* rowNum: 設為10選擇rowList的10，並且每頁顯示10個row data。
* rowList:設為[10,20,30]會在page bar顯示出一頁可顯示的列數。
* rownumbers: 在每一列的第一個colume顯示row的號碼。建議設為true。
* rowTotal: 會帶參數到server告知需要多少的row的資料。

## toppager
可顯示另一個page bar在grid table的上方。建議設為true方便操作。

## viewrecords
設為true顯示取得的row有多少筆。 建議設為true。
loadone=true才可以切頁。

## userData


## 參考資料

[jqgrid wiki - options](http://www.trirand.com/jqgridwiki/doku.php?id=wiki:options)