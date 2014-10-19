using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MvcWebapi.Controllers
{
    public class ValueController : ApiController
    {

        public List<StudentName> Get()
        {
            var result = new List<StudentName>()
            {
              new StudentName {FirstName="Craig", LastName="Playstead", ID=116},
              new StudentName {FirstName="Shu", LastName="Ito", ID=112},
              new StudentName {FirstName="Gretchen", LastName="Rivas", ID=113},
              new StudentName {FirstName="Rajesh", LastName="Rotti", ID=114}
            };
            return result;
        }
        // GET api/value/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/value
        public void Post([FromBody]string value)
        {
        }

        // PUT api/value/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/value/5
        public void Delete(int id)
        {
        }

        public class StudentName
        {
            // The default constructor has no parameters. The default constructor  
            // is invoked in the processing of object initializers.  
            // You can test this by changing the access modifier from public to  
            // private. The declarations in Main that use object initializers will  
            // fail. 
            public StudentName() { }

            // The following constructor has parameters for two of the three  
            // properties.  
            public StudentName(string first, string last)
            {
                FirstName = first;
                LastName = last;
            }

            // Properties. 
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public int ID { get; set; }

            public override string ToString()
            {
                return FirstName + "  " + ID;
            }
        }
    }
}
