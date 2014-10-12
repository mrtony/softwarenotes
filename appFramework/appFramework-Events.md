appFramework - Events
------


參考 [appFramework Events](http://app-framework-software.intel.com/documentation.php#afui/afui_events)


## window相關的event

### hashchange - Panel改變時觸發
綁定物件：window

測試方式
$(window).on('hashchange', function () { console.log('hash changed!!') });

測試結果：在使用<a>切換到不同的panel時就會觸發。


