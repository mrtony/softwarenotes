jqgrid - 點選主要grid的row將資料顯示在另一個grid
------

## 目的
使用者點選主grid資料時，可以將其資料或是其對應放在另一個資料庫的資料，顯示在另一個grid中。 這裡要做的範例是由資料庫A取得資料後放在主grid，在使用者點選後，再去另一個資料庫取得資料並顯示。

## 實際開發內容
* 透過webapi並用jsonp包裝資料向server取得資料並填入主grid
* 在loadComplete後將row設為第一個row。
* 在設定row後會發生set row的event，此時要去透過web service以xml格式(因為該server只支援xml格式)去向另一個資料庫取得資料並顯示在第2個grid


## 使用到的jqgrid技術
* select row event
* set row
* reload grid
* xml reader

## 以範例資料庫建立xml資料來源的grid

    var initGrid57 = function () {
        $("#list57").jqGrid({
            url: "http://www.cs.washington.edu/research/xmldatasets/data/tpc-h/part.xml",
            datatype: "xml",
            xmlReader: {
                repeatitems: false,
                root: "table",
                row:  "T"
            },
            colNames: ["P_PARTKEY", "P_NAME"],
            colModel :[ 
              {name:'P_PARTKEY', index:'P_PARTKEY', width:55, xmlmap:"P_PARTKEY"}, 
              {name:'P_NAME', index:'P_NAME', width:90, xmlmap:"P_NAME"}, 
            ],
            rowNum: 5,
            rowList: [5, 10, 20, 100, 10000],
            pager: "#plist57",
            gridview: true,
            rownumbers: true,
            viewrecords: true,
            height: "auto",
            loadonce: true
        });
    }

執行後會得到以下的grid結果

![](https://googledrive.com/host/0B7okXOykSneqcjkycjRHRVBZSlU)

## 讀取xml資料的方式
若XML的資料長成這個樣子

	<table ID="part">
	<T>
		<P_PARTKEY>1</P_PARTKEY>
		<P_NAME>goldenrod lace spring peru powder</P_NAME>
	</T>
	<T>
		<P_PARTKEY>2</P_PARTKEY>
		<P_NAME>blush rosy metallic lemon navajo</P_NAME>
	</T>

XML reader的配置方式如下：

    xmlReader: {
        repeatitems: false,
        root: "table",
        row:  "T"
    },
也就是說根節點為table，每一個row就是T，然後就可以在colName中去指定要讀取的element的名稱。若element中還有父子節點的關係，則可以使用 **SubAttribute>Element**成xmlmap的配置。


若要讀取的資料都是放在element的屬性，則要使用另一種方式來讀取 (<P_PARTKEY id="1">1</P_PARTKEY>)：

    colModel: [
        { name: 'mycode', width: 80, sorttype: 'int',
            xmlmap: function (obj) {
                return $(obj).attr('id');
            }}
    ],
attr帶的屬性名稱就是節點中的屬性名稱。
[參考範例](http://stackoverflow.com/questions/9287099/jqgrid-data-xml-property)

## TA個人資料的處理
因為TA的個人資料共有6個row，但其設計並非與我們要的相同，因為我的做法是要先用ajax去取得TA的資料後存入到一個local array，然後以jqgrid存取local array的方式去顯示。

* [XML2JSON](http://www.fyneworks.com/jquery/)
* [DavidWalsh](http://davidwalsh.name/convert-xml-json)
* [DavidWalsh-1](https://dl.dropboxusercontent.com/u/513327/xmlToJSON.html)


## 參考資料1 - jqgrid demo
* 參考[jqgrid demo](http://www.trirand.com/blog/jqgrid/jqgrid.html "jqgrid demo")的Advanced>Master Detail頁面

![](https://googledrive.com/host/0B7okXOykSneqRl9RVF9IN1N1eFE)