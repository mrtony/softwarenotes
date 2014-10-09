Adapter Pattern - 適配器模式
------

[]()

參考

* Javascript 設計模式第11章-適配器模式(P136)
* Pro Javascript Design Patterns - The Adapter Pattern(P149) 

又叫做包裝器(wrapper)，用來將一個新的interface去包裝另一個object。它的特點是，當我們想要使用既有的API但傳入參數的interface與既有的API不同的話，就可以使用一個adapter pattern去做一個wrapper去使用既有的API。

## Adapter入門
以下為一個最簡易的adapter pattern建立方式。 假設我們有一個即有的API要傳入3個參數，但現在想改成用物件將這3個參數傳入：

	var clientObject = {
		string1: 'foo',
		string2: 'bar',
		string3: 'baz'
	};
	function interfaceMethod(str1, str2, str3) {
		...
	}

	//新增一個adapter
	function clientToInterfaceAdapter(o) {
		interfaceMethod(o.string1, o.string2, o.string3);
	}
	//使用方式
	clientToInterfaceAdapter(clientObject);

由於不是每一種browser都支援addEventListener function，所以我們必需分支我們的code來支援它。這種方式可以將此函數的檢查代碼包裝在一個地方，而讓代碼更簡潔。


## 不同函式庫的切換
以prototype及YUI get的函數為例。

* Prototype：$() {}
* YUI Get： YAHOO.util.Dom.get(el)

2個函數的interface並不相同，YUI具有一個參數，$並沒有列出參數而是允許客戶傳入任意數目的參數。那要做出adapter是長什麼樣子？
	
	function PrototypeToYUIAdapter() {
		return YAHOO.util.Dom.get(arguments);
	}
	function YUIToPrototypeAdapter(el) {
		return $.apply(window, el);
	}
	//由Prototype轉由使用YUI get
	$ = PrototypeToYUIAdapter;
	//由YUI get轉由使用Prototype
	YAHOO.util.Dom.get = YUIToPrototypeAdapter;

