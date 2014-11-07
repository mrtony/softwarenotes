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

##  JsonConvert.SerializeXmlNode用法

[jsonConvert.SerializeXmlNode Method](http://james.newtonking.com/json/help/index.html?topic=html/Overload_Newtonsoft_Json_JsonConvert_SerializeXmlNode.htm)

### XML不包含屬性的範例

	string xml = "<root><id>2</id><name>tony</name></root>";

	//output:{\r\n  \"id\": \"2\",\r\n  \"name\": \"tony\"\r\n}
	//將format設為Indented,會在每筆資料加上\r\n的換行字元
	var json = JsonConvert.SerializeXmlNode(doc, Newtonsoft.Json.Formatting.Indented,true);

	//output:{\"id\":\"2\",\"name\":\"tony\"}
	//omitRootObject(第3個參數設為true,會將根節點排除)
	json = JsonConvert.SerializeXmlNode(doc, Newtonsoft.Json.Formatting.None, true);

	//output: {\"root\":{\"id\":\"2\",\"name\":\"tony\"}}
	json = JsonConvert.SerializeXmlNode(doc, Newtonsoft.Json.Formatting.None, false);

### XML單一資料包含屬性的範例

	string xml = "<root><user id='2' name='tony'></user></root>";

	//output:{\"user\":{\"@id\":\"2\",\"@name\":\"tony\"}}
	json = JsonConvert.SerializeXmlNode(doc, Newtonsoft.Json.Formatting.None, true);
	//output:	{\"User\":{\"id\":\"2\",\"name\":\"tony\"}}
	json = json.Replace("@", string.Empty);

    XmlDocument doc = new XmlDocument();
    doc.LoadXml(xml);

    string json = JsonConvert.SerializeXmlNode(doc);
    json = JsonConvert.SerializeXmlNode(doc, Newtonsoft.Json.Formatting.None, true);
    json = json.Replace("@", string.Empty);

    JObject restoredObject = JsonConvert.DeserializeObject<JObject>(json);

    Console.WriteLine(restoredObject["User"]["id"]);	//output: 2
    Console.WriteLine(restoredObject["User"]["name"]);	//output: tony

### XML陣列資料包含屬性的範例

	string xml = "<root><User id='2' name='tony'></User><User id='3' name='peter'></User></root>";
	
	XmlDocument doc = new XmlDocument();
	doc.LoadXml(xml);
	
	string json = JsonConvert.SerializeXmlNode(doc);
	json = JsonConvert.SerializeXmlNode(doc, Newtonsoft.Json.Formatting.None, true);
	json = json.Replace("@", string.Empty);
	
	JObject restoredObject = JsonConvert.DeserializeObject<JObject>(json);
	JArray array = (JArray)restoredObject["User"];
	
	//output: tony, peter
	foreach (JObject obj_results in array)/*走訪JArray(results裡的每一筆JObject(這裡只有一筆)*/
	{
	    Console.WriteLine(obj_results["name"]);
	}

### XML陣列資料包含屬性以動態型別取得JSON後再用linq去找出我們要的資料範例

    string xml = "<root><User id='2' name='tony'></User><User id='3' name='peter'></User></root>";

    XmlDocument doc = new XmlDocument();
    doc.LoadXml(xml);

    string json = JsonConvert.SerializeXmlNode(doc);
    json = JsonConvert.SerializeXmlNode(doc, Newtonsoft.Json.Formatting.None, true);
    json = json.Replace("@", string.Empty);

    JObject restoredObject = JsonConvert.DeserializeObject<JObject>(json);
    JArray array = (JArray)restoredObject["User"];

    var result = from objs in array.Values<JObject>() /*走訪JArray裡每一筆JObject*/
                 where objs["name"].ToString() == "tony"
                 select objs;

	Console.WriteLine(result.Count());
	//output: tony
    Console.WriteLine(result.Single<JObject>()["name"].ToString());


### XML陣列資料包含屬性的轉成List<T\>範例

	string xml = "<root><User id='2' name='tony'></User><User id='3' name='peter'></User></root>";
	
	XmlDocument doc = new XmlDocument();
	doc.LoadXml(xml);
	
	string json = JsonConvert.SerializeXmlNode(doc);
	json = JsonConvert.SerializeXmlNode(doc, Newtonsoft.Json.Formatting.None, true);
	json = json.Replace("@", string.Empty);
	
	JObject restoredObject = JObject.Parse(json);
	JArray array = (JArray)restoredObject["User"];
	List<User> myList = array.ToObject<List<User>>();
	
	Console.WriteLine(myList[0].name);
	
	foreach (var item in array)
	{
	    Console.Write(item);
	}
其中"User"指的是每一個row的element名稱,才可以正確的去對應並轉成list的item。

### XML陣列資料包含屬性動態轉成List<T\>再套強型別範例

    class User
    {
        public string id { get;set ;}
        public string name { get; set; }
    }

	private List<T> JsonToList<T>(string json, string RowName)
	{
	    JObject restoredObject = JObject.Parse(json);
	    JArray array = (JArray)restoredObject[RowName];
	
	    return array.ToObject<List<T>>();
	}

    private void button8_Click(object sender, EventArgs e)
    {
        string xml = "<root><User id='2' name='tony'></User><User id='3' name='peter'></User></root>";
        List<User> myList = new List<User>();
        XmlDocument doc = new XmlDocument();
        doc.LoadXml(xml);

        string json = JsonConvert.SerializeXmlNode(doc);
        json = JsonConvert.SerializeXmlNode(doc, Newtonsoft.Json.Formatting.None, true);
        json = json.Replace("@", string.Empty);
        myList = JsonToList<User>(json, "User");

        Console.WriteLine(myList[0].name);
    }

### XML陣列資料包含屬性轉JSON以強型別轉List再作LINQ query範例

    string xml = "<root><User id='2' name='tony'></User><User id='3' name='peter'></User></root>";

    XmlDocument doc = new XmlDocument();
    doc.LoadXml(xml);

    string json = JsonConvert.SerializeXmlNode(doc);
    json = JsonConvert.SerializeXmlNode(doc, Newtonsoft.Json.Formatting.None, true);
    json = json.Replace("@", string.Empty);
    JObject restoredObject = JObject.Parse(json);
    JArray array = (JArray)restoredObject["User"];
    List<User> myList = array.ToObject<List<User>>();

    var result = from objs in myList
                select objs;

	//output: tony,peter
    foreach (var item in result)
    {
        Console.WriteLine(item.name);
    }
## 參考

* [sing JSON.NET for dynamic JSON parsing](http://weblog.west-wind.com/posts/2012/Aug/30/Using-JSONNET-for-dynamic-JSON-parsing)：很棒
* [Remove namespace in XML from ASP.NET Web API](http://stackoverflow.com/questions/12590801/remove-namespace-in-xml-from-asp-net-web-api)
* [Using a Custom JsonConverter to fix bad JSON results](http://michaelcummings.net/mathoms/using-a-custom-jsonconverter-to-fix-bad-json-results)
* [JSON deserialization with JSON.net: class hierarchies](http://dotnetbyexample.blogspot.tw/2012/02/json-deserialization-with-jsonnet-class.html)
* [使用JSON.NET處理動態物件屬性](http://blog.darkthread.net/post-2010-06-05-json-net-jobject-example.aspx)
* [[ASP.net WebForm] 使用Json.Net第三方套件讀取JSON字串](http://www.dotblogs.com.tw/shadow/archive/2011/12/04/60576.aspx)

## 工具網站
* [貼上JSON產生C#的class](http://json2csharp.com/)
* [online JSON viewer](http://jsonviewer.stack.hu/)