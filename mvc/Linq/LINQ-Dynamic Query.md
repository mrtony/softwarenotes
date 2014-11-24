LINQ-Dynamic Query
------

找出Status為10的字串的資料,只取2筆。


	var result = db.SbcApplyChange.Where("Status == @0", "10").Take(2);

若要再加參數Sett=xxx

	var result = db.SbcApplyChange.Where("Status == @0 and Sett == @1", "10", "xxx").Take(2);

依序號@0, @1, @2加下去增加查詢條件