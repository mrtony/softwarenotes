LINQ-group by
------

## group by 用法1

原始資料如下 

![](https://googledrive.com/host/0B7okXOykSneqRjF1TldsTGNacVU)

以CustomerID當成group by 的條件

![](https://googledrive.com/host/0B7okXOykSneqNHdGRElFczFYTUE)
結果得到IGrouping的5個集合,並放到g變數中。

針對這5個集合,產生新的IOrderQueryable的集合,並定義

* Price為每個IGrouping集合的Price加總
* Count為每個IGrouping集合的總數加總
* Date為每個IGrouping集合的日期資料,所以又產生了一個IEnumerable的Date內容放入每個IGrouping中的日期

![](https://googledrive.com/host/0B7okXOykSneqNUhWQVAwWm15Q0k)

## group by 用法2

在group by時,可以指定一個以上的條件作group by條件

![](https://googledrive.com/host/0B7okXOykSneqUVhRY3c3NDY5anM)


