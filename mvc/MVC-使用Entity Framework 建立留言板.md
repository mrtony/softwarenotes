MVC-使用Entity Framework 建立留言板
------

以建立留言版MvcGuestbook為例. (第3章)

## 創建專案

1. 新增專案-.NetFramework4
2. Asp.net MVC Web應用程式
3. project name : MvcGuestbook
4. 網際網路應用程式

## 創建數據模型

1. 新增Guestbook的資料類別到Model中. (Guestbook.cs)

	    public class Guestbook
	    {
	        public int Id { get; set; }
	        public string 姓名 { get; set; }
	        public string Email { get; set; }
	        public string 內容 { get; set; }
	    }
然後做一次建置及編譯.(一定要做)

2. 創建Controller, 動作與檢視. 新增GuestbookController, 並從Scaffold範本中選擇**具有讀取/寫入動作和檢視,使用Entity Framework的MVC控制器**,在**模型類別**中選擇剛才建立的*Guestbook (MvcGuestbook.Models)*, 而**資料內容類別**選擇*新資料內容*後,會跳出一個window顯示*MvcGuestbook.Models.MvcGuestbookContext*,按確定後點加入完成建立Controller. 然後可以在<Model>中看到系統已自動建立*MvcGuestbookContext.cs*, 在<View>中也自動新增了Create, Delete, Detail, Edit的view.
3. 執行網站,在UR:輸入/Guestbook, 即可看到新建的留言版頁面. 可以測試建立,修改,編輯,查詢功能.
4. 4
5. 5


