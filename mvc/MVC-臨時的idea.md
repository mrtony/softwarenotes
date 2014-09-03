MVC-臨時的idea
--------

8/27/2014 1:21:37 PM 
今天下載了一個shopping的MVC的example,有到List的使用方式,所以想說要這樣改寫客戶基本資料變更

    namespace DataInfo
    {
        public class QueryCustTable
        {
            public string Lino { get; set; }           //變更資料的商品別
            public string DataType { get; set; }       //變更資料類型
            public string DataContent { get; set; }    //變更資料內容
            public string Status { get; set; }         //變更資料狀態
        }
    }

    public ActionResult AllCustInfo()
    List<QueryCustTable> custInfoModel = new List<QueryCustTable>();
    custInfoModel = _repository.GetCustInfoAll();
    return View(custInfoModel);

    namespace CustInfoXX
    {
        public class DataRepository
        {
            public List<QueryCustTable> GetCustInfoAll()
            {
                List<QueryCustTable> CustInfos = new List<QueryCustTable>{ 
                        new QueryCustTable () { ProductId = 1, ProductName = "Nokia Lumia 625", ProductDescription = "A mid-range Lumia with a focus of combining 4G with a large display (4.7 inch, the first time on a Lumia), yet keeping the price in a low and affordable range",
                        ProductCategory =  new Category () { CategoryId = 1, CategoryName = "Phones"}},
                        
                        new QueryCustTable () { ProductId = 2, ProductName = "Nokia Lumia 925", ProductDescription = "A thinner, lighter, partially aluminium re-skin of the Lumia 920, designed to broaden the appeal of the 92x range. It is a compromise between Lumia 920 and Lumia 928 features-wise.",
                        ProductCategory =  new Category () { CategoryId = 1, CategoryName = "Phones"}},

                        new QueryCustTable () {ProductId = 3, ProductName = "ThinkPad X1 Carbon Ultrabook", ProductDescription = "At less than 1.4 kg, the X1 Carbon Ultrabook™ brings a new level of quality to the ThinkPad legacy of high standards and innovation. A carbon fiber roll cage with reinforcement throughout makes this system ultralight, ultradurable, and highly portable. Stay unplugged all day, but when needed, boost your battery up to 80% capacity in just 35 minutes.",
                        ProductCategory = new Category () {CategoryId = 2, CategoryName = "Computers"}},
                     
                        new QueryCustTable () {ProductId = 4, ProductName = "ThinkPad X230 Laptop", ProductDescription = "Tough, slim and light, the 12.5 inch ThinkPad X230 elevates the business laptop to a new level with its vivid IPS display, purer sound and peerless keyboard ergonomics. Start faster, resume faster and charge your battery less, giving you more time to strive for success.",
                        ProductCategory = new Category () {CategoryId = 2, CategoryName = "Computers"}},

                        new QueryCustTable () {ProductId = 5, ProductName = "Programming ASP.NET MVC 4", ProductDescription = "Get up and running with ASP.NET MVC 4, and learn how to build modern server-side web applications. This guide helps you understand how the framework performs, and shows you how to use various features to solve many real-world development scenarios you’re likely to face.",
                        ProductCategory = new Category () {CategoryId = 3, CategoryName = "Books"}},

                        new QueryCustTable () {ProductId = 6, ProductName = "Pro ASP.NET MVC 4", ProductDescription = "In this fourth edition, the core model-view-controller (MVC) architectural concepts are not simply explained or discussed in isolation, but are demonstrated in action. You’ll work through an extended tutorial to create a working e-commerce web application that combines ASP.NET MVC with the latest C# language features and unit-testing best practices.",
                        ProductCategory = new Category () {CategoryId = 3, CategoryName = "Book"}}
               };

                return CustInfos;
            }
        }
    }