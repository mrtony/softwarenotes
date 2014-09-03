jQuery使用實例
------

## jQuery selector
入門版的
id: $('#myId')
class: $('.myClass')
tag: $('div')

進階版
(參考jQuery Cookbook)
選擇被<form>包住的所有class為button的元件

	<div id="buttonsDiv"> 
	<form>
	  <input type="button" id="button1" class="buttons" value="div1"></input>
	  <input type="button" id="button2" class="buttons" value="div2"></input>
	  </form>
	  <input type="button" id="button3" class="buttons" value="div3"></input>
	  </div>
	</form>
	$(".buttons", $('form')).length;	//output 2

