MVC-開發過程的問題
--------

1. **為何使用Nuget套件還原,無法將jQuery或jQueryMobile的js及css檔案還原至content和scripts的檔案夾中?**
因為Nuget只會還原package檔案夾中的套件檔案,而不會還原至專案中的檔案夾. 因此要手動的來maintain曾經安裝過的檔案到content和scripts的檔案夾中。 可參考[這篇](http://nuget.codeplex.com/workitem/2094)
2. 在Controller中, 該使用View還是PartialView?
有找到[這篇View() vs. PartialView()](http://stackoverflow.com/questions/4210138/view-vs-partialview)說明了差異,用View會執行*_viewstart.cshtml* ,所以會去套用 *\_Layout.cshtml* 中的所有內容. 而PartialView則不會去套用. 一般來說,Index.cstml一定會是使用View()來顯示,但其他的頁面就可以彈性的使用. PartialView (比如有使用JQM或Ajax來取頁面的場合). 另外有一篇[Partial View的小應用](http://stackoverflow.com/questions/5441615/how-i-can-render-partial-views-in-asp-net-mvc-3)可以參考 
3. 應該使用List<T>或Array?
有找到[這篇Should I use a list or an array?](http://programmers.stackexchange.com/questions/221892/should-i-use-a-list-or-an-array)的answer2有一位神人回了一大篇. 但基本上他的想法是,如果知道資料的大小且是固定的,用Array的效能會比較好. 如果資料是動態的,用List<T>.
4. 有沒有辦法直接將SQL query的結果轉成List?
可以用關鍵字 *C# SQL to List* 作search. 有找到[這篇](http://stackoverflow.com/questions/18754688/c-sharp-how-to-implement-method-that-return-list-of-sql-result)可以先看一下.
5. 123
