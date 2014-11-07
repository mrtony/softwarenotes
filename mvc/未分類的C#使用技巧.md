未分類的C#使用技巧
------


## 以字串方式取得類別物件中的Property的值 
typeof(ClassName).GetProperty(PropertyName).GetValue(Instance, null);

