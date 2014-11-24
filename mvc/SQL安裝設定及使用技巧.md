SQL安裝設定及使用技巧
------

## 為何每次連線都要用192.168.20.5x?
經由nslook查詢,發現路由到skis-dc2後,SQL主機的名稱並沒有在skis-dc2的設定中，所以只能用寫死的192.168.20.5x來做連線。

[what does it mean if nslookup and ping fail to resolve a host name but tracert does not?](http://superuser.com/questions/703664/what-does-it-mean-if-nslookup-and-ping-fail-to-resolve-a-host-name-but-tracert-d)

## SQL Express 匯入Northwin範例資料庫
參考這篇 [安裝範例資料庫](http://msdn.microsoft.com/zh-tw/library/8b6y4c7s.aspx)來將Northwin, Pubs, AdventureWorks範例範例資料庫載入SQL Express中.
