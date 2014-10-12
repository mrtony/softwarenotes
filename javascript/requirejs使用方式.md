RequireJS - 使用方式
------


## 載入支援AMD的jQuery函式庫
因為jQuery本身已經相容AMD，所以可以直接以requirejs載入。使用方式如下：

	<html>
	<head>
	  <meta charset="utf-8">
	  <title>Test Requirejs</title>
	  <script src="./require.js" data-main="./app"></script>
	</head>
	<body>
	</body>
	</html>

	//app.js內容
	require.config({     
		paths: {
			jquery:'jquery-1.7.2'
		} 
	});

	require(['jquery'], function($){
		alert($().jquery); 
	});


只要在HTML中引入一行requirejs即可將jquery載入。其中data-main指的是要載入的js檔，該檔中定義了要加載的模組及載入順序。 記得不需要加入.js副檔名，因為它預設就是載js，不然會發生錯誤。
這裡要注意的是jquery的模組名是 **jquery** ，不能寫為jQuery或JQUERY，否則會載入失敗。

另外若jquery的js的檔名為jquery.js且與app.js在同一路徑，則不需設定require.config中的jquery：

	require(['jquery'], function($){
		alert($().jquery); 
	});


## 載入不支援AMD的模組的相依性載入及shim config
並不是所有的函數庫都有支援AMD。所以requirejs 2.0版已經支援了。 其使用方法是在config中加入shim的參數。我們以載入一個jquery timer plugin為例：

	require.config({     
		paths: {
			jquery:'jquery-2.1.1.min',
            jquerytimer: 'jquery.timer'
		},
        shim: {
            'jquerytimer': ['jquery']
        }
	});

	require(['jquerytimer'], function(){
        console.log($.timer);
	});

在載入jquerytimer時，因為在shim中有定義其相依性為jquery，所以在載入timer plugin前會先去載入jquery。要這麼做的原因是requirejs在載入時是非同步性無順序的，若沒有用shim指定其相依性，有可能會載入失敗。

另外再舉一個2層式依賴的範例。假設timer plugin載入前需要先載入xmltojson pluging，而2者都需要jquery，那麼其相依性的定義及載入的方式如下：

	require.config({     
		paths: {
			jquery:'jquery-2.1.1.min',
            jquerytimer: 'jquery.timer',
            jqueryxmltojson: 'jquery.xml2json'
		},
        shim: {
            'jqueryxmltojson': ['jquery'],
            'jquerytimer': ['jqueryxmltojson']
			//以下這種寫成一行也可以
			//'jquerytimer': ['jquery','jqueryxmltojson']
        }
	});

	require(['jquerytimer'], function(){
        console.log($.timer);
	});
執行後，因為timer相依於xmltojson，所以會去載xmltojson.js，但xmltojson又依賴於jquery，所以會先去載jquery後，再載入xmltojson再載入timer。

還有一種狀況是要載入2個plugin而且都需要jquery，在這種情況下，jquery只會被載入一次：

	require.config({     
		paths: {
			jquery:'jquery-2.1.1.min',
            jquerytimer: 'jquery.timer',
            jqueryxmltojson: 'jquery.xml2json'
		},
        shim: {
            'jqueryxmltojson': ['jquery'],
            'jquerytimer': ['jquery']
        }
	});

	require(['jquerytimer','jqueryxmltojson'], function(){
        console.log($.timer);
	});


## 強制非同步載入
若要強制requirejs在DOM載完後再去載入js可用以下方式：

	<script src="js/require.js" defer async="true" ></script>

## shim config用法
參考requirejs github的用法，主要的應用方式有2種。
第一種以載入backbone.js為例，需要先載入jquery及underscore後再export一個全域名稱到window。(underscore沒有用到jquery)

	requirejs.config({
	    shim: {
	        'backbone': {
	            //These script dependencies should be loaded before loading
	            //backbone.js
	            deps: ['underscore', 'jquery'],
	            //Once loaded, use the global 'Backbone' as the
	            //module value.
	            exports: 'Backbone'
	        }
	    }
	});

第二種用法是比較簡單的像是jquery或backbone的plugin，不需要export任何值，僅需將相依性宣告在array中即可：

	requirejs.config({
	    shim: {
	        'jquery.colorize': ['jquery'],
	        'jquery.scroll': ['jquery'],
	        'backbone.layoutmanager': ['backbone']
	    }
	});

## requirejs.config的參數

* baseUrl：定義要載入模組的預設路徑。可以是絕對或是相對路徑。相對路徑是以require載入的js為參考點。
* paths：文件路徑及名稱。若有定義baseUrl，可不需指定路徑。


## map
可用來指定載入不同版本的函式庫。

## paths參數的進階用法
可以配置一個模組的載入可以有多種方式，若第一個方式失敗會以第二種方式載入。

	requirejs.config({
	    paths: {
	    jquery: [
	    'http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min',
	    'lib/jquery']
	    }
	})

## 參考資料

* [requirejs api doc](http://requirejs.org/docs/api.html)
* [requirejs github shim doc](https://github.com/jrburke/requirejs/wiki/Upgrading-to-RequireJS-2.0#shim)
* [requirejs入門指南](http://wenku.baidu.com/view/25c2b58b50e2524de4187e28.html)
* [Require.js 2.0 Shim Configuration](http://gregfranko.com/blog/require-dot-js-2-dot-0-shim-configuration/)
