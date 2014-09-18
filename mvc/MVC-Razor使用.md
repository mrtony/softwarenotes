MVC-Razor使用
------

## 新增屬性到input type
    <div class="ui-body ui-body-a">
        <label for="sbc-email">電子郵件</label>
        @Html.TextBoxFor(model => model.SBCEmail, new { id = "sbc-email", data_mini = "true", data_clear_btn = "true" , placeholder = "test"})

        <label for="sbc-cellphone1">手機號碼１</label>
        @Html.TextBoxFor(model => model.SBCMobile1, new { id = "sbc-cellphone1", data_mini = "true", data_clear_btn = "true" })

        <label for="sbc-cellphone2">手機號碼２</label>
        @Html.TextBoxFor(model => model.SBCMobile2, new { id = "sbc-cellphone2", data_mini = "true", data_clear_btn = "true" })

        <label for="sbc-phone">通訊電話</label>
        @Html.TextBoxFor(model => model.SBCTel1No, new { id = "sbc-phone", data_mini = "true", data_clear_btn = "true" })

        <label for="sbc-addr">通訊地址:</label>
        @Html.TextBoxFor(model => model.SBCAddr, new { id = "sbc-addr", data_mini = "true", data_clear_btn = "true" })
    </div>