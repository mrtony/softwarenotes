openssl的指令
------

## 列出ccertificate中的詳細資料

	openssl x509 -in cert.pem -noout -text

## 以rsautl作sign

	openssl rsautl -pkcs -sign -inkey priv.pem -in Order.txt -out rsa.p1

## 以rsautl作verify

	openssl rsautl -verify -inkey pubkey.pem -in rsa.p1 -pubin

## openssl作base64 encode

	openssl enc -base64 -in rsautl.p1 -out OrderSignatureB64.txt

## 以dgst作SHA1 sign

	openssl dgst -sha1 -sign priv.pem -out OrderDgstSigned.txt OrderP1_Ori.txt

## 以dgst作verify

	openssl dgst -verify pubkey.pem -sha1 -signature OrderDgstSigned.txt OrderP1_Ori.txt

## 參考

* [OpenSSL Command-Line HOWTO](https://www.madboa.com/geek/openssl/#encrypt-base64)
