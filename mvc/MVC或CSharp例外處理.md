MVC或CSharp例外處理
------


## Throw

### 以throw丟出例外且中斷程式執行

	class Demo {
	    static void Main() {
	        string s = null;
	 
	        if (s == null) {
	            throw new System.Exception();
	        }
	 
	        System.Console.Write("The string s is null"); 
	    }
	}

### 以throw丟出例外不打斷程式執行

	class Demo {
	    static void Main() {
	        string s = null;
	         
	        try {
	            if (s == null) {
	                throw new System.Exception();
	            }
	        }
	        catch {
	            System.Console.WriteLine("something wrong");
	        }
	 
	        System.Console.WriteLine("The string s is null"); 
	    }
	}

###
一個簡單的除0錯誤來看try/catch如何運作。
當除0在computDiv發生時，"computDiv after throw in catch1"會被印出來但"computDiv after throw in catch2"不會印，最後finally一定會被執行所以會印"computDiv after throw3 in finally"，但"computDiv after throw5"也不會被印。 再來會將這個錯誤再丟回上一層，因此"button15_Click after throw in catch"會被印出來，而且這一層已不需要再throw接再(已在form的最上層)，所以"button15_Click after throw"也會被印出來。

    private int computDiv(int aa, int bb)
    {
        try
        {
            return aa / bb;
        }
        catch (Exception ex)
        {
            // some code that handles the exception
            Console.WriteLine("computDiv after throw in catch1");
            throw;
            Console.WriteLine("computDiv after throw in catch2");
        }
        finally
        {
            Console.WriteLine("computDiv after throw3 in finally");
        }
        Console.WriteLine("computDiv after throw5");
    }

    private void button15_Click(object sender, EventArgs e)
    {
        try
        {
            computDiv(10, 0);
        }
        catch (Exception ex)
        {
            // some code that handles the exception
            Console.WriteLine("button15_Click after throw in catch");
        }
        Console.WriteLine("button15_Click after throw");
    }

所以只要上層可以處理，throw可以一直丟。

## 參考
* [C# 快速導覽 - throw 陳述](http://pydoing.blogspot.tw/2013/06/Csharp-throw.html)
* [msdn 例外處理陳述式 (C# 參考)](http://msdn.microsoft.com/zh-tw/library/s7fekhdy%28v=vs.80%29.aspx)
* [Exception Handling Best Practices in .NET](http://www.codeproject.com/Articles/9538/Exception-Handling-Best-Practices-in-NET#LogException.ToString%28%29;neverlogonlyException.Message11)