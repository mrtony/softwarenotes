CSharp - 格式轉換及SJON及XML處理
------


## 如何將DataTable轉換成JSON
使用Newtonsoft.Json的函式庫

	string str_json = JsonConvert.SerializeObject(dt, Formatting.Indented);
其中Formatting.Indented也可使用Newtonsoft.Json.Formatting.Indented。
參考[利用JSON.net 實現 DataTable轉JSON字串、JSON字串轉DataTable](http://myprogramlog.blogspot.tw/2013/09/jsonnet-datatablejsonjsondatatable.html)

## 轉換XML時如何移除xml namespace
可在global.asax.cs中加入

	GlobalConfiguration.Configuration.Formatters.XmlFormatter.UseXmlSerializer = true;
參考[Remove namespace in XML from ASP.NET Web API](http://stackoverflow.com/questions/12590801/remove-namespace-in-xml-from-asp-net-web-api)