using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Jarloo.YahooHistoricalLoader
{
    class Program
    {
        static void Main(string[] args)
        {
            List<HistoricalStock> data = HistoricalStockDownloader.DownloadData("2002", 2000);

            foreach (HistoricalStock stock in data)
            {
                Console.WriteLine(string.Format("Date={0} High={1} Low={2} Open={3} Close={4} AdjClose={5}", stock.Date, stock.High, stock.Low, stock.Open, stock.Close, stock.AdjClose));
            }

            Console.Read();
        }
    }
}
