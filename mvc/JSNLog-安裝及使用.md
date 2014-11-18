JSNLog-安裝及使用
------


## JSNLOG + NLOG

1. 安裝jsnlog.nlog (Install-Package JSNLog.NLog)
2. 升級NLog到最新版 (Update-Package Nlog)
3. 安裝NLog.Config (Install-Package NLog.Config)
4. 安裝NLog Schema for Intellisense(TM) 3.1.0(Install-Package NLog.Schema)
5. 設定NLOG的target及rule
6. 設定bundle加入jsnlog

    bundles.Add(new ScriptBundle("~/bundles/jsnlog").Include(
                "~/Scripts/jsnlog.js"));

7. 在_Layout.cshtml加入jsnlog.js

	@Scripts.Render("~/bundles/jsnlog")
8. 在_Layout.cshtml加入jsnlog的config

	@Html.Raw(JSNLog.JavascriptLogging.Configure())
9. 測試在index.cshtml的最後加上這一段

		@section scripts {
		    <script>
			         $(document).ready(function () {
			             JL().fatal("log message");
			        });
		    </script>
		}