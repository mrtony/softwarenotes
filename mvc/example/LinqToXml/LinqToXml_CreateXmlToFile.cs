
//Create XML file by using LINQ to XML
            DataTable dt = new DataTable();
            dt.Columns.Add("EmployeeID", typeof(string));
            dt.Columns.Add("Salary", typeof(decimal));
            dt.Columns.Add("Department", typeof(string));
            //dt.Columns.Add("DOJ", typeof(DateTime));

            dt.Rows.Add("1", "30000", "sales");
            dt.Rows.Add("2", "50000", "sales");

            using (System.IO.StreamWriter file = new System.IO.StreamWriter(@"C:\Temp\linqXml.xml"))
            {
                new XElement("Employees",
                                    from emp in dt.AsEnumerable()
                                    orderby emp.Field<decimal>("Salary") descending
                                    select new XElement("Employee",
                                                 new XAttribute("EmployeeID", emp.Field<string>("EmployeeID")),
                                                 new XAttribute("Salary", emp.Field<decimal>("Salary")),
                                                 new XElement("Department", emp.Field<string>("Department"))
                                               )).Save(file);
            }