jQuery-Plugin-SimpleDialog2
------


## 使用Blank Mode建立dialog

參考[Blank Mode "Inlining"](http://dev.jtsage.com/jQM-SimpleDialog/demos2/blankin.html)。

首先建立一個html片段

    <div id="edit-tel-dialog"> 
        <ul data-role="listview">
            <li>客戶帳號</li>
            <li>客戶姓名</li>
    </div>

然後使用該片段的id來建立dialog，語法為$('#id').simpledialog2()，然後在該function設定一些模式：
    $(contactDialog.dialogId).simpledialog2({
        mode: "blank",
        headerText: "Title",
        headerClose: false,
        top: true,
        blankContent: true,
        themeDialog: 'a',
        width: '90%',
        animate: false,
        zindex: 1000
        }
    });

接下來call這一行就可以叫出該dialog

	$('#edit-tel-dialog').simpledialog2()


## 使用jQuery選擇器來操作dialog中的元件

### 選擇某id的dialog

以simple dialog將dialog建立並開啟後，使用 $(document)將DOM dump出來，其dialog在建立後會產生如下的DOM

![](https://googledrive.com/host/0B7okXOykSneqNU5STTN0YkhJQms)

出乎意外的，我們建立的id並不會在這個DOM中。如果我們要動態改變其內容，要直接選擇 **ui-simpledialog-container** 後，再去操作它包含的DOM。 

$('.ui-simpledialog-container')
