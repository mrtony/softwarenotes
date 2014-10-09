Singleton Pattern - 單體模式
--------

[JavaScript Design Patterns: Singleton](http://www.joezimjs.com/javascript/javascript-design-patterns-singleton/)



在Javascript中，Singleton算是一種非常簡單的方式。它主要是將一堆程式放入一個物件中而且不需要去實體化它就可以使用，而且允許你在全域去使用它。所以它的實用性就是實作namespac減少全域變數。


## 簡單的Singleton
以下為一個最簡易的Singleton建立方式：


	var Singleton = {
	    attr: 1,
	    another_attr: 'value',
	     
	    method: function() {...},
	    another_method: function() {...}
	};

我們可以用以下的方式來存取它

	Singleton.method();
	Singleton.attr += 1;
	console.log(Singleton.attr);


## 以Namespacing的方式來使用

	var Namespace = {
	    Util: {
	        util_method1: function() {...},
	        util_method2: function() {...}
	    },
	    Ajax: {
	        ajax_method: function() {...}
	    },
	    some_method: function() {...}
	};

調用函式的方式如下：

	Namespace.Util.util_method1();
	Namespace.Ajax.ajax_method();
	Namespace.some_method();


## 設計html page相依的Singleton
通常我們的習慣是為每個頁面單獨設計一些javascript，此時就可以用singleton來設計，以下為範例：

	Namespace.homepage = {
	    init: function() {...},
	    method1: function() {...},
	    method2: function() {...}
	}
	 
	Namespace.contactpage = {
	    init: function() {...},
	    method1: function() {...},
	    method2: function() {...}
	}
	 
	Namespace.pageutil = {
	    getPageName: function() {
	        // somehow return the identifier for the current page
	    }
	}

使用方式如下：

	var pageName = Namespace.pageutil.getPageName();
	window.onload = Namespace[pageName].init;

## 使用閉包建立Singleton
前面的幾個方式建立的singleton中，所有的物件成員都是公開的。任何人都可以直接存其中的成員，但這可能會導致它們有被污染的風險。 因此可以使用**閉包**的方式來建立singleton，而這種模式又叫做 *Module Pattern* 。 (參考 Javascript設計模式第67頁，或另一篇 Module Pattern的文章)