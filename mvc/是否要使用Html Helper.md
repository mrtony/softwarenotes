MVC-使用HTML Helper
----------

在.net MVC的IDE中,有提供Razor style的HTML Helper來簡化撰寫HTML的撰寫,可以將一些重覆的工作,直接在view中用helper的語法來處理後,就直接轉成html的語法然後顯示在客戶端. 但這樣的寫法會導致不熟悉HTML Helper的人無法參與專案,以致所有人必需都學會HTML Helper,所以可能造成維護上的困難. 那到底要不要用HTML Helper來開發?

參考了下面幾篇文章及論述後,稍後我們可以整理出一個結論.

1. [Why do we use HTML helper in ASP.NET MVC?](http://stackoverflow.com/questions/4681883/why-do-we-use-html-helper-in-asp-net-mvc)
2. [ASP.NET MVC 3 and the @helper syntax within Razor](http://weblogs.asp.net/scottgu/asp-net-mvc-3-and-the-helper-syntax-within-razor)
3. [Writing Custom HTML Helpers for ASP.NET MVC](https://www.simple-talk.com/dotnet/asp.net/writing-custom-html-helpers-for-asp.net-mvc/)
4. [Beginner's Tutorial on HTML Helpers and Creating Custom HTML Helpers in ASP.NET MVC](http://www.codeproject.com/Articles/787320/An-Absolute-Beginners-Tutorial-on-HTML-Helpers-and)

我比較喜歡第2篇所提的內容, 而第4篇提供了不少基本的使用範例. 第2篇舉了一些使用上的實例,比如說我們要做一個list來顯示商品,用helper語法可以使用foreach loop來逐一顯示每個產品,而不需要寫一堆ul,li.

	@helper DisplayPrice(Decimal price)
	{
		if (price == 0) {
			<span>FREE!</span>
		}
		else {
			@String.Format("{0:C2}", price)
		}
	}

	<ul>
	@foreach (var product in Model) {
		<li>
			<span class="productTitle">
				@product.Name
			</span>
			<span class="description">
				@product.Description
			</span>
			<span class="price">
				@DisplayPrice(product.UnitPrice)
			</span>
		</li>
	}
	</ul>

確實從上面的範例來看,用helper也是很簡潔的就可以完成一個listview的顯示,而且只用了很短的程式碼,而且不需要寫javascript就可以完成.缺點是

* 維護上必需要懂helper的語法.
* 無法直接將view的html在別的平台上使用(非.net平台)
* 因為翻譯動態的HTML資料,所以會使用較多的server的資源



