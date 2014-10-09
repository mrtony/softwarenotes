Facade - 門面模式
------

Singleton Pattern - 單體模式
--------

[]()

參考

* Javascript 設計模式第10章-門面模式(P129)
* Pro Javascript Design Patterns - The Facade Pattern(P141) 

門面模式的2個主要作用

* 簡化class的接口
* 減少與client code的耦合

## Facade入門
以下為一個最簡易的Singleton建立方式：

	function addEvent(el, type, fn) {
		if (window.addEventListener) {
			el.addEventListener(type, fn, false);
		}
		else if (window.attachEvent) {
			el.attachEvent('on' + type, fn);
		}
		else {
			el['on' + type] = fn;
		}
	}

由於不是每一種browser都支援addEventListener function，所以我們必需分支我們的code來支援它。這種方式可以將此函數的檢查代碼包裝在一個地方，而讓代碼更簡潔。


## 包裝stopPropogation
以處理DOM常用的2個函數為例：

* event.stopPropogation()
* event.preventDefault()

因為不同的browser對這2個功能的支援性有差異，所以我們加了一個facade pattern實現解決方案

	var DED = window.DED || {};
	DED.util = {
		stopPropagation: function(e) {
			if (ev.stopPropagation) {
				// W3 interface
				e.stopPropagation();
			}
			else {
				// IE's interface
				e.cancelBubble = true;
			}
		},
		preventDefault: function(e) {
			if (e.preventDefault) {
			// W3 interface
			e.preventDefault();
			}
			else {
			// IE's interface
			e.returnValue = false;
			}
		},
		/* our convenience method */
		stopEvent: function(e) {
			DED.util.stopPropagation(e);
			DED.util.preventDefault(e);
		}
	};

儘管這種方式與Adapters Pattern很相似，但facade是較為簡單的用法。

## 以Facade建立一個Event處理的Utility

	DED.util.Event = {
		getEvent: function(e) { },
		getTarget: function(e) { },
		stopPropagation: function(e) { },
		preventDefault: function(e) { },
		stopEvent: function(e) { }
	};

	DED.util.Event = {
		getEvent: function(e) {
		return e || window.event;
		},
		getTarget: function(e) {
			return e.target || e.srcElement;
		},
		stopPropagation: function(e) {
			if (e.stopPropagation) {
				e.stopPropagation();
			}
			else {
				e.cancelBubble = true;
			}
		},
		preventDefault: function(e) {
			if (e.preventDefault) {
				e.preventDefault();
			}
			else {
				e.returnValue = false;
			}
		},
		stopEvent: function(e) {
			this.stopPropagation(e);
			this.preventDefault(e);
		}
	};