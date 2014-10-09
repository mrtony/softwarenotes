appFramework - $.ui
------

## $.ui的method

### $.ui.launch()，$.ui.launchCompleted，$.ui.autoLaunch
官方的sample code是用手動模式在document.ready後才去做出ui.launch()。 document.ready的event發生後，以console檢查出afui的DOM包含data-defer的外部檔案都已經載入了。 而在在執行此method前，畫面並不會出現，一執行後畫面馬上就出現了。
它與 $.ui.autoLaunch 是相關聯的。

* $.ui.autoLaunch = false --> 使用手動模式去call $ui.launch()顯示畫面
* $.ui.autoLaunch = true --> 使用自動模式在DOM被入後(官方文件說DOMContentLoaded)自動去執行$ui.launch()顯示畫面

在$.ui.lauch()被執行過後，即使再執行一次也不會再重新載入。而且 **$.ui.launchCompleted** 在$ui.launch()沒有執行過的話會被設為false，反之設為true。

另一個要實驗的是intel.xdk.device.ready event發生時，也有去執行$.ui.launch()。那到底document.ready與intel.xdk.device.ready誰先發生? 若2個都有發生，那$.ui.lauch()被執行2次會怎樣?
