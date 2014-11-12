mvc_Csharp_Lambda使用
------


## 觀念

### Delegate

要了解lambda首先要知道delegate(委派)的觀念。實際上delegate有點像是C語言的函數指標，可以指向任意的函數，因此可以利用這個特性來當成匿名函數增加函數的彈性。假設我們設計一個可供四則運算的函數但又不想要直接呼叫Add/Div/Sub/Mul，就可以利用delegate來設計：

	delegate int Compute(int a, int b);

    static int Add(int a, int b)
    {
        return a + b;
    }
    static int Mul(int a, int b)
    {
        return a * b;
    }
    private void button1_Click(object sender, EventArgs e)
    {
        Compute myCompute = Add;
        MessageBox.Show(myCompute(2,3).ToString());
        myCompute = Mul;
        MessageBox.Show(myCompute(2, 3).ToString());
    }

輸出的結果會得到5和6。 這就是delegate的用法。

### Lambda

Lambda實際上是一種匿名函數的簡化，會被大量用在LINQ的查詢。 在了解delegate後，再來說明lambda會較容易理解。它的運算式如下：

	x => x * x;
左邊代表的是輸入參數，右邊代表的是運算式或陳述式區塊。上述運算式的意思是：傳入參數x，然後傳回x的平方。其相等於delegate的作法：

	delegate int del(int i);
	static void Main(string[] args)
	{
	    del myDelegate = x => x * x;
	    int j = myDelegate(5); //j = 25
	}

再以四則運算為例，用lambda表示式可以將Add，Mul省略

    Compute myCompute = (x,y) => x + y;
    MessageBox.Show(myCompute(2, 3).ToString());
    Compute myCompute = (x, y) => x * y;
    MessageBox.Show(myCompute(2, 3).ToString());
執行後可以得到與delegate相同的結果，但可以省去Add，Mul的function及delegate的宣告。

而較常用的LINQ的方式範例如下

    List<int> elements = new List<int>() { 10, 20, 31, 40 };
    // ... Find index of first odd element.
    int oddIndex = elements.FindIndex(x => x % 2 != 0);
    Console.WriteLine(oddIndex);
FindIndex會遍歷List的每一個元素並當成參數傳入x，然後以運算式處理哪一個數無法被2整除再傳回給oddIndex。所以答案就是2囉。

## 參考
* [MSDN-匿名函式 (C# 程式設計手冊)](http://msdn.microsoft.com/zh-tw/library/bb882516.aspx)
* [C# 筆記：從 Lambda 表示式到 LINQ](http://huan-lin.blogspot.com/2009/01/from-lambda-to-linq.html)
* [C# 學習筆記－委派與 Lambda 表示式](http://huan-lin.blogspot.com/2011/08/csharp-notes-delegate.html)
* [快快樂樂學LINQ系列前哨戰－Lambda的簡介](http://www.dotblogs.com.tw/hatelove/archive/2012/06/07/csharp-linq-lambda-introduction.aspx)
* [黑暗執行緒 - C# 3.0 極簡風 - Lambda Expression](http://blog.darkthread.net/post-2008-06-13-lambda-expression.aspx)
* [dotnetperls C#](http://www.dotnetperls.com/lambda)