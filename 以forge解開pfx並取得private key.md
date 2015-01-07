以forge解開pfx並取得private key
------

1. 在html中建立取得pfx檔案的界面

	<input id="cert-file" type="file" name="cert" /><output id="p12cert"></output>
2. 在js中建立選擇檔案後的callback並取得p12的內容

	$("#cert-file").change(handleFileSelect);

	function handleFileSelect(evt) {
	    var files = evt.target.files; // FileList object
	    getFile(files[0]);
	}


		function getFile(p12cert)
		{
		    var reader = new FileReader();
		    var password = '123457';
		    reader.readAsBinaryString(p12cert); // change from readAsText
		    reader.onload = (function (theFile) {
		        return function(eve) {
		
		            var p12Der = eve.target.result;
		
		            // get p12 as ASN.1 object
		            // Not working for one of my p12 files
		            var p12Asn1 = forge.asn1.fromDer(p12Der);
		
		            // decrypt p12 using the password 'password'
		            var p12 = forge.pkcs12.pkcs12FromAsn1(p12Asn1, password);
		        };
		    })(p12cert);


## 解析p12中的內容

safeContent[0]: "1.2.840.113549.1.12.10.1.3" -->
safeContent[1]: "1.2.840.113549.1.12.10.1.2"" -->


* [CRYPT_ALGORITHM_IDENTIFIER structure](http://msdn.microsoft.com/en-us/library/windows/desktop/aa381133(v=vs.85).aspx) : 在p12中的content會有type指出該筆資料的type,可以透過這個查出對應的資料內容。


## 參考

* [PEM, DER, P7B/PKCS#7, PFX/PKCS#12 certificates and conversions](http://injustfiveminutes.com/2013/12/02/pem-der-p7bpkcs7-pfxpkcs12-certificates-and-conversions/): 解釋什麼是PEM, DER, PKCS7, PKCS12
* [read .p12 and sign a message using pkcs#7](http://www.snip2code.com/Snippet/194036/read--p12-and-sign-a-message-using-pkcs-)
