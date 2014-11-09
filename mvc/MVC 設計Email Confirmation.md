MVC 設計Email Confirmation
------

## 設計技巧

1. 要用到async await task
2. send時要用async或sync?
3. sendasync的callback
4. 

## 參考
* [SmtpClient MSDN](http://msdn.microsoft.com/zh-tw/library/system.net.mail.smtpclient(v=vs.110).aspx)
* [Account Confirmation and Password Recovery with ASP.NET Identity (C#)](http://www.asp.net/identity/overview/features-api/account-confirmation-and-password-recovery-with-aspnet-identity): 裡面有說明用SmtpClient送Email方法有成功。
* [Email Confirmation – ASP.NET MVC Web Application](http://blogs.microsoft.co.il/shair/2011/12/06/email-confirmation-aspnet-mvc-web-application/): 我有參考這個做法有成功。
* [ASP.NET MVC - reCAPTCHA and Email Confirmation](http://www.codeproject.com/Articles/313153/ASP-NET-MVC-reCAPTCHA-and-Email-Confirmation)：有參考到它的web.config
* [Create a secure ASP.NET MVC 5 web app with log in, email confirmation and password reset (C#)](https://www.asp.net/mvc/overview/security/create-an-aspnet-mvc-5-web-app-with-email-confirmation-and-password-reset)
* [SmtpClient.SendCompleted 事件](http://msdn.microsoft.com/zh-tw/library/system.net.mail.smtpclient.sendcompleted\(v=vs.110\).aspx): 有很好的範例,可以學到如何使用callback, user token等
* [Send user Confirmation email after Registration with Activation Link in ASP.Net](http://www.aspsnippets.com/Articles/Send-user-Confirmation-email-after-Registration-with-Activation-Link-in-ASPNet.aspx)
* [ASP:NET MVC 5 Confirm Registration Email](http://www.codeproject.com/Tips/738090/ASP-NET-MVC-Confirm-Registration-Email)
* [Adding Email Confirmation to ASP.NET Identity in MVC 5](http://kevin-junghans.blogspot.tw/2013/10/adding-email-confirmation-to-aspnet.html)
* [Adding Email Confirmation to SimpleMembership](http://kevin-junghans.blogspot.tw/2013/02/adding-email-confirmation-to.html)
* [Adding Email Confirmation to ASP.NET MVC](http://thekevincode.com/2010/09/adding-email-confirmation-to-asp-net-mvc/)
* [MVC Confirmation Email – Nuget](http://thekevincode.com/2011/10/mvc-confirmation-email-nuget/)
* [async await task說明](http://www.dotblogs.com.tw/jaigi/archive/2012/10/14/77474.aspx?fid=69369)