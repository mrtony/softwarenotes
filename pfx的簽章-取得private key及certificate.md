以openssl取得pfx中的private key及certificate及PKCS7 sign
------


## 以openssl取得pfx中的private key及cert

安裝openssl

	sudo apt-get install openssl
在ubuntu中以openssl取得pfx中的private key

	openssl pkcs12 -in SKIS_0_0_212761_76.pfx -nocerts -out priv.pem -nodes
在ubuntu中以openssl取得pfx中的certificate

	openssl pkcs12 -in SKIS_0_0_212761_76.pfx -nokeys -out cert.pem
移除取得的private key的passphrase(密碼)

	openssl rsa -in priv.pem -out server.key
Export the certificate file from the pfx file:

	openssl pkcs12 -in SKIS_0_0_212761_76.pfx -clcerts -nokeys -out public.pem
從解出來的certificate PEM取得public key

	openssl x509 -pubkey -noout -in cert.pem  > pubkey.pem
以PKCS7加簽

	openssl smime -sign -nodetach -in DATA2330.txt -out signed.p7 -inkey priv.pem -signer cert.pem
實驗結果有沒有加nodetach在TA都可驗過.

以RSA (PKCS#1??)

	openssl rsautl -sign -in DATA2330.txt -inkey priv.pem -out sig.p1
解簽

	openssl rsautl -verify -in sig.p1 -inkey priv.pem
dump

	openssl rsautl -verify -in sig.p1 -inkey priv.pem -raw -hexdump

## RSA的加解密

### 以公鑰加密以私鑰解密
公鑰加密

	openssl rsautl -encrypt -pubin -inkey pubkey.pem -in DATA2330.txt -out rsa.txt
私鑰解密

	cat rsa.txt | openssl rsautl -decrypt -inkey priv.pem 

### 以私鑰加密以公鑰解密

openssl rsautl -sign -inkey priv.pem -in DATA2330.txt -out rsa.p1
cat rsa.p1 | openssl rsautl -verify -inkey pubkey.pem -pubin



## 以rsautl和dgst簽章

	//sign
	openssl rsautl -pkcs -sign -inkey priv.pem -in Order.txt -out rsa.p1

	//output
	openssl rsautl -verify -inkey pubkey.pem -in rsa.p1 -pubin

	//sign
	openssl dgst -sha256 -sign priv.pem -out in.txt.sha256 Order.txt

	//verify
	openssl dgst -sha256 -verify pubkey.pem -signature in.txt.sha256 Order.txt 

	//sign
	openssl dgst -sha1 -sign priv.pem -out in.txt.sha1 Order.txt

	//verify
	openssl dgst -sha1 -verify pubkey.pem -signature in.txt.sha1 Order.txt 

* [CA建置工具：Openssl的管理與使用介紹（上）](http://www.ascc.sinica.edu.tw/nl/91/1818/02.txt): 這兩篇上下一定要看,幾乎包含加密與簽章的資訊
* [CA建置工具Openssl的管理與使用介紹（下）](http://www.ascc.sinica.edu.tw/nl/91/1819/02.txt)
* [Extracting Certificate and Private Key Files from a .pfx File](https://wiki.cac.washington.edu/display/infra/Extracting+Certificate+and+Private+Key+Files+from+a+.pfx+File) : 我參考此篇有取得SKIS CHT的private key及certificate
* [How to Extract Private Key and Certificate Files from a .PFX File](http://tecadmin.net/extract-private-key-and-certificate-files-from-pfx-file/) : 解釋pfx檔案由哪些元件構成
* [OpenSSL Command-line Cookbook](http://www.metasyntax.net/unix/openssl.html): 可用openssl建立sign message的command
* [RSA Encryption & Decryption Example with OpenSSL in C](http://hayageek.com/rsa-encryption-decryption-openssl-c/)
* [openssl command line to verify the signature](http://stackoverflow.com/questions/5140425/openssl-command-line-to-verify-the-signature)
* [An Introduction to the OpenSSL command line tool](http://users.dcc.uchile.cl/~pcamacho/tutorial/crypto/openssl/openssl_intro.html)
* [rsautl - RSA utility](http://linux.die.net/man/1/rsautl)
* [JavaScript Cryptography](http://cryptojs.altervista.org/): 列出JS做加密的函式庫
* [Sign (PKCS#1) with](http://phpseclib.sourceforge.net/interop.html#)
* [Difference between openSSL rsautl and dgst](http://stackoverflow.com/questions/9951559/difference-between-openssl-rsautl-and-dgst): openssl dgst與rsautl在sign的差異
* [Can't decrypt string with CryptoJS](http://stackoverflow.com/questions/20519166/cant-decrypt-string-with-cryptojs): 有用Crypto對PKCS7做簽章的範例.