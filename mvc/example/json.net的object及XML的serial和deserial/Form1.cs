using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using Newtonsoft.Json;
using System.Xml;
using Newtonsoft.Json.Linq;

namespace WindowsFormsApplication1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string xml = "<root><id>2</id><name>tony</name></root>";

            XmlDocument doc = new XmlDocument();
            doc.LoadXml(xml);

            string json = JsonConvert.SerializeXmlNode(doc);
            MessageBox.Show(json);
            json = JsonConvert.SerializeXmlNode(doc, Newtonsoft.Json.Formatting.None);
            MessageBox.Show(json);
            json = JsonConvert.SerializeXmlNode(doc, Newtonsoft.Json.Formatting.None, true);
            MessageBox.Show(json);

            User user = JsonConvert.DeserializeObject<User>(json);
            Console.WriteLine(user.name);
        }

        private void button2_Click(object sender, EventArgs e)
        {
            string xml = "<root><id>2</id><name>tony</name></root>";

            XmlDocument doc = new XmlDocument();
            doc.LoadXml(xml);

            string json = JsonConvert.SerializeXmlNode(doc);
            json = JsonConvert.SerializeXmlNode(doc, Newtonsoft.Json.Formatting.None, true);

            User user = JsonConvert.DeserializeObject<User>(json);
            Console.WriteLine(user.name);
        }

        private void button3_Click(object sender, EventArgs e)
        {
            //string xml = "<root><id>2</id><name>tony</name></root>";
            string xml = "<root><User id='2' name='tony'></User></root>";

            XmlDocument doc = new XmlDocument();
            doc.LoadXml(xml);

            string json = JsonConvert.SerializeXmlNode(doc);
            json = JsonConvert.SerializeXmlNode(doc, Newtonsoft.Json.Formatting.None, true);
            json = json.Replace("@", string.Empty);

            JObject restoredObject = JsonConvert.DeserializeObject<JObject>(json);

            Console.WriteLine(restoredObject["User"]["id"]);
            Console.WriteLine(restoredObject["User"]["name"]);
        }

        private void button4_Click(object sender, EventArgs e)
        {
            string xml = "<root><User id='2' name='tony'></User><User id='3' name='peter'></User></root>";

            XmlDocument doc = new XmlDocument();
            doc.LoadXml(xml);

            string json = JsonConvert.SerializeXmlNode(doc);
            json = JsonConvert.SerializeXmlNode(doc, Newtonsoft.Json.Formatting.None, true);
            json = json.Replace("@", string.Empty);

            JObject restoredObject = JsonConvert.DeserializeObject<JObject>(json);
            JArray array = (JArray)restoredObject["User"];

            foreach (JObject obj_results in array)/*走訪JArray(results裡的每一筆JObject(這裡只有一筆)*/
            {
                Console.WriteLine(obj_results["name"]);
            }
        }

        private void button5_Click(object sender, EventArgs e)
        {
            string xml = "<root><User id='2' name='tony'></User><User id='3' name='peter'></User></root>";

            XmlDocument doc = new XmlDocument();
            doc.LoadXml(xml);

            string json = JsonConvert.SerializeXmlNode(doc);
            json = JsonConvert.SerializeXmlNode(doc, Newtonsoft.Json.Formatting.None, true);
            json = json.Replace("@", string.Empty);

            JObject restoredObject = JsonConvert.DeserializeObject<JObject>(json);
            JArray array = (JArray)restoredObject["User"];

            var result = from objs in array.Values<JObject>() /*走訪JArray裡每一筆JObject*/
                         where objs["name"].ToString() == "tony"
                         select objs;

            Console.WriteLine(result.Single<JObject>()["name"].ToString());
        }

        private void button6_Click(object sender, EventArgs e)
        {
            string xml = "<root><User id='2' name='tony'></User><User id='3' name='peter'></User></root>";

            XmlDocument doc = new XmlDocument();
            doc.LoadXml(xml);

            string json = JsonConvert.SerializeXmlNode(doc);
            json = JsonConvert.SerializeXmlNode(doc, Newtonsoft.Json.Formatting.None, true);
            json = json.Replace("@", string.Empty);

            JObject restoredObject = JObject.Parse(json);
            JArray array = (JArray)restoredObject["User"];
            List<User> myList = array.ToObject<List<User>>();

            Console.WriteLine(myList[0].name);

            foreach (var item in array)
            {
                Console.Write(item);
            }
        }

        private void button7_Click(object sender, EventArgs e)
        {
            List<User> students = new List<User>()
	        {
	          new User {id="1", name ="Tony"},
              new User {id="1", name ="Craig"}
	        };

            //output: Craig
            Console.WriteLine(students[0].name);

            foreach (var item in students)
            {
                Console.Write(item.name);
            }
        }
    }
}
