MVC-RederSection
---------------

[MVC] Razor @RenderSection 使用心得
像是這篇要講的 RenderSection
RenderSection這東西主要的用途

是在主版面 _layout.cshtm中定義的  (就是以前的MasterPage)他可以在主版面定義一些區塊 像是script 標題

像是以下這段

    <div id="body">
        <div class="container">
            @RenderSection("featured", required: false)
            <section class="content-wrapper clear-fix">
                @RenderBody()
            </section>
        </div>
    </div>
    <footer>
        @Html.Partial("Footer")
    </footer>
    @RenderSection("scripts", required: false)

這段是微軟預設主版面的程式碼@RenderBody() 是會產生其他view的畫面@RenderSection("featured", required: false)  這個就是主版面預留的section此方法的第二個參數  就是設定這個section是不是每個頁面都一定要實作設定false 就是不用每個頁面都實作true的時候 就每個頁面一定都要有這個區塊不然會出現exception要在每個頁面設定值的方法如下

	@section featured {
	    <div class="jumbotron">
	        <h1>@ViewBag.CategoryName.</h1>
	        <p>@ViewBag.Message</p>
	    </div>
	}

這樣就會在主版頁面featured區塊顯示這段HTML同理 要使用@RenderSection("scripts", required: false)這塊就這樣設定

	@section scripts {
	   <script>
	         $(document).ready(function () {
	            initForm();
	        });
	   </script>
	}


此時如果對版面比較要求的人就會延伸出一個問題我如果有頁面不想設定此區塊能不能給他預設值  因為我懶得每一頁都設定預設值此時可以使用IsSectionDefined來判斷頁面有沒有設定section

    @if (IsSectionDefined("featured"))
    {
        @RenderSection("featured", required: false)
    }
    else
    {
        <p>Section not define.</p>
    }


## 參考
[Razor @RenderSection 使用心得](http://white1027.blogspot.tw/2013/10/mvc-razor-rendersection.html)