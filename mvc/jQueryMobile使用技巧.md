Jquery Mobile使用技巧
------


## 與Form有關的應用

#### ui-field-contain
在<div\>或<fieldset\>區塊中,用來將label與input包在一起. 作用是螢幕夠寬時,label與input欄位會放在同一行. 若螢幕不夠寬時,label會在上,input會在下. [參考連結](http://www.w3schools.com/jquerymobile/jquerymobile_form_basic.asp)

	<form method="post" action="demoform.asp">
	  <div class="ui-field-contain">
	    <label for="fname">First name:</label>
	    <input type="text" name="fname" id="fname">
	    <label for="lname">Last name:</label>
	    <input type="text" name="lname" id="lname">
	  </div>
	</form>

#### fieldset+legend+controlgroup
可將複選表單元件(通常為button)的內容包在一起(用controlgroup),並給予標題(用legend), 而div無法加入標題,所以用fieldset. 另外可用data-type="horizontal"來控制水平或垂直擺放.

    <form method="post" action="demoform.asp">
      <fieldset data-role="controlgroup">
        <legend>Choose as many favorite colors as you'd like:</legend>
          <label for="red">Red</label>
          <input type="checkbox" name="favcolor" id="red" value="red">
          <label for="green">Green</label>
          <input type="checkbox" name="favcolor" id="green" value="green">
          <label for="blue">Blue</label>
          <input type="checkbox" name="favcolor" id="blue" value="blue">	
      </fieldset>
      <input type="submit" data-inline="true" value="Submit">
    </form>


## 即將不再支援的

* data-role="fieldcontain" (has been deprecated in 1.4 and will be removed in 1.5.)
* 1
