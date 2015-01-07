LINQ-關聯性資料庫
------

## Insert data到關聯式資料庫1

            ContactDataContext db = new ContactDataContext();

            var newContact = new SbcApplyChange { ApplyDate = "103/11/02", ApplyTime = "11:11:12", Comp = "8560", Sett = "9801852", Sena = "陳權宗", IDNo = "F123123123", ApplyUnit = "0", Orcl = "30010", IP = "192.168.1.2", Srtr = "0", SalesEmna = "王大明", Status = "0", CreateDate = "103/11/02 11:11:12", UpdateDate = "103/11/02", UpdateTime = "11:11:12" };
            var newContactMod = new ContactMod { ApplyDate = "103/11/02", ApplyTime = "11:11:12", Comp = "8560", Sett = "9801852", DataType = "1", ChgField1 = "100", ChgField2 = "台北市中正路", ChgField3 = string.Empty, SbcApplyChange = newContact };
            db.SbcApplyChange.InsertOnSubmit(newContact);
            db.SubmitChanges();

## Insert data到關聯式資料庫2

            ContactDataContext db = new ContactDataContext();
            List<SbcApplyChange> Contacts = new List<SbcApplyChange>()
            {
                new SbcApplyChange {ApplyDate = "103/11/02", ApplyTime="11:11:12", Comp="8560", Sett="9801852", Sena="陳權宗", IDNo = "F123123123",ApplyUnit="0",Orcl="30010", IP="192.168.1.2", Srtr="0", SalesEmna="王大明", Status="0",CreateDate = "103/11/02 11:11:12", UpdateDate = "103/11/02", UpdateTime="11:11:12",
                ContactMod = new ContactMod {ApplyDate = "103/11/01", ApplyTime="11:01:02", Comp="8560", Sett="9802398",DataType = "0", ChgField1="tony@gmail.com", ChgField2 = string.Empty, ChgField3=string.Empty}
                }
            };

            var list = from item in Contacts
                       select item;

            foreach (var item in list)
            {
                db.SbcApplyChange.InsertOnSubmit(item);
            }

            db.SubmitChanges();




## 參考

* [Inserting/Updating Record on related entities using LINQ](http://debugmode.net/2011/06/25/insertingupdating-record-on-related-entities-using-linq/)
* [LINQ体验(9)——LINQ to SQL语句之Insert/Update/Delete操作](http://www.cnblogs.com/lyj/archive/2008/01/28/1056133.html)

