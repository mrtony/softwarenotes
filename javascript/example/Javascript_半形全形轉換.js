//半形轉全形
var halfToFull = function (str) {
    var temp = "";
    for (var i = 0; i < str.toString().length; i++) {
        var charCode = str.toString().charCodeAt(i);
        if (charCode <= 126 && charCode >= 33) {
            charCode += 65248;
        } else if (charCode == 32) { // 半形空白轉全形
            charCode = 12288;
        }
        temp = temp + String.fromCharCode(charCode);
    }
    return temp;
};

//全形轉半形
var fullToHalf = function (str) {
 var result="";
        for(i=0;i <= str.length;i++){        
         if( str.charCodeAt(i)== 12288){
                result+=" ";
         }else{
                if(str.charCodeAt(i) > 65280 && str.charCodeAt(i) < 65375){
                 result += String.fromCharCode(str.charCodeAt(i) - 65248);
                }else{
                 result += String.fromCharCode(str.charCodeAt(i));
                }
         }
        }
  
  return result;
};

//擴充String物件的方法-半形轉全形
//Example: output １２３＠Ａ
//var xx = "123@aA";
//console.log(xx.halfToFull());
String.prototype.halfToFull = function () {
    var temp = "";
    for (var i = 0; i < this.toString().length; i++) {
        var charCode = this.toString().charCodeAt(i);
        if (charCode <= 126 && charCode >= 33) {
            charCode += 65248;
        } else if (charCode == 32) { // 半形空白轉全形
            charCode = 12288;
        }
        temp = temp + String.fromCharCode(charCode);
    }
    return temp;
};