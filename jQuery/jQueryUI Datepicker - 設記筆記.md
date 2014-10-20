jQueryUI Datepicker - 設記筆記
------

## 建立dp
    $( "#date-from" ).datepicker({
        dateFormat:"yy/mm/dd",
        defaultDate: "+1w",
        changeMonth: true,
        firstDay: 1,
        showOn: 'button',
        //showButtonPanel: true,
		onSelect: function(){},
        onClose: function( selectedDate ) {
            $( "#date-to" ).datepicker( "option", "minDate", selectedDate );
        },
    });

* dateFormat(yy/mm/dd, ...)): 設定日期顯示格式
* changeMonth true/false)(: 顯示月份列表供選擇
* firstDay (0~6): 設定每週的第一天(1代表星期一)
* showOn (true/false): 以按鍵叫出dp

## function callback: beforeshow
在顯示dp前會call, 傳入的參數有目前id及inst(物件內容)。 可以回傳settings物件決定要顯示的設定，包含setDate,defaultDate, dateFormat, callback等，所以可動態決定dp每次的顯示方式。

	beforeShow: function (input, inst) {
	    return {
	    firstDay:1,
	   };

## method: setDate
設定dp的當前值。

	$( "#date-from" ).datepicker( "setDate", "2000/10/12" );


## 設定中文語系

    var initDomDatepicker = function() {
		//設定中文語系
		 $.datepicker.regional['zh-TW'] = {
		  closeText: '關閉',
		  prevText: '&#x3c;上月',
		  nextText: '下月&#x3e;',
		  currentText: '今天',
		   monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
		   monthNamesShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
		  dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
		  dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
		  dayNamesMin: ['日','一','二','三','四','五','六'],
		  weekHeader: '周',
		  dateFormat: 'yy/mm/dd',
		  firstDay: 1,
		  isRTL: false,
		  showMonthAfterYear: true,
		  yearSuffix: '年'
	  };

	$.datepicker.setDefaults($.datepicker.regional["zh-TW"]);

## Function callback onSelect
在dp選擇後會call此函數。 可應用它來改變顯示的日期(以顯示民國年為例)

	onSelect: function (dateText, inst) {
	    var dateFormate = inst.settings.dateFormat == null ? "yy/mm/dd" : inst.settings.dateFormat; //取出格式文字
	    var reM = /m+/g;
	    var reD = /d+/g;
	    var objDate = { y: inst.selectedYear - 1911 < 0 ? inst.selectedYear : inst.selectedYear - 1911,
	        m: String(inst.selectedMonth+1).length != 1 ? inst.selectedMonth + 1 : "0" + String(inst.selectedMonth + 1),
	        d: String(inst.selectedDay).length != 1 ? inst.selectedDay : "0" + String(inst.selectedDay)
	    };
	    $.each(objDate, function (k, v) {
	        var re = new RegExp(k + "+");
	        dateFormate = dateFormate.replace(re, v);
	    });
	    inst.input.val(dateFormate);
	}

## dp顯示民國年

	$.datepicker._phoenixGenerateMonthYearHeader = $.datepicker._generateMonthYearHeader;
	$.datepicker._generateMonthYearHeader = function(inst, drawMonth, drawYear, minDate, maxDate,secondary, monthNames, monthNamesShort) {
        var result = $($.datepicker._phoenixGenerateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
            secondary, monthNames, monthNamesShort));
            
        result.find('select.ui-datepicker-year').children().each(function() {
            $(this).text(($(this).text() - 1911) + '年');
        })
        result.find('span.ui-datepicker-year').each(function() {
            $(this).text(($(this).text() - 1911));
        })

        if( inst.yearshtml ){
            var origyearshtml = inst.yearshtml;
            console.log(inst.yearshtml)
        }

        return result.html();
    };