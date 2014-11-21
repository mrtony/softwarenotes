GuerrillaNtp使用說明
------

## 安裝

	Install-Package GuerrillaNtp

Note: 此套件需要.netFramework4.0

## 使用

1. ntp server: "pool.ntp.org"
2. 網路斷線: 會去跑catch. 可以在這裡返回今天的時間或做一些處理。

		using GuerrillaNtp;
	
	    private void button1_Click(object sender, EventArgs e)
	    {
	        DateTime today = DateTime.Now;
	        TimeSpan offset;
	        try
	        {
	            using (var ntp = new NtpClient("pool.ntp.org"))
	            {
	                ntp.Timeout = TimeSpan.FromSeconds(5);
	                var ntpResponse = ntp.Query();
	                offset = ntpResponse.CorrectionOffset;
	            }
	            // use the offset throughout your app
	            //var accurateTime = DateTime.UtcNow + offset;
	            today += offset;
	            MessageBox.Show(today.ToString());
	        }
	        catch (Exception ex)
	        {
	            MessageBox.Show(ex.ToString());
	        }
	    }

## 來源

* [GuerrillaNtp 1.0.0](https://www.nuget.org/packages/GuerrillaNtp/)
* [GuerrillaNtp: App-embedded NTP client for .NET](http://blog.angeloflogic.com/2014/07/guerrillantp-app-embedded-ntp-client.html)