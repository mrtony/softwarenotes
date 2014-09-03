精通Module Pattern - Todd Motto
--------

[Mastering the Module Pattern](http://toddmotto.com/mastering-the-module-pattern/)

我對於module pattern很著迷,所以想要分享一些實際的使用場合以及與其他pattern的差異性以及他們的重要性.
Module Pattern真的是一個很有用的的pattern. 我被吸引的原因是因為它的作用域以及不太複雜的Javascript設計.

它也保持了簡單,易用及易讀,用一個非常好的方式使用物件,而且不會讓你的原始碼使用大量且重覆的this和prototype宣告.
我想要分享一些我理解的很棒的部份,以及如何掌握它的變形及功能.

## 建立Module
要了解module pattern可以給你什麼,你要先了解下面這段程式碼的函數的觀念

	(function () {
	  // code
	})();

它宣告了一個函數並且立即被它自己執行. 這是已知的**立即函數(Immediately-Invoked-Function-Expressions)**,這個函數創建了作用域及私有域. Javascript並沒有所謂的*私有域*,但創建出作用域可模擬出私有域,當我們邏輯性的包裝我們的函數到這裡面的話. 這種方式可以返回我面需要的部份,並且讓其它的code可以不屬於global.

在建立新的作用域時,我們需要集合(namespace)我們的代碼以存取它們. 讓我們為匿名的立即函數建立一個集合(namespace)

	var Module = (function () {
	  // code
	})();
這樣我們在全域範圍中就有了Module的集合,也就是說無論何時都可以呼叫它,甚至可以將它傳遞到另一個Module.

## 私有方法 Private methods
在Javascript中, 你將看到和聽到很多有關**私有**的方法,但它卻沒有限制擁有者,但我們可以建立它. 你可能正要問什麼是*私有方法*? 它是指你不想讓使用者,開發者或駭客在作用域外去看到或呼叫它們. 我們也許製作了很多call以及貼出了很多敏感的資料,我們不想曝露這些函數. 它們也許貼上任何東西回來然後由我們的程式碼得到好處. 所以我們可以建立**閉包Closure**來變的更聰明來保護我們的code. 它不僅是保護,然而,它們也作了命名衝突. 我打賭,當你第一次寫jQuery/Javascript,會將所有的代碼寫在一個檔案中,而且就是一堆的function,function, function. 僅知的就是全都是全域,而且在某些時候你可能遭受到一些後果. 如果是這樣,你將學到為什麼會這樣,以及要怎麼做才能改變它.

現在開始來使用新建立的Module作用域來讓作用域外無法直接使用我們建立的方法. 對於Module Pattern的初學者,這個範例會協助你了解一個私有的方法是如何被定義的:
	var Module = (function () {
	  
	  var privateMethod = function () {
	    // do something
	  };
	
	})();
上述範例宣告了我們的privateMethod函數,它在作用域中做了本地的宣告. 假如我們嘗試在Modulen外去呼叫它,我們將得到錯誤,而且Javascript程式會中斷!! 我們不想要任何一個人可以去呼叫我們自定的方法,特別是有可能使用資料並丟回到伺服器中.

## 了解"返回" Understanding "return"
典型的Modules將使用 *return* 並且 return一個物件給Module. 這會綁定這些方法到這個物件且可以藉由Module的namespace來使用. 一個簡易的範例,返回一個包含函數的物件:

	var Module = (function () {
	  
	  return {
	    publicMethod: function () {
	      // code
	    }
	  };
	
	})();
就像我們返回一個物件實字(Object Literial),可以像呼叫物件實字般的準確的呼叫它:

	Module.publicMethod();
對於沒有使用過物件實字的人, 說明一下物件實字就像這樣:

	var myObjLiteral = {
	  defaults: { name: 'Todd' },
	  someMethod: function () {
	    console.log(this.defaults);
	  }
	};
	
	// console.log: Object { name: 'Todd' }
	myObjLiteral.someMethod();
但物件實字的問題就在於我們可以濫用以及無法關住*private methods*, 因為它們是物件的一部份,所以可以被無限制的使用. 所以Module來救我們,允許我們在本地去定義所有我們的private的一切東西而且只返回好的部份 **the good part**.

進一步來看更多有關物件實字的語法以及一個完美的 *Module Pattern* 以及 *return*的角色. 通常一個Module會返回一個物件,但這個物件要如何定義以及構成,一切取之於你. 依專案和code的角色/設定,我可以使用一些語法中的一個.

## 匿名物件實字返回 Anonymous Object Literal return
其中一個最簡單的pattern就像之前的範例一樣,這個物件沒有在本地宣告名稱,只有返回一個物件:

	var Module = (function () {
	
	  var privateMethod = function () {};
	  
	  return {
	    publicMethodOne: function () {
	      // I can call `privateMethod()` you know...
	    },
	    publicMethodtwo: function () {
	
	    },
	    publicMethodThree: function () {
	
	    }
	  };
	
	})();

## 本地作用域的物件實字 Locally scoped Object Literal
本地作用域意指一個變數或函數被宣告在作用域中. 在**Conditionizr**專案中,我們使用本地範圍的namespace在超過100行的檔案中. 它是好的方式去看出公有和私有的方法而不用去檢視*return*中的述敍.在這個意義上,它更容易去看出哪些是公有的,因為它們是附屬在在本地的命名空間.

	var Module = (function () {
	
	  // locally scoped Object
	  var myObject = {};
	
	  // declared with `var`, must be "private"
	  var privateMethod = function () {};
	
	  myObject.someMethod = function () {
	    // take it away Mr. Public Method
	  };
	  
	  return myObject;
	
	})();
然後你將看到Module中的最後一行返回myObject. 全域的Module不需關心本地範圍的物件是否有名稱, 我們實際上有取得返回的物件,而不需在意名稱. 它提供了較好的code管理.

## 堆疊本地範圍的物件實字 Stacked locally scoped Object Literal

