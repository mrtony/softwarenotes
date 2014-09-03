MVC-如何使用與執行Javascript及jQuery
--------

要在.net mvc專案中使用javascript及jquery, jquery mobile, 我們要做的是先設定好環境

* 使用Nuget安裝jquery及jquery mobile
* 使用bundle將jquery及jquery打包及壓縮
* 在_Layout.cshtml中引入jQuery及jQueryMobile的檔案

#### 使用Nuget加入jQuery
在 *工具/Nuget套件管理員/管理方案的NuGet套件*中加入jQuery及jQueryMobile的套件. 完成後會在*Scripts*和*Content*目錄中將jQuery及jQueryMobil的JS及CSS檔分別放入.

#### 使用bundle將jquery及jquery打包及壓縮
在AppStart/BundleConfig.cs中引入

    public class BundleConfig
    {
        // 如需 Bundling 的詳細資訊，請造訪 http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
			//引入jquery
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));
            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.unobtrusive*",
                        "~/Scripts/jquery.validate*"));
			//引入jquery mobile
            bundles.Add(new ScriptBundle("~/bundles/Mobilejs").Include(
                "~/Scripts/jquery.mobile-1.*",
                "~/Scripts/jquery-1.*"));

            // 使用開發版本的 Modernizr 進行開發並學習。然後，當您
            // 準備好實際執行時，請使用 http://modernizr.com 上的建置工具，只選擇您需要的測試。
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));
            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css"));
			//引入jquery mobile的CSS
            bundles.Add(new StyleBundle("~/Content/Mobilecss").Include(
                "~/Content/jquery.mobile.structure-1.4.2.min.css",
                "~/Content/jquery.mobile-1.4.2.css")); 
        } 

其中jQuery Mobile的引入部份可以改為這樣(因為jQuery已在另一個敍述引入),這樣在升級函式庫後就不需再修改

            bundles.Add(new ScriptBundle("~/bundles/Mobilejs").Include(
                "~/Scripts/jquery.mobile-{version}.js"));
            bundles.Add(new StyleBundle("~/Content/Mobilecss").Include(
                "~/Content/jquery.mobile.structure-{version}.min.css",
                "~/Content/jquery.mobile-{version}.css")); 

#### 引入jQuery及jQueryMobile到網頁中
在Views/Shared/_Layout.cshtml中引入,要注意引入的順序. 在這裏加入的內容,會被所有view中的cshtml繼承及共用.

	<head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width" />
	    <title>@ViewBag.Title</title>
	    @Styles.Render("~/Content/css")
	    @Styles.Render("~/Content/Mobilecss")	<-- jQuery Mobile的css
	    @Scripts.Render("~/bundles/jquery")		<-- jQuery的js
	    @Scripts.Render("~/bundles/Mobilejs")	<-- jQuery Mobile的js
	    @Scripts.Render("~/bundles/modernizr")
	</head>
	<body>
	    @RenderBody()
	    @RenderSection("scripts", required: false)
	</body>


* [建置高效能網站-壓縮你的 CSS 與 JS (Minify & Bundle)](http://www.dotblogs.com.tw/jasonyah/archive/2013/05/25/asp.net-mvc4-use-bundle-to-minify.aspx)
* [Good: 修練營 ASP.NET-如何執行一段javascript](http://www.dotblogs.com.tw/hatelove/archive/2009/10/28/11325.aspx)
* [ASP.NET MVC 與 Javascript Alert](http://kevintsengtw.blogspot.tw/2012/09/aspnet-mvc-javascript-alert.html#.U_0tlvmSzhk)
* [Developing Mobile specific Views using jQuery Mobile in ASP.NET MVC 4 - Part 1](http://www.codeproject.com/Articles/739969/Developing-Mobile-specific-Views-using-jQuery-Mobi)
* [Developing Mobile specific Views using jQuery Mobile in ASP.NET MVC 4 - Part 2](http://www.codeproject.com/Articles/740019/Developing-Mobile-specific-Views-using-jQuery-Mo)