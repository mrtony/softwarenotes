using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1PracticList
{
    class Program
    {
        public class Customer
        {
            public int ID { get; set; }
            public string Name { get; set; }
            public int Salary { get; set; }
        }

        public class SavingCustomer : Customer
        {

        }

        /// <summary>
        /// 示範如何將物件或值加入List
        /// </summary>
        private static void ListAddExample()
        {
            Customer customer1 = new Customer()
            {
                ID = 101,
                Name = "Mark",
                Salary = 5000
            };

            Customer customer2 = new Customer()
            {
                ID = 110,
                Name = "Pam",
                Salary = 6500
            };

            Customer customer3 = new Customer()
            {
                ID = 119,
                Name = "John",
                Salary = 3500
            };

            List<Customer> customers = new List<Customer>();
            customers.Add(customer1);
            customers.Add(customer2);
            customers.Add(customer3);

            Customer c = customers[0];

            Console.WriteLine("ListAddExample");
            Console.WriteLine("ID:{0}, Name:{1}, Salary:{2}", c.ID, c.Name, c.Salary);
            Console.WriteLine("\n");
        }

        /// <summary>
        /// 示範List的Add可加入衍生類別
        /// </summary>
        private static void ListAddInheritObjectExample()
        {
            Customer customer1 = new Customer()
            {
                ID = 101,
                Name = "Mark",
                Salary = 5000
            };

            SavingCustomer saving_customer1 = new SavingCustomer()
            {
                ID = 110,
                Name = "Pam",
                Salary = 6500
            };


            List<Customer> customers = new List<Customer>();
            customers.Add(customer1);
            customers.Add(saving_customer1);

            Console.WriteLine("ListAddInheritObjectExample");
            foreach (Customer c in customers)
            {
                Console.WriteLine("ID:{0}, Name:{1}, Salary:{2}", c.ID, c.Name, c.Salary);
            }
            Console.WriteLine("\n");
        }

        /// <summary>
        /// 示範如何將List中的值取出來
        /// </summary>
        private static void UsingForeachGetListItemExample()
        {
            Customer customer1 = new Customer()
            {
                ID = 101,
                Name = "Mark",
                Salary = 5000
            };

            Customer customer2 = new Customer()
            {
                ID = 110,
                Name = "Pam",
                Salary = 6500
            };

            Customer customer3 = new Customer()
            {
                ID = 119,
                Name = "John",
                Salary = 3500
            };

            List<Customer> customers = new List<Customer>();
            customers.Add(customer1);
            customers.Add(customer2);
            customers.Add(customer3);

            Console.WriteLine("UsingForeachGetListItemExample");
            foreach (Customer c in customers)
            {
                Console.WriteLine("ID:{0}, Name:{1}, Salary:{2}", c.ID, c.Name, c.Salary);
            }
            Console.WriteLine("\n");
        }

        /// <summary>
        /// Insert值到List的任一個Index
        /// </summary>
        private static void ListInsertExample()
        {
            Customer customer1 = new Customer()
            {
                ID = 101,
                Name = "Mark",
                Salary = 5000
            };

            Customer customer2 = new Customer()
            {
                ID = 110,
                Name = "Pam",
                Salary = 6500
            };

            Customer customer3 = new Customer()
            {
                ID = 119,
                Name = "John",
                Salary = 3500
            };

            List<Customer> customers = new List<Customer>();
            customers.Add(customer1);
            customers.Add(customer2);
            customers.Add(customer3);

            customers.Insert(0, customer3);

            Console.WriteLine("ListInsertExample");
            foreach (Customer c in customers)
            {
                Console.WriteLine("ID:{0}, Name:{1}, Salary:{2}", c.ID, c.Name, c.Salary);
            }
            Console.WriteLine("\n");
        }

        /// <summary>
        /// 
        /// </summary>
        private static void ListIndexOfExample()
        {
            Customer customer1 = new Customer()
            {
                ID = 101,
                Name = "Mark",
                Salary = 5000
            };

            Customer customer2 = new Customer()
            {
                ID = 110,
                Name = "Pam",
                Salary = 6500
            };

            Customer customer3 = new Customer()
            {
                ID = 119,
                Name = "John",
                Salary = 3500
            };

            List<Customer> customers = new List<Customer>();
            customers.Add(customer1);   //index=0
            customers.Add(customer2);   //index=1
            customers.Add(customer3);   //index=2

            Console.WriteLine("ListIndexOfExample");
            //多載1:由第一個element開始找: 2
            Console.WriteLine("override1:" + customers.IndexOf(customer3));

            //多載2:由第2個element開始找-->找不到,返回-1
            Console.WriteLine("override2-1:" + customers.IndexOf(customer2, 2));

            //多載2:由第2個element開始找 --> 1
            Console.WriteLine("override2-2:" + customers.IndexOf(customer2, 1));

            //多載3:由第0個element開始找,只往下找1個-->找不到,返回-1
            Console.WriteLine("override3-1:" + customers.IndexOf(customer3, 0, 1));

            //多載3:由第0個element開始找,往下找3個-->找到,返回2
            Console.WriteLine("override3-1:" + customers.IndexOf(customer3, 0, 3));
        }

        /// <summary>
        /// 參考 Part 74 List collection class in c# (https://www.youtube.com/watch?v=gXyoJA579QI)作的範例
        /// </summary>
        /// <param name="args"></param>
        static void Main(string[] args)
        {
            ListAddExample();
            UsingForeachGetListItemExample();
            ListAddInheritObjectExample();
            ListInsertExample();
            ListIndexOfExample();

            Console.ReadLine(); //Pause
        }
    }
}
