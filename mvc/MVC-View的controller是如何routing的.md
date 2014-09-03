MVC-View的controller是如何routing的
--------

View與webapi的routing不同,但使用的routing方式很接近.
這裡假設我們要設計出一個view, 存取的網址為 http://localhost:12345/Default,設計流程如下

1. 在controller中加入一個控制器,並選擇範本為 *空白MVC控制器*
2. 將其命名為DefaultController.cs
3. 在View的資料夾新增一個 *Default* 的子資料夾
4. 在 <Default> 資料夾中加入 *檢視* , 並將其命名為 *index*, 完成後會產生一個index.cshtml
5. 執行程式,並在browser中輸入 http://localhost:12345/Default , 就可以看到網頁顯示出來

