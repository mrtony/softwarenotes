MVC - Webapi的json和jsonp的設計要點
------


## Webapi回傳json格式字串的方式
因為MVC預設已使用json.net的serilize打包回傳的資料，所以不需要先用JsonConverter.Serilize包一次，反而會導致無法產生正確的json格式字串，會變成多了\與"的不必要的字元。 所以依據不同的需求可以將回傳的型態用字串或泛型來回傳：

        public Dictionary<string, string> Get()
        {
            var result = new Dictionary<string, string>()
            {
                {"001", "Banana"},
                {"002", "Apple"},
                {"003", "Orange"}
            };
            return result;
        }

或是用 List <T>，IEnumerable<T>來回傳也可以。




可參考

* [ASP.NET Web API 入門常用技巧 - 教你回傳正確JSON格式的資料](http://huan-lin.blogspot.com/2013/01/aspnet-web-api-and-json.html)
* [C#泛型-List和Dictionary](http://blog.csdn.net/qy1387/article/details/7742034)
* []()
* 
