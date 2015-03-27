using System;
using System.Collections.Generic;
using System.Net;

namespace Jarloo.YahooHistoricalLoader
{
    public class HistoricalStockDownloader
    {
        public static List<HistoricalStock> DownloadData(string ticker, int yearToStartFrom)
        {
            List<HistoricalStock> retval = new List<HistoricalStock>();

            using (WebClient web = new WebClient())
            {
                //string data = web.DownloadString(string.Format("http://ichart.finance.yahoo.com/table.csv?s={0}&c={1}", ticker, yearToStartFrom));
                //string url =
                //    string.Format(
                //        "http://ichart.yahoo.com/table.csv?s={0}.TW&a=2&b=15&c={1}&d=0&e=31&f=2010&g=w&ignore=.csv",
                //        ticker, yearToStartFrom);
                string url =
                    string.Format(
                        "http://ichart.finance.yahoo.com/table.csv?s={0}.TW&a=2&b=15&c={1}&d=0&e=31&f=2010&g=d&ignore=.csv",
                        ticker, yearToStartFrom);

                string data = web.DownloadString(url);

                //data = data.Replace("r", "");
                data = data.Substring(data.IndexOfAny("0123456789".ToCharArray()));
                //string[] rows = data.Split('n');
                string[] rows = data.Split(new string[] { "\n", "\r\n" }, StringSplitOptions.RemoveEmptyEntries);

                //First row is headers so Ignore it
                for (int i = 0; i < rows.Length; i++)
                {
                    if (rows[i].Replace("n", "").Trim() == "") continue;

                    string[] cols = rows[i].Split(',');

                    HistoricalStock hs = new HistoricalStock();
                    hs.Date = Convert.ToDateTime(cols[0]);
                    hs.Open = Convert.ToDouble(cols[1]);
                    hs.High = Convert.ToDouble(cols[2]);
                    hs.Low = Convert.ToDouble(cols[3]);
                    hs.Close = Convert.ToDouble(cols[4]);
                    hs.Volume = Convert.ToDouble(cols[5]);
                    hs.AdjClose = Convert.ToDouble(cols[6]);

                    retval.Add(hs);
                }

                return retval;
            }
        }
    }
}
