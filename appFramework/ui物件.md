appFramework - $.ui
------

## $.ui的method

### $.ui.launch()，$.ui.launchCompleted，$.ui.autoLaunch
官方的sample code是用手動模式在document.ready後才去做出ui.launch()。 document.ready的event發生後，以console檢查出afui的DOM包含data-defer的外部檔案都已經載入了。 而在執行此method前，畫面並不會出現，一執行後畫面馬上就出現，而且之後會執行情.ui.ready()的callback。
它與 $.ui.autoLaunch 是相關聯的。

* $.ui.autoLaunch = false --> 使用手動模式去call $ui.launch()顯示畫面
* $.ui.autoLaunch = true --> 使用自動模式在DOM被入後(官方文件說DOMContentLoaded)自動去執行$ui.launch()顯示畫面

在$.ui.lauch()被執行過後，即使再執行一次也不會再重新載入。而且 **$.ui.launchCompleted** 在$ui.launch()沒有執行過的話會被設為false，反之設為true。

另一個要實驗的是intel.xdk.device.ready event發生時，也有去執行$.ui.launch()。那到底document.ready與intel.xdk.device.ready誰先發生? 若2個都有發生，那$.ui.lauch()被執行2次會怎樣?

### $.ui.useOSThemes及手動設定theme
$.ui.useOSThemes這個flag主要是將要套用的theme由偵測OS後自動套用改為手動套用。

* false: 手動套用
* true: 自動套用

手動套用時選擇預設theme的方式 ([參考AF Qiuck Start](http://app-framework-software.intel.com/documentation.php#afui/afui_themes))
直接在#afui加入class即可

	<div id="afui" class="ios7"></div>  <!-- ios7 --->
	<div id="afui" class="ios"></div>  <!-- ios --->
	<div id="afui" class="android"></div>  <!-- android --->
	<div id="afui" class="android light"></div>  <!-- android light theme--->
	<div id="afui" class="win8"></div>  <!-- WP8/Win8 --->
	<div id="afui" class="win8 light"></div>  <!-- WP8/Win8 light theme--->
	<div id="afui" class="bb"></div>  <!-- Blackberry 10 --->
	<div id="afui" class="tizen"></div>  <!-- tizen --->
自己試了幾個theme，覺得套 **bb** 最好看。



