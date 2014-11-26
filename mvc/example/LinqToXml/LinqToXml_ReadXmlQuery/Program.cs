using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
using System.Text;
using System.Threading.Tasks;
using Starbuzz;

namespace ConsoleApplication1LinqTa
{
    class Program
    {
        
        private static void TestStarbuzzExample()
        {
            XDocument doc = new XDocument();
            doc = Example.GetStarbuzzDataPlusAttr();

            // Do a simple query and print the results to the console
            var data = from item in doc.Descendants("person")
                       select new
                       {
                           drink = item.Element("favoriteDrink").Value,
                           moneySpent = item.Element("moneySpent").Value,
                           zipCode = item.Element("personalInfo").Element("zip").Value,
                           tel = item.Element("personalInfo").Attribute("Tel").Value
                       };
            foreach (var p in data)
                Console.WriteLine(p.ToString());

            // Do a more complex query and print the results to the console
            var zipcodeGroups = from item in doc.Descendants("person")
                                group item.Element("favoriteDrink").Value
                                by item.Element("personalInfo").Element("zip").Value
                                    into zipcodeGroup
                                    select zipcodeGroup;
            foreach (var group in zipcodeGroups)
                Console.WriteLine("{0} favorite drinks in {1}",
                                group.Distinct().Count(), group.Key);
        }

        static void Main(string[] args)
        {
            TestStarbuzzExample();
            Console.ReadLine();
        }

    }
}
