MVC的Webapi設計筆記
----------

#### 設定Webapi method的屬性
因為webapi在binding action時,會去找Get/Post/Put/Delete開頭的函數.舉例來說如下:

- Get()
- GetCustomInfo()
- Post()
- PostAddUser()
- PutUpdateMail()
- DeleteRecord()

如果用以下的方式命名,就無法被對應到

- ApplyDataChange()
- SetSalesResolution()

解決的方法為加上函式的屬性

- [HttpGet]
- [HttpPost]
- [HttpPut]
- [HttpDelete]

範例

```
[HttpPut]
ApplyDataChange()
```


#### 如何讓ApiController回傳我們指定的方式
ApiController類別的回傳值如果是JSON序列化字串,它會自動再幫倒忙加上'/',為了要XML-->JSON, 必需要有一些特殊的作法. 因為json.net在將XML轉為json字串後,不要再由webapi自動轉json回傳. 這裡示範手動回傳作法如下:

```
public HttpResponseMessage Get()
{
    JSON oJSON = new JSON();
    sJSON = oJSON.XMLToJSON(sXML);	//將XML轉為JSON字串
	var resp = new HttpResponseMessage(HttpStatusCode.OK);
	resp.Content = new StringContent(sJSON, Encoding.UTF8, "text/json");
	return resp;
}
```




```
http://localhost:50977/api/values?comp=8560&cosy=8560&sett=9801852
```