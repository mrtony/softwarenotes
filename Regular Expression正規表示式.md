Regular Expression正規表示式
------

## 以head first Javascript中文版的318頁來Study。

## 入門
### 正則表示式的語法
![](https://googledrive.com/host/0B7okXOykSneqV2duaVJXTVlXMEU)

### 常用的表達式字符
比較常用的
![](https://googledrive.com/host/0B7okXOykSneqUmhVX0ZISGF2UWM)

簡單的範例說明常用的字符
![](https://googledrive.com/host/0B7okXOykSneqaWdQbnk0amdXV2M)

## 限定符 (quantifier)
限定符前為子模式，是應用在搭配**子模式(sub-pattern)**，並控制子模式出現在模式裡的次數
![](https://googledrive.com/host/0B7okXOykSneqeFhIN19nMlZobFE)

簡單的範例說明限定符的使用
![](https://googledrive.com/host/0B7okXOykSneqUHh5TWR3OE9rVkU)


### {}的額外應用 - min,max
{min,max}限定符可以控制子模式出現的資數範圍

範例: 有些密碼可選擇5~8個數字,此時最適合使用限定符{}
/^\w{5,8}$/


## Javascript中的RegEx函數

### 利用正則表達式驗證數據 - regex.test
使用Regexp物件的test()來檢查字串是否包含正則表達式
![](https://googledrive.com/host/0B7okXOykSneqSjR6V0dHclZaRWs)

### 可以自行撰寫一個函數來做通用性的驗證工作

	function ValidRegex(regex, inputStr, helpText, helpMessage)

* regex: 正則表示式的字串
* inputStr: 要驗證的字串
* helpText: 一個html的element(p or div)用來顯示驗證結果
* helpMessage: 驗證失敗時要顯示的訊息

## 迭代(alternation)-用來做條件選擇
它與Javascript中的OR運算符很類似，它的功用是讓模式指定一連串可供選擇的子模式,只要有一個匹配成功,就算模式匹配成功.

範例
![](https://googledrive.com/host/0B7okXOykSneqR0ZnZmNFdEtraU0)

所以只要是red或是blue都會算符合條件。

## 跳脫字元\
若字串中需含有特殊字元,需要使用**\**在特殊字元前

/^\d{2}\/\d{2} : 日期格式中的**/**為特殊字元,所以要將\加在特殊字元前

## 字符類(Character class)
它是一組匹配**單一字符**的規則

![](https://googledrive.com/host/0B7okXOykSneqYnpwMVFKRlVteGM)

範例

	/d[iu]g/

在這個例中,輸入dig或dug都可以match, 但輸入diug則不符,因為它是用來匹配單一字符。

### 限定數字區間
使用 [1-9] 可限定數字1到9都是有效的

## 以Head First JavaScript Programming - Eric Freeman, Elisabeth Robson來Study


