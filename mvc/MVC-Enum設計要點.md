MVC-Enum設計要點
------

## Enum如何以public使用
1. 新增一個檔案StatusBehavior.cs
2. 在此cs中新增：

		namespace Sys
		{
		    [Flags]  
		    public enum StatusBehavior
		    {
		        Approving = 1,
		        WaitEmailConfirm = 2,
		        Finished = 4
		    }
		}
3. 在其他檔案引入 Using Sys
4. 直接就可以使用

		Console.WriteLine(StatusBehavior.Approving);	//output: Approving
		Console.WriteLine((int)StatusBehavior.Approving);	//output: 1


## 屬性

### Flags 和 FlagsAttribute
本質上Flags和FlagsAttribute是相同的(參考這篇回答[C# Flags vs FlagsAttribute](http://stackoverflow.com/questions/4641326/c-sharp-flags-vs-flagsattribute))。

在enum前加上這個屬性可以將enum中的值以 **bit field** 的方式來使用。以上述範例為例：

		Console.WriteLine(StatusBehavior.Approving | StatusBehavior.Finished);	//output: Approving,Finished
		Console.WriteLine((int)(StatusBehavior.Approving | StatusBehavior.Finished));	//output: 5

## 參考
* [C# Enum Flags](http://www.dotnetperls.com/enum-flags)
* [MSDN-FlagsAttribute Class](http://msdn.microsoft.com/en-us/library/system.flagsattribute(v=vs.110).aspx)