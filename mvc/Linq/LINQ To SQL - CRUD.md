LINQ To SQL - CRUD
------


## 刪除資料
刪除找到的資料

    db.SbcApplyChange.DeleteAllOnSubmit(delItems);
    db.SubmitChanges();
