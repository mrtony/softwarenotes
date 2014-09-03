MVC Webapi Routing
------

MVC4預設的Routing格式是 api/{controller}/{id}

- controller: 就是controller檔案夾中,每一個檔案的前置名字. 如ValuesController.cs, Controller就是Values.
- id: 參數 (optional) 

所以MVC用這些次料讓ASP.NET Routing 來做指令繞送,決定要使用哪些方法來做事.


實際案例
--------

即使有帶參數,但會選到GetTest方法. 原因為它的變數命名為id, 與routing表中的相同,已經加了一分. 而GetTest3就被剔除掉了, 後面的?data=2的字串參數就不被考慮.
```
//http://localhost:63741/api/Test/5?data=2
public string GetTest(int id)
{
    return "value1";
}
public string GetTest3(string name, string data)
{
    return "value4";
}
```
-

會選到GetTest6方法. 原因為它的變數命名為id, 與routing表中的相同,2個法法都加一分. 而後面的?data=2的字串參數就被當成第2個比較,GetTest6再加一分,所以被選到.
```
//http://localhost:63741/api/Test/5?data=2
public string GetTest(int id)
{
    return "value1";
}
public string GetTest6(string id, string data)
{
    return "value6";
}
```
-
即使GetTest1為int, 但會選到GetTest方法. 原因為它的變數命名為id, 與routing表中的相同.
```
//http://localhost:63741/api/Test/5
public string GetTest(string id)
{
    return "value1";
}
public string GetTest1(int address)
{
    return "value1";
}
```
-

以下這種設計方式會找到一個以上的方法,會發生錯誤
```
//http://localhost:63741/api/Test/5
public string GetTest(string id)
{
    return "value1";
}
public string GetTest1(int id)
{
    return "value1";
}
```
